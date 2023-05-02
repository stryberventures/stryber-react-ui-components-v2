import React, { FC } from 'react';
import classNames from 'classnames';
import Elevation, { IElevation } from '../../Elevation';
import useStyles from './styles';
export interface ITableContainer extends IElevation {}

const TableContainer: FC<ITableContainer> = (props) => {
  const { className, children, ...rest } = props;
  const classes = useStyles()();
  return (
    <Elevation
      variant="extraLight"
      className={classNames(classes.tableContainer, className)}
      {...rest}
    >
      {children}
    </Elevation>
  );
};

export default TableContainer;
