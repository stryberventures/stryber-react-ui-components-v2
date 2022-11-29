import { createStyles } from '../Theme';
import { IBreakpointValues, IGrid } from './';
import { Breakpoints, TBreakpoint } from './types';


export default createStyles((theme) => {
  return ({
    grid: {
      display: 'grid',
    },
    gridContainer: (props: IGrid) => ({
      boxSizing: 'border-box',
      '*, *::after, *:before': {
        boxSizing: 'inherit',
      },
      gridTemplateColumns: `repeat(${props.columns || theme.grid.columns}, 1fr)`,

      [`@media (min-width: ${theme.grid.breakpoints.xs}px)`]: {
        gap: (props: any) => getGapValue({
          breakpoint: Breakpoints.xs,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.xs],
        }),
      },
      [`@media (min-width: ${theme.grid.breakpoints.sm}px)`]: {
        gap: (props: any) => getGapValue({
          breakpoint: Breakpoints.sm,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.sm],
        }),
      },
      [`@media (min-width: ${theme.grid.breakpoints.md}px)`]: {
        gap: (props: any) => getGapValue({
          breakpoint: Breakpoints.md,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.md],
        }),
      },
      [`@media (min-width: ${theme.grid.breakpoints.lg}px)`]: {
        gap: (props: any) => getGapValue({
          breakpoint: Breakpoints.lg,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.lg],
        }),
      },
      [`@media (min-width: ${theme.grid.breakpoints.xl}px)`]: {
        gap: (props: any) => getGapValue({
          breakpoint: Breakpoints.xl,
          breakpointValues: props.gap,
          defaultValue: theme.grid.gap[Breakpoints.xl],
        }),
      },
    }),
    gridItem: (props: IGrid) => {
      const defaultValue = props.columns || theme.grid.columns;
      return ({
        gridColumnEnd: `span ${props.columns || theme.grid.columns}`,
    
        [`@media (min-width: ${theme.grid.breakpoints.xs}px)`]: {
          gridColumnEnd: (props: any) => `span ${getColumnsValue({
            breakpoint: Breakpoints.xs,
            breakpointValues: props,
            defaultValue,
          })}`,
        },
        [`@media (min-width: ${theme.grid.breakpoints.sm}px)`]: {
          gridColumnEnd: (props: any) => `span ${getColumnsValue({
            breakpoint: Breakpoints.sm,
            breakpointValues: props,
            defaultValue,
          })}`,
        },
        [`@media (min-width: ${theme.grid.breakpoints.md}px)`]: {
          gridColumnEnd: (props: any) => `span ${getColumnsValue({
            breakpoint: Breakpoints.md,
            breakpointValues: props,
            defaultValue,
          })}`,
        },
        [`@media (min-width: ${theme.grid.breakpoints.lg}px)`]: {
          gridColumnEnd: (props: any) => `span ${getColumnsValue({
            breakpoint: Breakpoints.lg,
            breakpointValues: props,
            defaultValue,
          })}`,
        },
        [`@media (min-width: ${theme.grid.breakpoints.xl}px)`]: {
          gridColumnEnd: (props: any) => `span ${getColumnsValue({
            breakpoint: Breakpoints.xl,
            breakpointValues: props,
            defaultValue,
          })}`,
        },
      })
    },
  })
}, { internalUsage: true });

interface IGetFallbackValue {
  breakpoint: TBreakpoint;
  breakpointValues: IBreakpointValues;
  defaultValue: number | string;
}

function getFallbackValue ({ breakpoint, breakpointValues, defaultValue }: IGetFallbackValue): number | string {
  let breakpointValue;
  switch (breakpoint) {
    case Breakpoints.xl:
      breakpointValue = breakpointValues[Breakpoints.xl] || breakpointValues[Breakpoints.lg] || breakpointValues[Breakpoints.md] || breakpointValues[Breakpoints.sm] || breakpointValues[Breakpoints.xs];
      break;
    case Breakpoints.lg:
      breakpointValue = breakpointValues[Breakpoints.lg] || breakpointValues[Breakpoints.md] || breakpointValues[Breakpoints.sm] || breakpointValues[Breakpoints.xs];
      break;
    case Breakpoints.md:
      breakpointValue = breakpointValues[Breakpoints.md] || breakpointValues[Breakpoints.sm] || breakpointValues[Breakpoints.xs];
      break;
    case Breakpoints.sm:
      breakpointValue = breakpointValues[Breakpoints.sm] || breakpointValues[Breakpoints.xs];
      break;
    default:
      breakpointValue = breakpointValues[Breakpoints.xs];
      break;
  }
  return breakpointValue || defaultValue;
}

interface IGetGapValue {
  breakpoint: TBreakpoint;
  breakpointValues: string | IBreakpointValues;
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
