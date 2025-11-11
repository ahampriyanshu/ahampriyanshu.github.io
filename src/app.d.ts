// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
      tex?: {
        inlineMath?: Array<[string, string]>;
        displayMath?: Array<[string, string]>;
        processEscapes?: boolean;
        processEnvironments?: boolean;
      };
      options?: {
        skipHtmlTags?: string[];
        ignoreHtmlClass?: string;
        processHtmlClass?: string;
      };
      svg?: {
        fontCache?: string;
      };
    };
  }
}

export {};
