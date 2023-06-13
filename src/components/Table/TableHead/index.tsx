import * as React from 'react';
import TableContext, { VARIANT_HEAD } from '../TableContext';

interface ITableHead extends React.HTMLAttributes<HTMLTableSectionElement> {
  component?: React.ElementType;
}

const TableHead: React.FC<ITableHead> = ({
  component: Component = 'thead',
  children,
  className,
  ...rest
}) => (
  <TableContext.Provider value={{ variant: VARIANT_HEAD }}>
    <Component className={className} {...rest}>
      {children}
    </Component>
  </TableContext.Provider>
);

export default TableHead;
