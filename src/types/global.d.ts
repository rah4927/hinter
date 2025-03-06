interface MathJaxConfig {
  typesetPromise: () => Promise<any>;
  tex: {
    inlineMath: [string, string][];
    displayMath: [string, string][];
  };
  options: {
    skipHtmlTags: string[];
    ignoreHtmlClass: string;
  };
}

declare global {
  interface Window {
    MathJax: MathJaxConfig;
  }
}

export {}; 