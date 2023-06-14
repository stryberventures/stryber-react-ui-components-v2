import * as React from 'react';
import TableContext, { VARIANT_BODY } from '../TableContext';

interface ITableBody extends React.HTMLAttributes<HTMLTableSectionElement> {
  component?: React.ElementType;
}

const TableBody: React.FC<ITableBody> = ({
  component: Component = 'tbody',
  children,
  className,
  ...rest
}) => (
  <TableContext.Provider value={{ variant: VARIANT_BODY }}>
    <Component className={className} {...rest}>
      {children}
    </Component>
  </TableContext.Provider>
);

export default TableBody;
