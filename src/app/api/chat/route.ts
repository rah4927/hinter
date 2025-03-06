import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Message } from '@/types/chat';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
          content: `You are a helpful assistant for solving IMO problems. The current problem is:\n\n${problem}\n\nProvide hints and guidance to help solve the problem, but don't give away the solution directly.`
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