import OpenAI from 'openai';
import { ChatMessage } from '@/types';
import { SYSTEM_PROMPT } from './config';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface GenerateHintParams {
  userMessage: string;
  history: ChatMessage[];
  problemStatement: string;
  solution: string;
  previousHints: string[];
  hintIndex: number;
}

export async function generateHint({
  userMessage,
  history,
  problemStatement,
  solution,
  previousHints,
  hintIndex,
}: GenerateHintParams): Promise<string> {
  try {
    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      {
        role: 'system' as const,
        content: `
Problem: ${problemStatement}

Complete solution: ${solution}

Previous hints given (in order):
${previousHints.slice(0, hintIndex).map((hint, i) => `${i + 1}. ${hint}`).join('\n')}

Current hint level: ${hintIndex + 1} out of ${previousHints.length}

Remember: Give hints that are appropriate for the current progression level. Don't reveal too much at once.`,
      },
      // Convert chat history to OpenAI message format
      ...history.map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content,
      })),
      { role: 'user' as const, content: userMessage },
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.5,
    });

    return completion.choices[0]?.message?.content || 'I apologize, but I was unable to generate a hint. Please try asking your question differently.';
  } catch (error) {
    console.error('Error generating hint:', error);
    throw new Error('Failed to generate hint. Please try again later.');
  }
} 