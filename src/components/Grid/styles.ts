import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';
import { IGrid } from './';
import { template } from '@babel/core';


function getGaps(gap: string | string[]): string {
  return (Array.isArray(gap)) ? gap.join(' ') : gap;
}

export default createStyles((theme) => ({
  grid: {
    display: 'grid',
  },
  gridContainer: (props: IGrid) => ({
    boxSizing: 'border-box',
    '*, *::after, *:before': {
      boxSizing: 'inherit',
    },
    gridTemplateColumns: `repeat(${theme.grid.columns}, 1fr)`,
    gap: getGaps(props.gap || toRem(10)), //
  }),
  gridItem: {
  //   gridColumn: `span ${theme.grid.columns}`,
  },
  xsSpan1: {
    gridColumn: 'span 1',
  },
  smSpan1: {
    gridColumn: 'span 1',
  },
  span1: {
    gridColumn: 'span 1',
  },
  span2: {
    gridColumn: 'span 2',
  },
  span3: {
    gridColumn: 'span 3',
  },
  span4: {
    gridColumn: 'span 4',
  },
  span5: {
    gridColumn: 'span 5',
  },
  span6: {
    gridColumn: 'span 6',
  },
  span7: {
    gridColumn: 'span 7',
  },
  span8: {
    gridColumn: 'span 8',
  },
  span9: {
    gridColumn: 'span 9',
  },
  span10: {
    gridColumn: 'span 10',
  },
  span11: {
    gridColumn: 'span 11',
  },
  span12: {
    gridColumn: 'span 12',
  },
}), { internalUsage: true });
