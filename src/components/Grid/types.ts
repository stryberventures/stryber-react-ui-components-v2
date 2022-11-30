export enum Breakpoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type TBreakpoint = keyof typeof Breakpoints;

export interface IBreakpointValues {
  [Breakpoints.xs]?: string | number;
  [Breakpoints.sm]?: string | number;
  [Breakpoints.md]?: string | number;
  [Breakpoints.lg]?: string | number;
  [Breakpoints.xl]?: string | number;
}

export type TBreakpointsValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type TGridTag = keyof JSX.IntrinsicElements;
