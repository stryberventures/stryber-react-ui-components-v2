import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { Breakpoints, TGridTag } from './types';


export interface IGrid extends React.HTMLAttributes<any>{
  container?: boolean;
  item?: boolean;
  [Breakpoints.xs]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  [Breakpoints.sm]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  [Breakpoints.md]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  [Breakpoints.lg]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  [Breakpoints.xl]?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
}
