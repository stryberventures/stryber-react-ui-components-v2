import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import {
  useTableContextVariant,
  VARIANT_BODY,
  VARIANT_HEAD,
} from '../TableContext';

export interface ITableRow extends React.HTMLAttributes<HTMLTableRowElement> {
  color?: 'primary' | 'secondary';
  selected?: boolean;
  className?: string;
  disabled?: boolean;
  component?: React.ElementType;
}

const TableRow: React.FC<ITableRow> = (props) => {
  const variant = useTableContextVariant();
  const {
    component: Component = 'tr',
    className,
    selected,
    disabled,
    children,
    ...rest
  } = props;
  const classes = useStyles()(props);
  return (
    <Component
      className={classNames(
        classes.tableRow,
        {
          [classes.tableHeadRow]: variant === VARIANT_HEAD,
          [classes.tableBodyRow]: variant === VARIANT_BODY,
          [classes.tableRowDisabled]: disabled,
          [classes.tableRowSelected]: selected,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

TableRow.defaultProps = {
  color: 'primary',
};

export default TableRow;
