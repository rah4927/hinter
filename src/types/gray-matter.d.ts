declare module 'gray-matter' {
  interface GrayMatterResult<T> {
    data: T;
    content: string;
  }

  function matter<T = Record<string, any>>(input: string): GrayMatterResult<T>;
  export = matter;
} 