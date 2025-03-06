export interface Problem {
  id: string;
  title: string;
  year: number;
  number: number;
  statement: string;
  difficulty: "easy" | "medium" | "hard";
  topics: string[];
  source: string;
} 