declare module '*.css?inline' {
  import type { CSSResultGroup } from 'lit';
  const content: CSSResultGroup;
  export default content;
}

// Allow any CSS Custom Properties
declare module 'csstype' {
  interface Properties {
    [index: `--${string}`]: any;
  }
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}
