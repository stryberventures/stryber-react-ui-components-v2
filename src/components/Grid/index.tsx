import React from 'react';
import classNames from 'classnames';
import {
  Breakpoints,
  IBreakpointValues,
  TBreakpointsValues,
  TGridTag,
} from './types';
import useStyles from './styles';


export interface IGrid extends React.HTMLAttributes<any>{
  container?: boolean;
  item?: boolean;
  [Breakpoints.xs]?: TBreakpointsValues;
  [Breakpoints.sm]?: TBreakpointsValues;
  [Breakpoints.md]?: TBreakpointsValues;
  [Breakpoints.lg]?: TBreakpointsValues;
  [Breakpoints.xl]?: TBreakpointsValues;
  gap?: string | IBreakpointValues;
  columns?: IBreakpointValues;
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
    xs,
    sm,
    md,
    lg,
    xl,
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
}
