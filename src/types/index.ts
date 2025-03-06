export interface Problem {
  id: string;
  statement: string; // LaTeX format
  difficulty: 'easy' | 'medium' | 'hard';
  topics: string[];
  source?: string;
}

export interface Solution {
  problemId: string;
  solution: string; // LaTeX format
  hints: string[]; // Array of pre-defined hints in order of revelation
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatSession {
  problemId: string;
  messages: ChatMessage[];
  hintIndex: number; // Tracks which hints have been given
  isComplete: boolean;
}

export interface LLMConfig {
  provider: 'openai' | 'anthropic' | 'other';
  model: string;
  apiKey?: string;
  systemPrompt: string;
} 