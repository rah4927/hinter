import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Message } from '@/types/chat';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { message, problem, solution, history } = await request.json();
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
          content: `You are a helpful assistant for solving IMO problems. 
          
The current problem is:
${problem}

The solution is:
${solution}

Your role is to help students learn and understand the problem-solving process. You should:
1. Use your knowledge of the solution to provide accurate and helpful guidance
2. Never give away the solution directly
3. Provide hints that lead students towards understanding
4. Ask probing questions to help students discover key insights
5. Confirm when students are on the right track
6. Gently redirect when students go off track
7. Focus on teaching problem-solving techniques

Remember: Your goal is to help students learn how to solve the problem, not to solve it for them.`
        },
        ...history.map((msg: Message) => ({
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