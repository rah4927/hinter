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
    text = re.sub(r"<(?=[a-zA-Z0-9])", r" < ", text)  # For cases like <z_1

    # Fix > in similar contexts
    text = re.sub(r"([^\\]|^)([_^]\{[^}]*)>([^}]*\})", r"\1\2 > \3", text)
    text = re.sub(r"([^\\]|^)>(?![a-zA-Z])", r"\1 > ", text)
    text = re.sub(r"(?<=[a-zA-Z0-9])>", r" > ", text)
    text = re.sub(r">(?=[a-zA-Z0-9])", r" > ", text)

    # Fix <= and >= (both ≤/≥ unicode and <= />= ASCII versions)
    text = re.sub(r"([^\\]|^)≤(?=[a-zA-Z0-9])", r"\1 ≤ ", text)  # Add space after ≤
    text = re.sub(r"([a-zA-Z0-9])≤", r"\1 ≤", text)  # Add space before ≤
    text = re.sub(r"([^\\]|^)≥(?=[a-zA-Z0-9])", r"\1 ≥ ", text)  # Add space after ≥
    text = re.sub(r"([a-zA-Z0-9])≥", r"\1 ≥", text)  # Add space before ≥
    text = re.sub(
        r"([^\\]|^)<=(?=[a-zA-Z0-9])", r"\1 ≤ ", text
    )  # Convert <= to ≤ and add spaces
    text = re.sub(r"([a-zA-Z0-9])<=", r"\1 ≤", text)  # Convert <= to ≤ and add spaces
    text = re.sub(
        r"([^\\]|^)>=(?=[a-zA-Z0-9])", r"\1 ≥ ", text
    )  # Convert >= to ≥ and add spaces
    text = re.sub(r"([a-zA-Z0-9])>=", r"\1 ≥", text)  # Convert >= to ≥ and add spaces

    # Clean up any double spaces that might have been created
    text = re.sub(r" +", " ", text)

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


def clean_problem_statement(statement: str) -> str:
    """Remove lines containing variations of 'the final answer(s)' from the problem statement."""
    # Match any line containing 'the final answer(s)' (case insensitive)
    return re.sub(
        r".*the final answers? (?:is|are).*\n?", "", statement, flags=re.IGNORECASE
    )


def convert_latex_lists(text):
    """Convert LaTeX itemize environments to Markdown lists."""
    # Remove \begin{itemize} and \end{itemize}, ensuring blank lines around lists
    text = re.sub(r"\\begin\{itemize\}\s*", "\n\n", text)
    text = re.sub(r"\\end\{itemize\}\s*", "\n\n", text)

    # Convert \item to Markdown list items with proper indentation
    text = re.sub(r"\s*\\item\s*", "\n* ", text)

    # Fix multiple consecutive newlines
    text = re.sub(r"\n{3,}", "\n\n", text)

    # Remove spaces at the beginning of lines except for list items
    text = re.sub(r"^(?!\*)\s+", "", text, flags=re.MULTILINE)

    # Convert hyphens at the start of lines that look like list items or cases
    text = re.sub(
        r"(?:^|\n)-\s+(?:Case|\([a-z0-9]\))", "\n* ", text, flags=re.MULTILINE
    )
    text = re.sub(r"(?:^|\n)-\s*Case\s+(\d+)", r"\n* Case \1", text, flags=re.MULTILINE)

    # Ensure proper spacing around lists:
    # 1. Add blank line before lists if not present
    text = re.sub(r"([^\n])\n(?=\*)", r"\1\n\n", text)
    # 2. Add blank line after lists if not present
    text = re.sub(r"(\*[^\n]*)\n(?=[^\s\*])", r"\1\n\n", text)
    # 3. Ensure list items are properly spaced
    text = re.sub(r"(\*[^\n]*)\n(?=\*)", r"\1\n", text)
    # 4. Ensure space after asterisk
    text = re.sub(r"\*(?=\S)", "* ", text)

    # Clean up any remaining formatting issues
    text = re.sub(r" +", " ", text)  # Remove multiple spaces
    text = re.sub(r"\n{3,}", "\n\n", text)  # Clean up multiple newlines again
    text = re.sub(
        r"\n\n\*", "\n\n* ", text
    )  # Ensure space after asterisk at start of line

    # Fix any remaining case formatting issues
    text = re.sub(
        r"(?:^|\n)(?:-|\*)\s*Case\s+(\d+)", r"\n* Case \1", text, flags=re.MULTILINE
    )

    return text


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

    # Clean the statement to remove final answer lines
    statement = clean_problem_statement(statement)

    # Fix inequality symbols
    statement = fix_latex_inequalities(statement)
    solution = fix_latex_inequalities(solution)

    # Convert LaTeX lists to Markdown
    statement = convert_latex_lists(statement)
    solution = convert_latex_lists(solution)

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
