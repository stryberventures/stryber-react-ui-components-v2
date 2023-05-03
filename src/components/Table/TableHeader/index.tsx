import React from 'react';
import classNames from 'classnames';
import Text from '../../Text';
import Tooltip from '../../Tooltip';
import { QuestionIcon, PointArrowIcon } from '../../Icons';
import { IArrowIconVariant } from '../../Icons/types';
import { IMetadata, ITableSorting, SortingDirection, TSortingDirection } from '../types';
import useStyles from './styles';
import { KEYS } from '../../../hooks/useKeyPress';


export interface ITableHeader {
  color?: 'primary' | 'secondary';
  metadata: IMetadata[];
  sorting?: ITableSorting;
  className?: string;
  dir: string;
  onSort?: (orderBy: string, orderDirection: TSortingDirection) => void;
}

function getArrowDirection (columnId: string, sorting?: ITableSorting): IArrowIconVariant {
  if (!sorting || columnId != sorting.orderBy) return 'down';
  return sorting.orderDirection == SortingDirection.asc ? 'up' : 'down';
}

const TableHeader: React.FC<ITableHeader> = (props) => {
  const { color = 'primary', metadata, sorting, onSort, className } = props;
  const classes = useStyles()(props);
  function handleOnSort (columnId: string) {
    const isCurrentColumnSorted = sorting?.orderBy == columnId;
    const newSortingDirection = isCurrentColumnSorted
      ? ((sorting?.orderDirection == SortingDirection.asc) ? SortingDirection.desc : SortingDirection.asc)
      : SortingDirection.desc;
    onSort?.(columnId, newSortingDirection);
  }
  return (
    <div className={classes.tableHeader}>
      {metadata.map((column) => {
        return (
          <div
            key={column.id}
            className={classNames(classes.thCell, className)}
            style={{ flexBasis: column.width, minWidth: column.minWidth, maxWidth: column.maxWidth }}
          >
            <Text
              variant="caption1"
              className={classes.thLabel}
            >
              {column.label}
            </Text>
            {column.info && (
              <Tooltip
                title={column.info.title}
                text={column.info.text}
                position="bottom"
                className={classes.tooltipTarget}
              >
                <QuestionIcon className={classes.tooltipTargetIcon} data-testid="questionIcon" />
              </Tooltip>
            )}
            {column.sortable && (
              <div
                className={classNames(classes.sortingIconWrapper,
                  { [classes.sortingIconActive]: column.id == sorting?.orderBy }
                )}
                role="button"
                tabIndex={0}
                onClick={() => handleOnSort(column.id)}
                onKeyDown={(e) => e.key == KEYS.enter && handleOnSort(column.id)}
                data-testid="sortingIcon"
              >
                <PointArrowIcon
                  variant={getArrowDirection(column.id, sorting)}
                  className={classes.sortingIcon}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  );
};

export default TableHeader;
