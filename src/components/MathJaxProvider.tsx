'use client';

import { useEffect } from 'react';

export default function MathJaxProvider({ children }: { children: React.ReactNode }) {
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

  return <>{children}</>;
} 