import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// In a real app, this would come from a database
const problemsDb = new Map([
  ['imo-2019-1', {
    statement: `Let \\mathbb{Z}^+ denote the set of positive integers. Determine all functions f: \\mathbb{Z}^+ \\to \\mathbb{Z}^+ such that for each x \\in \\mathbb{Z}^+,
    the sequence
    x, f(x), f(f(x)), f(f(f(x))), \\ldots
    contains every positive integer exactly once.`,
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
  }]
]);

export async function POST(request: Request) {
  try {
    const { message, problem, history } = await request.json();
    console.log('Received request:', { message, problem, history });

    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is not set');
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant for solving IMO problems. The current problem is:\n\n${problem.statement}\n\nProvide hints and guidance to help solve the problem, but don't give away the solution directly.`
        },
        ...history.map((msg: any) => ({
          role: msg.role,
          content: msg.content
        })),
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    console.log('OpenAI response:', completion.choices[0].message);

    return NextResponse.json({
      message: completion.choices[0].message.content,
      isComplete: false
    });
  } catch (error) {
    console.error('Detailed error in chat API:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process chat message' },
      { status: 500 }
    );
  }
} 