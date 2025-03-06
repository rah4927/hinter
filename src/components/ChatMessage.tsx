'use client';

import { memo, useEffect } from 'react';
import { ChatMessage } from '@/types';

interface ChatMessageProps {
  message: ChatMessage;
}

function ChatMessageDisplay({ message }: ChatMessageProps) {
  useEffect(() => {
    // Only typeset this specific message when it's first rendered
    const messageElement = document.getElementById(`message-${message.timestamp}`);
    if (messageElement && window.MathJax?.typesetPromise) {
      // First ensure MathJax is ready
      window.MathJax.startup?.promise.then(() => {
        // Then typeset just this element
        window.MathJax?.typesetPromise?.()
          .then(() => {
            console.log(`Typeset message ${message.timestamp}`);
          })
          .catch(err => {
            console.error('Error typesetting message:', err);
          });
      });
    }
  }, [message.timestamp]);

  return (
    <div
      className={`flex ${
        message.role === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          message.role === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-white shadow-sm'
        }`}
      >
        <div 
          id={`message-${message.timestamp}`}
          className={`prose max-w-none break-words whitespace-pre-wrap text-lg ${
            message.role === 'user' 
              ? 'text-white' 
              : 'text-gray-900'
          }`} 
          dangerouslySetInnerHTML={{ __html: message.content }} 
        />
      </div>
    </div>
  );
}

export default memo(ChatMessageDisplay); 