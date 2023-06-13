import * as React from 'react';

export const VARIANT_HEAD = 'head';
export const VARIANT_BODY = 'body';

const TableContext = React.createContext<{ variant: 'head' | 'body' | null }>({
  variant: null,
});

export const useTableContextVariant = () =>
  React.useContext(TableContext).variant;

export default TableContext;
