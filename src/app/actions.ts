'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProblemMetadata, Problem } from '../lib/problems';

function isProblemMetadata(data: unknown): data is Omit<ProblemMetadata, 'statement'> {
  const d = data as Record<string, unknown>;
  return typeof d.id === 'string' &&
    typeof d.year === 'number' &&
    typeof d.number === 'number' &&
    typeof d.difficulty === 'string' &&
    Array.isArray(d.topics) &&
    typeof d.source === 'string';
}

export async function getAllProblems(): Promise<ProblemMetadata[]> {
  const problemsDir = path.join(process.cwd(), 'problems');
  const years = fs.readdirSync(problemsDir);
  const problems: ProblemMetadata[] = [];

  years.forEach(year => {
    const yearDir = path.join(problemsDir, year);
    const problemFiles = fs.readdirSync(yearDir);

    problemFiles.forEach(file => {
      const filePath = path.join(yearDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      if (!isProblemMetadata(data)) {
        throw new Error(`Invalid problem metadata in ${filePath}`);
      }
      const [statement] = content.split('---').map(s => s.trim());
      problems.push({ ...data, statement });
    });
  });

  return problems.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return a.number - b.number;
  });
}

export async function getProblemById(id: string): Promise<Problem | null> {
  const problemsDir = path.join(process.cwd(), 'problems');
  const years = fs.readdirSync(problemsDir);

  for (const year of years) {
    const yearDir = path.join(problemsDir, year);
    const problemFiles = fs.readdirSync(yearDir);

    for (const file of problemFiles) {
      const filePath = path.join(yearDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      if (data.id === id) {
        if (!isProblemMetadata(data)) {
          throw new Error(`Invalid problem metadata in ${filePath}`);
        }
        const [statement, solution] = content.split('---').map(s => s.trim());
        return {
          ...data,
          statement,
          solution
        };
      }
    }
  }

  return null;
} 