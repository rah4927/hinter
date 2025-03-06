export interface ProblemMetadata {
  id: string;
  year: number;
  number: number;
  difficulty: 'easy' | 'medium' | 'hard';
  topics: string[];
  source: string;
}

export interface Problem {
  metadata: ProblemMetadata;
  statement: string;
  solution: string;
} 