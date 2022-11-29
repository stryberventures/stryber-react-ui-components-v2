export enum Breakpoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type TBreakpoint = keyof typeof Breakpoints;

export type TBreakpointsValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type TGridTag = keyof JSX.IntrinsicElements;
