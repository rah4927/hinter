import { ChatMessage } from '@/types';

export interface ModelConfig {
  name: string;
  supportsSystemMessages: boolean;
  maxTokens?: number;  // for GPT models
  max_completion_tokens?: number;  // for o1 models
  max_prompt_tokens?: number;  // limit prompt size
  temperature?: number;  // not all models support custom temperature
  top_p?: number;  // some models require this instead of temperature
  frequencyPenalty?: number;
  presencePenalty?: number;
  promptTemplate?: {
    system?: string;
    problemContext?: string;
  };
}

export const MODEL_CONFIGS: Record<string, ModelConfig> = {
  'gpt-4': {
    name: 'gpt-4',
    supportsSystemMessages: true,
    maxTokens: 1000,
    temperature: 0.7,
    frequencyPenalty: 0,
    presencePenalty: 0.5,
    promptTemplate: {
      system: `You are a helpful assistant for solving IMO problems. Your role is to help students learn and understand the problem-solving process. You should:
1. Use your knowledge of the solution to provide accurate and helpful guidance
2. Never give away the solution directly
3. Provide hints that lead students towards understanding
4. Ask probing questions to help students discover key insights
5. Confirm when students are on the right track
6. Gently redirect when students go off track
7. Focus on teaching problem-solving techniques

IMPORTANT: Always use LaTeX notation for ALL mathematical expressions, even simple ones. For example:
- Use \\(n^2\\) instead of n^2 or n²
- Use \\(\\frac{1}{4}\\) instead of 1/4
- Use \\(\\cdot\\) for multiplication instead of *
- Always wrap expressions in \\( \\) for inline math or \\[ \\] for display math
- Never use plain text or ASCII/Unicode for mathematical notation`,
      problemContext: `The current problem is:
{problem}

The solution is:
{solution}

Remember: Your goal is to help students learn how to solve the problem, not to solve it for them.`
    }
  },
  'o1-mini': {
    name: 'o1-mini',
    supportsSystemMessages: false,
    max_completion_tokens: 1000,
    max_prompt_tokens: 1500,
    top_p: 1,
    promptTemplate: {
      system: `Math tutor helping with IMO problem. Give small hints only, never reveal solution. Use LaTeX: \\(x^2\\), \\(\\frac{1}{4}\\), \\[\\] for display.`,
      problemContext: `Problem: {problem}
Solution (DO NOT REVEAL): {solution}
Give a small hint or ask a guiding question.`
    }
  },
  'gpt-3.5-turbo': {
    name: 'gpt-3.5-turbo',
    supportsSystemMessages: true,
    maxTokens: 1000,
    temperature: 0.7,
    promptTemplate: {
      system: `You are a helpful assistant for solving IMO problems. Your role is to help students learn and understand the problem-solving process. You should:
1. Use your knowledge of the solution to provide accurate and helpful guidance
2. Never give away the solution directly
3. Provide hints that lead students towards understanding
4. Ask probing questions to help students discover key insights
5. Confirm when students are on the right track
6. Gently redirect when students go off track
7. Focus on teaching problem-solving techniques

IMPORTANT: Always use LaTeX notation for ALL mathematical expressions, even simple ones. For example:
- Use \\(n^2\\) instead of n^2 or n²
- Use \\(\\frac{1}{4}\\) instead of 1/4
- Use \\(\\cdot\\) for multiplication instead of *
- Always wrap expressions in \\( \\) for inline math or \\[ \\] for display math
- Never use plain text or ASCII/Unicode for mathematical notation`,
      problemContext: `The current problem is:
{problem}

The solution is:
{solution}

Remember: Your goal is to help students learn how to solve the problem, not to solve it for them.`
    }
  }
};

export const DEFAULT_MODEL = 'gpt-4';

export function formatMessagesForModel(messages: ChatMessage[], modelName: string): ChatMessage[] {
  const config = MODEL_CONFIGS[modelName];
  if (!config) {
    throw new Error(`Unknown model: ${modelName}`);
  }

  // Validate messages
  const validMessages = messages.filter(msg => msg.content && typeof msg.content === 'string');
  if (validMessages.length !== messages.length) {
    console.warn(`Filtered out ${messages.length - validMessages.length} invalid messages`);
  }
  
  if (!config.supportsSystemMessages) {
    // Convert system messages to user messages
    const systemMessages = validMessages.filter(m => m.role === 'system');
    const otherMessages = validMessages.filter(m => m.role !== 'system');
    
    if (systemMessages.length > 0) {
      const combinedSystemContent = systemMessages.map(m => m.content).join('\n\n');
      return [
        { role: 'user', content: combinedSystemContent, timestamp: Date.now() },
        ...otherMessages
      ];
    }
  }
  
  return validMessages;
} 