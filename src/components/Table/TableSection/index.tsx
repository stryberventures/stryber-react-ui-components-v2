import React, { ReactNode } from 'react';
import classNames from 'classnames';
import useStyles from './styles';


interface ITableSection {
  children: string | ReactNode;
  className?: string;
}

const TableSection: React.FC<ITableSection> = (props) => {
  const { children, className, ...rest } = props;
  const classes = useStyles()();
  return (
    <div className={classNames(classes.tableSection, className)} {...rest}>
      {children}
    </div>
  );
};

export default TableSection;
