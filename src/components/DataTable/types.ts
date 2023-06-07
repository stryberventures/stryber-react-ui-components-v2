export interface IMetadata<T = any> {
  id: string;
  label: string;
  sortable?: boolean;
  info?: {
    title: string;
    text: string;
  };
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  formatter?: (value: string | number, row?: T) => JSX.Element | string;
  truncate?: boolean;
  multiline?: boolean;
}

export enum SortingDirection {
  asc = 'asc',
  desc = 'desc',
}

export type TSortingDirection = 'asc' | 'desc';

export interface ITableSorting {
  orderBy: string;
  orderDirection: TSortingDirection;
}

export interface IData {
  id: string | number;
  disabled?: boolean;
  [key: string]: any;
}
