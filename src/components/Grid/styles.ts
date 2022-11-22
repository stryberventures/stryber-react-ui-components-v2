import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';
import { IGrid } from './';
import { Breakpoints, TBreakpoint } from './types';


const getBreakpointValue = (breakpoint: TBreakpoint, breakpointValues: IGrid, defaultValue: number): number => {
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
};

function getGaps(gap: string | string[]): string {
  return (Array.isArray(gap)) ? gap.join(' ') : gap;
}

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
      gap: getGaps(props.gap || toRem(10)),
    }),
    gridItem: (props: IGrid) => {
      const defaultValue = props.columns || theme.grid.columns;
      return ({
        gridColumnEnd: `span ${props.columns || theme.grid.columns}`,
    
        [`@media (min-width: ${theme.grid.breakpoints.values.xs}px)`]: {
          gridColumnEnd: (props: any) => `span ${getBreakpointValue(Breakpoints.xs, props, defaultValue)}`,
        },
        [`@media (min-width: ${theme.grid.breakpoints.values.sm}px)`]: {
          gridColumnEnd: (props: any) => `span ${getBreakpointValue(Breakpoints.sm, props, defaultValue)}`,
        },
        [`@media (min-width: ${theme.grid.breakpoints.values.md}px)`]: {
          gridColumnEnd: (props: any) => `span ${getBreakpointValue(Breakpoints.md, props, defaultValue)}`,
        },
        [`@media (min-width: ${theme.grid.breakpoints.values.lg}px)`]: {
          gridColumnEnd: (props: any) => `span ${getBreakpointValue(Breakpoints.lg, props, defaultValue)}`,
        },
        [`@media (min-width: ${theme.grid.breakpoints.values.xl}px)`]: {
          gridColumnEnd: (props: any) => `span ${getBreakpointValue(Breakpoints.xl, props, defaultValue)}`,
        },
      })
    },
  })
}, { internalUsage: true });
