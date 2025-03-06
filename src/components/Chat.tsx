'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatMessage, Problem, Solution } from '@/types';
import ProblemDisplay from './Problem';
import ChatMessageDisplay from './ChatMessage';

interface ChatProps {
  problem: Problem;
  solution: Solution;
  onComplete?: () => void;
}

export default function Chat({ problem, solution, onComplete }: ChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to typeset math when content changes
  const typesetMath = () => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise()
        .then(() => {
          console.log('Typesetting completed');
        })
        .catch(err => {
          console.error('Error typesetting math:', err);
        });
    }
  };

  // Re-run MathJax typesetting only when messages change
  useEffect(() => {
    if (window.MathJax && messages.length > 0) {
      typesetMath();
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          problemId: problem.id,
          history: messages,
        }),
      });

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.message,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      if (data.isComplete) {
        onComplete?.();
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-4xl mx-auto">
      <ProblemDisplay problem={problem} />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <ChatMessageDisplay 
            key={message.timestamp} 
            message={message} 
          />
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
        <div className="flex space-x-2">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              // Auto-grow the textarea
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Ask for a hint... (Press Enter to send, Shift+Enter for new line)"
            className="flex-1 p-3 border rounded text-gray-900 bg-white text-lg resize-none overflow-hidden min-h-[3.2rem] max-h-32"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 text-lg font-medium h-fit"
          >
            {isLoading ? 'Thinking...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
} 