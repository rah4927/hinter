'use client';

import { memo, useEffect } from 'react';

declare global {
  interface Window {
    MathJax: {
      typesetPromise: (elements?: Element[]) => Promise<void>;
    };
  }
}

interface ChatMessageProps {
  content: string;
  role: 'user' | 'assistant';
  timestamp: number;
}

const ChatMessageDisplay = memo(function ChatMessageDisplay({ content, role, timestamp }: ChatMessageProps) {
  useEffect(() => {
    // Only typeset this specific message
    const messageElement = document.getElementById(`message-${timestamp}`);
    if (messageElement && window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise().then(() => {
        window.MathJax.typesetPromise([messageElement]);
      });
    }
  }, [timestamp]); // Only re-run if timestamp changes

  return (
    <div
      id={`message-${timestamp}`}
      className={`p-4 rounded-lg mb-4 ${
        role === 'user' 
          ? 'bg-blue-500 text-white ml-12' 
          : 'bg-white shadow-sm text-gray-900 mr-12'
      }`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
});

export default ChatMessageDisplay; 