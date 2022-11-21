import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useGrid } from '../../hooks/useGrid';
import useStyles from './styles';
import { Breakpoints, IBreakpoints, TGridTag } from './types';


export interface IGrid extends React.HTMLAttributes<any>{
  container?: boolean;
  item?: boolean;
  [Breakpoints.xs]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  [Breakpoints.sm]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  [Breakpoints.md]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  [Breakpoints.lg]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  [Breakpoints.xl]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: string | string[];
  columns?: number | IBreakpoints;
  className?: string;
  component?: TGridTag;
}

const Grid: React.FC<IGrid> = (props) => {
  const {
    children,
    container,
    item = false,
    component = 'div',
    xs = 12,
    className,
    ...rest
  } = props;
  const classes = useStyles(props);
  const Tag = component;
  const { breakpoint } = useGrid();
  return breakpoint ? (
    <Tag
      className={classNames(
        classes.grid,
        {
          [classes.gridContainer]: container,
          [classes.gridItem]: item,
        },
        classes[`span${props[breakpoint] || xs}`],
        className,
      )}
      {...rest}
    >
      {item && `breakpoint: ${breakpoint} || `}
      {children}
    </Tag>
  ) : null;
}

export default Grid;

Grid.defaultProps = {
  component: 'div',
  xs: 12,
}
