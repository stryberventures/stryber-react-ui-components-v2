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
  onSelect?: (itemId: string) => void,
  onSort?: (orderBy: string, orderDirection: TSortingDirection) => void;
  color?: 'primary' | 'secondary';
  className?: string;
  variant?: 'default' | 'zebra';
}

const Table: React.FC<ITable> = (props) => {
  const { color = 'primary', variant = 'zebra', className, metadata, data, sorting, tableName, selectedItems, onSort, onSelect, } = props;
  const classes = useStyles()(props);
  return (
    <Elevation
      variant="extraLight"
      className={classNames(classes.table, className)}
    >
      {tableName && <TableName>{tableName}</TableName>}
      {selectedItems && !!selectedItems.length && (
        <SelectedItems>
          <Text variant="components1" className={classes.selectedItems}>
            {`${selectedItems.length} Items Selected`}
          </Text>
        </SelectedItems> // TODO translation??
      )}
      <TableHeader metadata={metadata} sorting={sorting} onSort={onSort} />
      {data?.map((row, index: number) => {
        return (
          <TableRow
            key={row.id}
            className={classNames({
              [classes.evenRow]: variant == 'zebra' && index % 2
            })}
            metadata={metadata}
            data={row}
            selected={selectedItems?.includes(row.id)}
            onSelect={onSelect}
          />
        )
      })}
    </Elevation>
  );
}

export default Table;

Table.defaultProps = {}
