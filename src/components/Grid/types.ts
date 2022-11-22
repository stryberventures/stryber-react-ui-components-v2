export enum Breakpoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type TBreakpoint = keyof typeof Breakpoints;

export type TGridTag = keyof JSX.IntrinsicElements;
