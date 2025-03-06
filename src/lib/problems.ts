export interface ProblemMetadata {
  id: string;
  year: number;
  number: number;
  difficulty: 'easy' | 'medium' | 'hard';
  topics: string[];
  source: string;
  statement: string;
}

export interface Problem extends ProblemMetadata {
  solution: string;
} 