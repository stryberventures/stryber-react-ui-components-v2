import React, { FC } from 'react';
import classNames from 'classnames';
import TableContainer from './TableContainer';
import TableSection from './TableSection';
import TableBody from './TableBody';
import TableHead from './TableHead';
import TableCell from './TableCell';
import TableRow from './TableRow';
import TablePagination from './TablePagination';
import TableTooltipButton from './TableTooltipButton';
import TableSortButton from './TableSortButton';
import useStyles from './styles';
export interface ITable extends React.HTMLAttributes<HTMLTableElement> {
  component?: React.ElementType;
}

const Table: FC<ITable> = (props) => {
  const {
    component: Component = 'table',
    className,
    children,
    ...rest
  } = props;
  const classes = useStyles()();
  return (
    <Component className={classNames(classes.table, className)} {...rest}>
      {children}
    </Component>
  );
};

export {
  TableContainer,
  TableSection,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TableTooltipButton,
  TableSortButton,
};

export default Table;
