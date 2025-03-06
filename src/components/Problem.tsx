'use client';

import { memo, useEffect } from 'react';
import { Problem } from '@/types';

interface ProblemDisplayProps {
  problem: Problem;
}

function ProblemDisplay({ problem }: ProblemDisplayProps) {
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
            MathJax.typesetPromise();
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
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(config);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-t-lg shadow">
      <h2 className="text-xl font-bold mb-2 text-gray-900">Problem</h2>
      <div 
        className="prose max-w-none text-lg leading-relaxed text-gray-900" 
        dangerouslySetInnerHTML={{ 
          __html: problem.statement
        }} 
      />
    </div>
  );
}

export default memo(ProblemDisplay); 