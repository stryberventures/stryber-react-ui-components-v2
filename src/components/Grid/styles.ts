import { createStyles } from '../Theme';
import { Breakpoints, IBreakpointValues, TBreakpoint } from './types';
import { IGrid } from './';


export default () => createStyles((theme) => {
  return ({
    grid: {
      display: 'grid',
    },
    gridContainer: {
      boxSizing: 'border-box',
      '*, *::after, *:before': {
        boxSizing: 'inherit',
      },
      [`@media (min-width: ${theme.grid.breakpoints.xs}px)`]: {
        margin: (props: IGrid) => props.withMargins && `0 ${theme.grid.margin.xs}`,
        gridTemplateColumns: (props: IGrid) => `repeat(${getColumnsNumber({
          breakpoint: Breakpoints.xs,
          breakpointValues: props.columns,
          defaultValue: theme.grid.columns[Breakpoints.xs],
        })}, 1fr)`,
        gap: (props: IGrid) => getGapValue({
          breakpoint: Breakpoints.xs,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.xs],
        }),
      },
      [`@media (min-width: ${theme.grid.breakpoints.sm}px)`]: {
        margin: (props: IGrid) => props.withMargins && `0 ${theme.grid.margin.sm}`,
        gridTemplateColumns: (props: IGrid) => `repeat(${getColumnsNumber({
          breakpoint: Breakpoints.sm,
          breakpointValues: props.columns,
          defaultValue: theme.grid.columns[Breakpoints.sm],
        })}, 1fr)`,
        gap: (props: IGrid) => getGapValue({
          breakpoint: Breakpoints.sm,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.sm],
        }),
      },
      [`@media (min-width: ${theme.grid.breakpoints.md}px)`]: {
        margin: (props: IGrid) => props.withMargins && `0 ${theme.grid.margin.md}`,
        gridTemplateColumns: (props: IGrid) => `repeat(${getColumnsNumber({
          breakpoint: Breakpoints.md,
          breakpointValues: props.columns,
          defaultValue: theme.grid.columns[Breakpoints.md],
        })}, 1fr)`,
        gap: (props: IGrid) => getGapValue({
          breakpoint: Breakpoints.md,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.md],
        }),
      },
      [`@media (min-width: ${theme.grid.breakpoints.lg}px)`]: {
        margin: (props: IGrid) => props.withMargins && `0 ${theme.grid.margin.lg}`,
        gridTemplateColumns: (props: IGrid) => `repeat(${getColumnsNumber({
          breakpoint: Breakpoints.lg,
          breakpointValues: props.columns,
          defaultValue: theme.grid.columns[Breakpoints.lg],
        })}, 1fr)`,
        gap: (props: IGrid) => getGapValue({
          breakpoint: Breakpoints.lg,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.lg],
        }),
      },
      [`@media (min-width: ${theme.grid.breakpoints.xl}px)`]: {
        margin: (props: IGrid) => props.withMargins && `0 ${theme.grid.margin.xl}`,
        gridTemplateColumns: (props: IGrid) => `repeat(${getColumnsNumber({
          breakpoint: Breakpoints.xl,
          breakpointValues: props.columns,
          defaultValue: theme.grid.columns[Breakpoints.xl],
        })}, 1fr)`,
        gap: (props: IGrid) => getGapValue({
          breakpoint: Breakpoints.xl,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.xl],
        }),
      },
      [`@media (min-width: ${theme.grid.breakpoints.xxl}px)`]: {
        maxWidth: 1320,
        margin: (props: IGrid) => props.withMargins && '0 auto',
        gridTemplateColumns: (props: IGrid) => `repeat(${getColumnsNumber({
          breakpoint: Breakpoints.xxl,
          breakpointValues: props.columns,
          defaultValue: theme.grid.columns[Breakpoints.xxl],
        })}, 1fr)`,
        gap: (props: IGrid) => getGapValue({
          breakpoint: Breakpoints.xxl,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.xxl],
        }),
      },
    },
    gridItem: {
      [`@media (min-width: ${theme.grid.breakpoints.xs}px)`]: {
        gridColumnEnd: (props: IGrid) => `span ${getColumnsValue({
          breakpoint: Breakpoints.xs,
          breakpointValues: props,
          defaultValue: theme.grid.columns[Breakpoints.xs],
        })}`,
      },
      [`@media (min-width: ${theme.grid.breakpoints.sm}px)`]: {
        gridColumnEnd: (props: IGrid) => `span ${getColumnsValue({
          breakpoint: Breakpoints.sm,
          breakpointValues: props,
          defaultValue: theme.grid.columns[Breakpoints.sm],
        })}`,
      },
      [`@media (min-width: ${theme.grid.breakpoints.md}px)`]: {
        gridColumnEnd: (props: IGrid) => `span ${getColumnsValue({
          breakpoint: Breakpoints.md,
          breakpointValues: props,
          defaultValue: theme.grid.columns[Breakpoints.md],
        })}`,
      },
      [`@media (min-width: ${theme.grid.breakpoints.lg}px)`]: {
        gridColumnEnd: (props: IGrid) => `span ${getColumnsValue({
          breakpoint: Breakpoints.lg,
          breakpointValues: props,
          defaultValue: theme.grid.columns[Breakpoints.lg],
        })}`,
      },
      [`@media (min-width: ${theme.grid.breakpoints.xl}px)`]: {
        gridColumnEnd: (props: IGrid) => `span ${getColumnsValue({
          breakpoint: Breakpoints.xl,
          breakpointValues: props,
          defaultValue: theme.grid.columns[Breakpoints.xl],
        })}`,
      },
      [`@media (min-width: ${theme.grid.breakpoints.xxl}px)`]: {
        gridColumnEnd: (props: IGrid) => `span ${getColumnsValue({
          breakpoint: Breakpoints.xxl,
          breakpointValues: props,
          defaultValue: theme.grid.columns[Breakpoints.xxl],
        })}`,
      },
    },
  })
}, { internalUsage: true });

interface IGetFallbackValue {
  breakpoint: TBreakpoint;
  breakpointValues?: IBreakpointValues;
  defaultValue: number | string;
}

function getFallbackValue ({ breakpoint, breakpointValues, defaultValue }: IGetFallbackValue): number | string {
  let breakpointValue;
  switch (breakpoint) {
    case Breakpoints.xxl:
      breakpointValue = breakpointValues?.[Breakpoints.xxl] || breakpointValues?.[Breakpoints.xl] || breakpointValues?.[Breakpoints.lg] || breakpointValues?.[Breakpoints.md] || breakpointValues?.[Breakpoints.sm] || breakpointValues?.[Breakpoints.xs];
      break;
    case Breakpoints.xl:
      breakpointValue = breakpointValues?.[Breakpoints.xl] || breakpointValues?.[Breakpoints.lg] || breakpointValues?.[Breakpoints.md] || breakpointValues?.[Breakpoints.sm] || breakpointValues?.[Breakpoints.xs];
      break;
    case Breakpoints.lg:
      breakpointValue = breakpointValues?.[Breakpoints.lg] || breakpointValues?.[Breakpoints.md] || breakpointValues?.[Breakpoints.sm] || breakpointValues?.[Breakpoints.xs];
      break;
    case Breakpoints.md:
      breakpointValue = breakpointValues?.[Breakpoints.md] || breakpointValues?.[Breakpoints.sm] || breakpointValues?.[Breakpoints.xs];
      break;
    case Breakpoints.sm:
      breakpointValue = breakpointValues?.[Breakpoints.sm] || breakpointValues?.[Breakpoints.xs];
      break;
    default:
      breakpointValue = breakpointValues?.[Breakpoints.xs];
      break;
  }
  return breakpointValue || defaultValue;
}

interface IGetGapValue {
  breakpoint: TBreakpoint;
  breakpointValues?: string | IBreakpointValues;
  defaultValue: string;
}

function getGapValue ({ breakpoint, breakpointValues, defaultValue }: IGetGapValue): number | string {
  if (!breakpointValues) return defaultValue;
  if (typeof breakpointValues == 'string') return breakpointValues;
  return getFallbackValue({ breakpoint, breakpointValues, defaultValue, });
}

function getColumnsValue ({ breakpoint, breakpointValues, defaultValue }: IGetFallbackValue): number | string {
  return getFallbackValue({ breakpoint, breakpointValues, defaultValue, });
}

function getColumnsNumber ({ breakpoint, breakpointValues, defaultValue }: IGetFallbackValue): number | string {
  return getFallbackValue({ breakpoint, breakpointValues, defaultValue, });
}
