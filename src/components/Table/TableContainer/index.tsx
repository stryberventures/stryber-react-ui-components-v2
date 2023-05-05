import React, { FC } from 'react';
import classNames from 'classnames';
import Elevation, { IElevation } from '../../Elevation';
import { useDir } from '../../Theme';
import useStyles from './styles';

export interface ITableContainer extends IElevation {
  dir?: string;
}

const TableContainer: FC<ITableContainer> = (props) => {
  const { className, children, dir = useDir(props.dir), ...rest } = props;
  const classes = useStyles()({
    ...props,
    dir
  });
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
