import OpenAI from 'openai';
import { ChatMessage } from '@/types';
import { MODEL_CONFIGS, formatMessagesForModel } from './models';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

const CURRENT_MODEL = process.env.OPENAI_MODEL || 'gpt-4';

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
    const modelConfig = MODEL_CONFIGS[CURRENT_MODEL];
    if (!modelConfig) {
      throw new Error(`Invalid model configuration for ${CURRENT_MODEL}`);
    }

    const messages = formatMessagesForModel([
      { 
        role: 'system', 
        content: modelConfig.promptTemplate?.system || `Math tutor helping with IMO problems.`,
        timestamp: Date.now() 
      },
      {
        role: 'system',
        content: (modelConfig.promptTemplate?.problemContext || `Problem: {problem}\nSolution: {solution}\nHint level: {hintLevel}`)
          .replace('{problem}', problemStatement)
          .replace('{solution}', solution)
          .replace('{hintLevel}', `${hintIndex + 1}/${previousHints.length}`) +
          (previousHints.length > 0 ? `\n\nPrevious hints:\n${previousHints.slice(0, hintIndex).map((hint, i) => `${i + 1}. ${hint}`).join('\n')}` : ''),
        timestamp: Date.now()
      },
      // Convert chat history to OpenAI message format
      ...history.filter((msg: ChatMessage) => msg.content && typeof msg.content === 'string').map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content,
        timestamp: Date.now()
      })),
      { role: 'user', content: userMessage || 'Can you help me with this problem?', timestamp: Date.now() },
    ], CURRENT_MODEL);

    const completion = await openai.chat.completions.create({
      model: modelConfig.name,
      messages,
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
      throw new Error('Model returned an empty response. Please try again.');
    }

    return responseContent;
  } catch (error) {
    console.error('Error generating hint:', error);
    throw new Error('Failed to generate hint. Please try again later.');
  }
} 