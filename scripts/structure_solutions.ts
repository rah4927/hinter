import { OpenAI } from 'openai';
import * as fs from 'fs/promises';
import * as path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Configuration
const BATCH_SIZE = 5;  // Process 5 files at a time
const DELAY_BETWEEN_BATCHES = 10000;  // 10 second delay between batches
const OUTPUT_DIR = 'structured_problems';

const SOLUTION_STRUCTURE_PROMPT = `You MUST respond with ONLY valid JSON, no other text.

Analyze this IMO problem and solution to create a structured JSON representation.
The JSON should capture:
1. Problem statement and key objects/functions
2. Solution path broken into logical steps
3. Key insights and lemmas needed
4. Dependencies between steps
5. Verification points

Mathematical expressions can be written in either plain text (e.g., "x^2 + 2x") or LaTeX (e.g., "\\(x^2 + 2x\\)") - use whichever is clearer for each case.

The response must be valid JSON in exactly this format:
{
  "problem": {
    "statement": string,  // Can include LaTeX notation if present in original
    "key_objects": [
      {
        "name": string,  // e.g., "P(x)" or "\\(P(x)\\)"
        "type": string,  // e.g., "polynomial", "function"
        "description": string  // Can include LaTeX for mathematical expressions
      }
    ],
    "constraints": [string]  // Can include LaTeX notation
  },
  "solution_path": {
    "strategy": string,
    "steps": [
      {
        "id": number,
        "type": "assumption" | "key_insight" | "technique" | "deduction" | "verification",
        "content": string,  // Can include LaTeX for mathematical expressions
        "requires": [number],
        "techniques_used": [string]
      }
    ]
  },
  "key_lemmas": [
    {
      "statement": string,  // Can include LaTeX for mathematical expressions
      "used_in_steps": [number]
    }
  ],
  "verification_points": [
    {
      "after_step": number,
      "what_to_verify": string  // Can include LaTeX for mathematical expressions
    }
  ]
}`;

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if ((error as any).code !== 'EEXIST') {
      throw error;
    }
  }
}

async function structureSolution(problemPath: string): Promise<void> {
  try {
    // Read the problem file
    console.log('Reading file:', problemPath);
    const content = await fs.readFile(problemPath, 'utf-8');
    console.log('File content length:', content.length);
    
    // Send to OpenAI
    console.log('Sending to OpenAI...');
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: SOLUTION_STRUCTURE_PROMPT
        },
        {
          role: 'user',
          content: content
        }
      ],
      temperature: 0.1 // Low temperature for more consistent JSON
    });

    console.log('Received response from OpenAI');
    const structuredSolution = completion.choices[0].message.content;
    if (!structuredSolution) {
      throw new Error('No response received from OpenAI');
    }
    console.log('Response length:', structuredSolution.length);
    
    // Create the output path preserving the year/problem structure
    const relativePath = path.relative(path.join(process.cwd(), 'problems'), problemPath);
    const outputPath = path.join(process.cwd(), OUTPUT_DIR, relativePath.replace('.md', '.json'));
    
    // Ensure the output directory exists
    await ensureDirectoryExists(path.dirname(outputPath));
    
    // Write the structured solution
    await fs.writeFile(outputPath, structuredSolution);
    console.log(`Structured solution written to ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${problemPath}:`, error);
    if (error instanceof Error) {
      console.error('Full error:', {
        message: error.message,
        stack: error.stack,
        details: error
      });
    }
  }
}

async function processBatch(problems: string[]): Promise<void> {
  console.log(`Processing batch of ${problems.length} problems...`);
  await Promise.all(problems.map(problem => structureSolution(problem)));
}

async function main() {
  try {
    // Get all problem files
    const problemsDir = path.join(process.cwd(), 'problems');
    const years = await fs.readdir(problemsDir);
    const allProblems: string[] = [];
    
    // Collect all problem files
    for (const year of years) {
      if (!year.startsWith('20')) continue;
      
      const yearDir = path.join(problemsDir, year);
      const problems = await fs.readdir(yearDir);
      
      for (const problem of problems) {
        if (!problem.endsWith('.md')) continue;
        allProblems.push(path.join(yearDir, problem));
      }
    }
    
    console.log(`Found ${allProblems.length} problems to process`);
    
    // Process in batches
    for (let i = 0; i < allProblems.length; i += BATCH_SIZE) {
      const batch = allProblems.slice(i, i + BATCH_SIZE);
      console.log(`Processing batch ${Math.floor(i/BATCH_SIZE) + 1} of ${Math.ceil(allProblems.length/BATCH_SIZE)}`);
      await processBatch(batch);
      
      // Delay between batches if not the last batch
      if (i + BATCH_SIZE < allProblems.length) {
        console.log(`Waiting ${DELAY_BETWEEN_BATCHES/1000} seconds before next batch...`);
        await sleep(DELAY_BETWEEN_BATCHES);
      }
    }
    
    console.log('All problems processed successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Only run if called directly
if (require.main === module) {
  main();
} 