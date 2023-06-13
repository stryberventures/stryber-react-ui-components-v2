import React from 'react';
import classNames from 'classnames';
import {
  Breakpoints,
  IBreakpointValues,
  TBreakpointsValues,
  TGridTag,
} from './types';
import useStyles from './styles';

export interface IGrid extends React.HTMLAttributes<any> {
  container?: boolean;
  withMargins?: boolean;
  item?: boolean;
  [Breakpoints.xs]?: TBreakpointsValues;
  [Breakpoints.sm]?: TBreakpointsValues;
  [Breakpoints.md]?: TBreakpointsValues;
  [Breakpoints.lg]?: TBreakpointsValues;
  [Breakpoints.xl]?: TBreakpointsValues;
  [Breakpoints.xxl]?: TBreakpointsValues;
  gap?: string | IBreakpointValues;
  columns?: IBreakpointValues;
  className?: string;
  component?: TGridTag;
}

const Grid: React.FC<IGrid> = (props) => {
  const {
    children,
    container,
    withMargins,
    item = false,
    component = 'div',
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    gap,
    columns,
    ...rest
  } = props;
  const classes = useStyles()(props);
  const Tag = component;
  return (
    <Tag
      className={classNames(
        classes.grid,
        {
          [classes.gridContainer]: container,
          [classes.gridItem]: item,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Grid;

Grid.defaultProps = {
  component: 'div',
  xs: 12,
};
