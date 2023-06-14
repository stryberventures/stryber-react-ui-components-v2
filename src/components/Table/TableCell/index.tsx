import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import {
  useTableContextVariant,
  VARIANT_BODY,
  VARIANT_HEAD,
} from '../TableContext';

export interface ITableCell extends React.HTMLAttributes<HTMLTableCellElement> {
  component?: React.ElementType;
}

const TableCell: React.FC<ITableCell> = (props) => {
  const variant = useTableContextVariant();
  const {
    className,
    component: Component = variant === VARIANT_HEAD ? 'th' : 'td',
    children,
    ...rest
  } = props;
  const classes = useStyles()();

  const renderChildren = () => {
    if (variant === VARIANT_HEAD) {
      return <div className={classes.headContentWrapper}>{children}</div>;
    }
    return children;
  };

  return (
    <Component
      className={classNames(
        classes.tableCell,
        {
          [classes.tableHeadCell]: variant === VARIANT_HEAD,
          [classes.tableBodyCell]: variant === VARIANT_BODY,
        },
        className
      )}
      {...rest}
    >
      {renderChildren()}
    </Component>
  );
};

export default TableCell;
