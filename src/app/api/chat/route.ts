import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Message } from '@/types/chat';
import { MODEL_CONFIGS, formatMessagesForModel } from '@/lib/models';

// Get model from environment or use default
const CURRENT_MODEL = process.env.OPENAI_MODEL || 'gpt-4';

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

    const modelConfig = MODEL_CONFIGS[CURRENT_MODEL];
    if (!modelConfig) {
      console.error(`Invalid model configuration for ${CURRENT_MODEL}`);
      return NextResponse.json(
        { error: 'Invalid model configuration' },
        { status: 500 }
      );
    }

    const formattedMessages = formatMessagesForModel([
      {
        role: "system",
        content: modelConfig.promptTemplate?.system || `Math tutor helping with IMO problems.`,
        timestamp: Date.now()
      },
      {
        role: "system",
        content: (modelConfig.promptTemplate?.problemContext || `Problem: {problem}\nSolution: {solution}`)
          .replace('{problem}', problem)
          .replace('{solution}', solution),
        timestamp: Date.now()
      },
      ...history.filter((msg: Message) => msg.content && typeof msg.content === 'string').map((msg: Message) => ({
        role: msg.role,
        content: msg.content,
        timestamp: Date.now()
      })),
      {
        role: "user",
        content: message || 'Can you help me with this problem?',
        timestamp: Date.now()
      }
    ], CURRENT_MODEL);

    const completion = await openai.chat.completions.create({
      model: modelConfig.name,
      messages: formattedMessages,
      ...(modelConfig.temperature && { temperature: modelConfig.temperature }),
      ...(modelConfig.top_p && { top_p: modelConfig.top_p }),
      ...(modelConfig.maxTokens && { max_tokens: modelConfig.maxTokens }),
      ...(modelConfig.max_completion_tokens && { max_completion_tokens: modelConfig.max_completion_tokens }),
      ...(modelConfig.frequencyPenalty && { frequency_penalty: modelConfig.frequencyPenalty }),
      ...(modelConfig.presencePenalty && { presence_penalty: modelConfig.presencePenalty }),
    });

    console.log('Full OpenAI response:', JSON.stringify(completion, null, 2));
    
    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
      console.error('Empty response from model:', modelConfig.name);
      return NextResponse.json(
        { error: 'Model returned an empty response. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: responseContent,
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