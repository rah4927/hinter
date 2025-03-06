interface MathJaxConfig {
  typesetPromise: () => Promise<any>;
  tex: {
    inlineMath: [string, string][];
    displayMath: [string, string][];
    processEscapes: boolean;
    packages: string[];
  };
  options: {
    skipHtmlTags: string[];
    ignoreHtmlClass: string;
    processHtmlClass: string;
  };
  startup: {
    ready: () => void;
    defaultReady: () => void;
    promise: Promise<any>;
  };
}

declare global {
  interface Window {
    MathJax: MathJaxConfig;
  }
}

export {}; 