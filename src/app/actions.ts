'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProblemMetadata, Problem } from '../lib/problems';

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
      const { data } = matter(fileContents);
      problems.push(data as ProblemMetadata);
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
        const [statement, solution] = content.split('---').map((s: string) => s.trim());
        return {
          metadata: data as ProblemMetadata,
          statement,
          solution
        };
      }
    }
  }

  return null;
} 