import json
import os
import re
from pathlib import Path


def convert_latex_delimiters(text):
    """Convert $ delimiters to \( \) or \[ \] format."""
    # Replace inline math delimiters
    text = re.sub(r"(?<!\\)\$([^$\n]+?)(?<!\\)\$", r"\\(\1\\)", text)

    # Replace display math delimiters ($$...$$)
    text = re.sub(r"(?<!\\)\$\$([\s\S]+?)(?<!\\)\$\$", r"\\[\1\\]", text)

    return text


def fix_latex_inequalities(text):
    """Add spaces around inequality symbols in LaTeX to prevent HTML parsing issues."""
    # Fix < in subscripts and other math contexts
    text = re.sub(
        r"([^\\]|^)([_^]\{[^}]*)<([^}]*\})", r"\1\2 < \3", text
    )  # For _{i<j} cases
    text = re.sub(r"([^\\]|^)<(?![a-zA-Z])", r"\1 < ", text)  # For general < cases
    text = re.sub(r"(?<=[a-zA-Z0-9])<", r" < ", text)  # For cases like n<m

    # Fix > in similar contexts
    text = re.sub(r"([^\\]|^)([_^]\{[^}]*)>([^}]*\})", r"\1\2 > \3", text)
    text = re.sub(r"([^\\]|^)>(?![a-zA-Z])", r"\1 > ", text)
    text = re.sub(r"(?<=[a-zA-Z0-9])>", r" > ", text)

    # Fix <= and >= (both ≤/≥ unicode and <= />= ASCII versions)
    text = re.sub(r"([^\\]|^)≤", r"\1 ≤ ", text)
    text = re.sub(r"([^\\]|^)≥", r"\1 ≥ ", text)
    text = re.sub(r"([^\\]|^)<=", r"\1 ≤ ", text)
    text = re.sub(r"([^\\]|^)>=", r"\1 ≥ ", text)

    return text


def extract_problem_info(filename):
    """Extract year, category, and problem number from filename."""
    match = re.match(
        r"fimo_(\d{4})_(algebra|number_theory)_p(\d+)(?:_\d+)?\.json", filename
    )
    if match:
        return {
            "year": match.group(1),
            "category": match.group(2),
            "number": match.group(3),
            "full_id": os.path.splitext(filename)[0],  # Remove .json extension
        }
    return None


def format_source(info):
    """Format source string with proper capitalization."""
    category = "Number Theory" if info["category"] == "number_theory" else "Algebra"
    return f"IMO {info['year']} {category} Problem {info['number']}"


def determine_topics(filename):
    """Determine topics based on filename."""
    filename_str = str(filename)
    topics = []
    if "algebra" in filename_str:
        topics.append("algebra")
    if "number_theory" in filename_str:
        topics.append("number theory")
    return topics


def convert_problem(input_file, output_dir):
    """Convert a single FIMO problem to our format."""
    with open(input_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    info = extract_problem_info(os.path.basename(input_file))
    if not info:
        print(f"Skipping {input_file} - couldn't parse filename")
        return

    # Create problem directory if it doesn't exist
    year_dir = output_dir / info["year"]
    year_dir.mkdir(parents=True, exist_ok=True)

    # Convert the content
    statement = convert_latex_delimiters(data["informal_statement"])
    solution = convert_latex_delimiters(data["informal_proof"])

    # Fix inequality symbols
    statement = fix_latex_inequalities(statement)
    solution = fix_latex_inequalities(solution)

    # Create the markdown content
    content = f"""---
id: {info['full_id']}
year: {info['year']}
number: {info['number']}
difficulty: medium
topics: {json.dumps(determine_topics(input_file))}
source: "{format_source(info)}"
---

{statement}

---
{solution}
"""

    # Write the output file using the full problem identifier
    output_file = year_dir / f"{info['category']}_p{info['number']}.md"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Converted {input_file} -> {output_file}")


def main():
    """Convert all FIMO problems to our format."""
    fimo_dir = Path("fimo_data/informal")
    output_dir = Path("problems")

    # Process all JSON files
    for json_file in fimo_dir.glob("*.json"):
        convert_problem(json_file, output_dir)


if __name__ == "__main__":
    main()
