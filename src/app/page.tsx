'use client';

import Chat from '@/components/Chat';

const sampleProblem = {
  id: 'imo-2019-1',
  statement: `Let \\(\\mathbb{Z}^+\\) denote the set of positive integers. Determine all functions \\(f\\colon \\mathbb{Z}^+ \\to \\mathbb{Z}^+\\) such that for each \\(x \\in \\mathbb{Z}^+\\), the sequence

\\[x, f(x), f(f(x)), f(f(f(x))), \\ldots\\]

contains every positive integer exactly once.`,
  difficulty: 'hard' as const,
  topics: ['Number Theory', 'Functions', 'Sequences'],
  source: 'IMO 2019 Problem 1',
};

const sampleSolution = {
  problemId: 'imo-2019-1',
  solution: `The answer is that there are no such functions.

Proof:
1) First, observe that for any x, the sequence must contain x as its first term.
2) Let's consider what happens when x = 1:
   1, f(1), f(f(1)), f(f(f(1))), ...
   This sequence must contain every positive integer exactly once.
3) Since f(1) appears in this sequence, there must be some positive integer y such that f(y) = 1
4) But then the sequence starting at y would be:
   y, f(y) = 1, f(1), f(f(1)), ...
   This is the same as the sequence starting at 1, but with y prepended
5) This means the sequence starting at y contains 1 twice (once as f(y) and once in the sequence starting at 1)
6) This contradicts the requirement that each integer appears exactly once
Therefore, no such function can exist.`,
  hints: [
    "What happens when we start the sequence with x = 1?",
    "Think about where the number 1 appears in different sequences.",
    "If we have a sequence starting with some number y, and f(y) = 1, what can we say about this sequence?",
    "Consider how sequences starting from different numbers might overlap.",
    "Can you find a contradiction involving the number 1 appearing in multiple sequences?"
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">IMO Problem Assistant</h1>
        <Chat
          problem={sampleProblem}
          solution={sampleSolution}
          onComplete={() => console.log('Problem completed!')}
        />
      </div>
    </main>
  );
}
