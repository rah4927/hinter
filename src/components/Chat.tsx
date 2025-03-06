'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatMessage, Problem, Solution } from '@/types';

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

  // Load MathJax dynamically
  useEffect(() => {
    // Add MathJax configuration
    const config = document.createElement('script');
    config.type = 'text/javascript';
    config.text = `
      window.MathJax = {
        loader: {
          load: ['[tex]/ams', '[tex]/noerrors', '[tex]/noundefined']
        },
        tex: {
          packages: {'[+]': ['ams', 'noerrors', 'noundefined']},
          inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
          displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
          processEscapes: true,
        },
        options: {
          skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
          ignoreHtmlClass: 'tex2jax_ignore',
          processHtmlClass: 'tex2jax_process'
        },
        startup: {
          ready: () => {
            console.log('MathJax is loaded and ready');
            MathJax.startup.defaultReady();
          }
        }
      };
    `;
    document.head.appendChild(config);

    // Load MathJax script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    script.id = 'MathJax-script';
    script.onload = () => {
      console.log('MathJax script loaded');
      window.MathJax.startup.promise.then(() => {
        console.log('MathJax initial typesetting complete');
        typesetMath();
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(config);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (window.MathJax) {
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
    <div className="flex flex-col h-full max-w-2xl mx-auto">
      <div className="bg-white p-4 rounded-t-lg shadow">
        <h2 className="text-xl font-bold mb-2 text-gray-900">Problem</h2>
        <div 
          className="prose max-w-none text-lg leading-relaxed text-gray-900" 
          dangerouslySetInnerHTML={{ 
            __html: problem.statement
          }} 
        />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white shadow-sm'
              }`}
            >
              <div 
                className={`prose ${
                  message.role === 'user' 
                    ? 'text-white' 
                    : 'text-gray-900'
                }`} 
                dangerouslySetInnerHTML={{ __html: message.content }} 
              />
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask for a hint..."
            className="flex-1 p-2 border rounded text-gray-900 bg-white"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Thinking...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
} 