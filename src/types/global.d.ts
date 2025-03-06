declare global {
  interface Window {
    MathJax: {
      typesetPromise: (elements?: Element[]) => Promise<void>;
      startup: {
        ready: () => void;
        defaultReady: () => void;
      };
      tex: {
        packages: Record<string, string[]>;
        inlineMath: [string, string][];
        displayMath: [string, string][];
        processEscapes: boolean;
      };
      options: {
        skipHtmlTags: string[];
        ignoreHtmlClass: string;
        processHtmlClass: string;
      };
    };
  }
}

export {}; 