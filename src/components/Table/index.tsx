import React from 'react';
import classNames from 'classnames';
import { IMetadata, ITableSorting, TSortingDirection } from './types';
import Elevation from '../Elevation';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Text from '../Text';
import TableName from './TableName';
import SelectedItems from './SelectedItems';
import useStyles from './styles';


export interface ITable {
  metadata: IMetadata[];
  data?: any[];
  tableName?: string;
  sorting?: ITableSorting,
  selectedItems?: any[],
  selectedItemsTitle?: string,
  onSelect?: (itemId: string) => void,
  onSort?: (orderBy: string, orderDirection: TSortingDirection) => void;
  color?: 'primary' | 'secondary';
  className?: string;
  variant?: 'default' | 'zebra';
  pagination?: any;
}

const Table: React.FC<ITable> = (props) => {
  const {
    color = 'primary',
    variant = 'zebra',
    className,
    metadata,
    data,
    sorting,
    tableName,
    selectedItems,
    selectedItemsTitle,
    pagination = true,
    onSort,
    onSelect,
  } = props;
  const classes = useStyles()();
  return (
    <Elevation
      variant="extraLight"
      className={classNames(classes.table, className)}
    >
      {tableName && <TableName>{tableName}</TableName>}
      {selectedItems && !!selectedItems.length && (
        <SelectedItems>
          <Text variant="components1" className={classes.selectedItems}>
            {selectedItemsTitle || `${selectedItems.length} Items Selected`}
          </Text>
        </SelectedItems>
      )}
      <TableHeader
        color={color}
        metadata={metadata}
        sorting={sorting}
        onSort={onSort}
      />
      {data?.map((row, index: number) => {
        return (
          <TableRow
            color={color}
            key={row.id}
            className={classNames({ [classes.evenRow]: variant == 'zebra' && index % 2 })}
            metadata={metadata}
            data={row}
            selected={selectedItems?.includes(row.id)}
            onSelect={onSelect}
          />
        )
      })}
      {pagination && (
        <div className={classes.paginationPlaceholder}>
          <Text
            variant="components1"
            className={classes.paginationPlaceholderText}
          >
            Pagination placeholder
          </Text>
        </div>
      )}
    </Elevation>
  );
}

export default Table;

Table.defaultProps = {}
