export enum Breakpoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type TBreakpoint = keyof typeof Breakpoints;

export type IBreakpoints = {
  [key in TBreakpoint]: number;
};

// type TTag = keyof Pick<JSX.IntrinsicElements, 'div' | 'header' | 'footer' | 'main' | 'section' | 'article' | 'figure' | 'figcaption' | 'nav' | 'ul' | 'li' | 'ul' | 'ul' | 'ul' | 'span' | 'a' | 'p' | 'q' | 'b' | 'i' | 'small' | 'strong' | 'em' | 'del' | 'ins' | 'sub' | 'sup' | 'li'>;
export type TGridTag = keyof JSX.IntrinsicElements;
