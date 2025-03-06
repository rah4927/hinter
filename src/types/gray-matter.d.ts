declare module 'gray-matter' {
  interface GrayMatterFile<T extends Record<string, unknown>> {
    data: T;
    content: string;
    excerpt?: string;
    orig: string;
    language: string;
    matter: string;
    stringify(): string;
  }

  interface Options {
    excerpt?: boolean | ((file: GrayMatterFile<Record<string, unknown>>) => string);
    excerpt_separator?: string;
    engines?: Record<string, unknown>;
    language?: string;
    delimiters?: string | [string, string];
  }

  function matter<T extends Record<string, unknown>>(
    content: string,
    options?: Options
  ): GrayMatterFile<T>;

  export = matter;
} 