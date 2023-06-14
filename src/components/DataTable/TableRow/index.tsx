import React from 'react';
import classNames from 'classnames';
import { IData, IMetadata } from '../types';
import Text from '../../Text';
import useStyles from './styles';

export interface ITableRow {
  color?: 'primary' | 'secondary';
  metadata: IMetadata[];
  data: IData;
  selected?: boolean;
  className?: string;
  onSelect?: (itemId: string | number) => void;
}

const TableRow: React.FC<ITableRow> = (props) => {
  const { metadata, data, className, selected, onSelect } = props;
  const classes = useStyles()(props);
  return (
    <div className={classNames(classes.tableRow, className)}>
      {metadata.map((column) => {
        const value = column.formatter?.(data?.[column.id], data) || (
          <Text
            variant="components2"
            className={classNames(classes.text, {
              [classes.textDisabled]: data?.disabled,
            })}
          >
            {data?.[column.id]}
          </Text>
        );
        return (
          <div
            key={column.id}
            className={classNames(classes.tableCell, {
              [classes.tableRowDisabled]: data?.disabled,
              [classes.tableRowSelectable]: !!onSelect,
              [classes.tableRowSelected]: selected,
            })}
            style={{
              flexBasis: column.width,
              minWidth: column.minWidth,
              maxWidth: column.maxWidth,
            }}
            onClick={() => !data?.disabled && onSelect?.(data.id)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default TableRow;
