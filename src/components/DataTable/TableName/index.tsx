import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Text from '../../Text';
import useStyles from './styles';


interface ITableName {
  children: string | ReactNode;
  className?: string;
}

const TableName: React.FC<ITableName> = (props) => {
  const { children, className } = props;
  const classes = useStyles()();
  return (
    <div className={classNames(classes.tableName, className)}>
      {(typeof children == 'string')
        ? <Text variant="body1" className={classes.tableNameText}>{children}</Text>
        : children
      }
    </div>
  );
};

export default TableName;
