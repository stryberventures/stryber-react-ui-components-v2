import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { Breakpoints, TBreakpointsValues, TGridTag } from './types';
import toRem from '../../utils/toRem';


export interface IGrid extends React.HTMLAttributes<any>{
  container?: boolean;
  item?: boolean;
  [Breakpoints.xs]?: TBreakpointsValues;
  [Breakpoints.sm]?: TBreakpointsValues;
  [Breakpoints.md]?: TBreakpointsValues;
  [Breakpoints.lg]?: TBreakpointsValues;
  [Breakpoints.xl]?: TBreakpointsValues;
  gap?: string | string[];
  columns?: number;
  className?: string;
  component?: TGridTag;
}

const Grid: React.FC<IGrid> = (props) => {
  const {
    children,
    container,
    item = false,
    component = 'div',
    className,
    ...rest
  } = props;
  const classes = useStyles(props);
  const Tag = component;
  return(
    <Tag
      className={classNames(
        classes.grid,
        {
          [classes.gridContainer]: container,
          [classes.gridItem]: item,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Grid;

Grid.defaultProps = {
  component: 'div',
  xs: 12,
  gap: toRem(10),
  columns: 12,
}
