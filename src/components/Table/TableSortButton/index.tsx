import React from 'react';
import classNames from 'classnames';
import { KEYS } from '../../../hooks/useKeyPress';
import { PointArrowIcon } from '../../Icons';
import { IArrowIconVariant } from '../../Icons/types';
import useStyles from './styles';

type DirectionType = 'asc' | 'desc';

export interface ITableSortButton extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  direction?: DirectionType;
  color?: 'primary' | 'secondary';
  onClick?: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const TableSortButton: React.FC<ITableSortButton> = (props) => {
  const { active, direction, onClick, ...rest } = props;
  const classes = useStyles()(props);
  const getIconVariant = (direction?: DirectionType): IArrowIconVariant => {
    switch (direction) {
      case 'asc':
        return 'up';
      case 'desc':
        return 'down';
      default:
        return 'up';
    }
  }
  return (
    <div
      className={classNames(classes.sortingIconWrapper,
        { [classes.sortingIconActive]: active }
      )}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key == KEYS.enter && onClick && onClick()}
      data-testid="sortingIcon"
      onClick={onClick}
      {...rest}
    >
      <PointArrowIcon
        variant={getIconVariant(direction)}
        className={classes.sortingIcon}
      />
    </div>
  );
};

TableSortButton.defaultProps = {
  color: 'primary',
}

export default TableSortButton;
