import React from 'react';
import classNames from 'classnames';
import { IMetadata } from '../types';
import Text from '../../Text';
import useStyles from './styles';


interface ITableRow {
  metadata: IMetadata[];
  data?: any; // TODO change it
  selected?: boolean;
  className?: string;
  onSelect?: (itemId: string) => void;
}

const TableRow: React.FC<ITableRow> = (props) => {
  const { metadata, data = {}, className, selected, onSelect } = props;
  const classes = useStyles()(props);
  return (
    <div className={classNames(classes.tableRow, className)}>
      {metadata.map((column) => {
        const value = column.formatter?.(data[column.id], data)
          || (
            <Text
              variant="components2"
              className={classNames(
                classes.text,
                { [classes.textDisabled]: data?.disabled }
              )}
            >
              {data?.[column.id]}
            </Text>
          );
        console.log('onSelect ==>>', onSelect);
        return (
          <div
            key={column.id} // TODO check if it doesn't break anything
            className={classNames(
              classes.tableCell,
              {
                [classes.tableRowDisabled]: data?.disabled,
                [classes.tableRowSelectable]: !!onSelect,
                [classes.tableRowSelected]: selected,
              }
            )}
            style={{ flexBasis: column.width, minWidth: column.minWidth, maxWidth: column.maxWidth }}
            onClick={() => !data?.disabled && onSelect?.(data.id)}
          >
            {value}
          </div>
        )
      })}
    </div>
  );
};

export default TableRow;
