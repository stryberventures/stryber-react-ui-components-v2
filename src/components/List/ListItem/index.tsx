import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { useDir } from '../../Theme';

export interface IListItem extends React.HTMLAttributes<HTMLDivElement> {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onClick?: (e: React.BaseSyntheticEvent) => void;
  size?: 'small' | 'medium' | 'large';
  divider?: boolean;
  disabled?: boolean;
  selected?: boolean;
  testID?: string;
  customItem?: React.ReactNode;
  className?: string;
}

const ListItem: React.FC<IListItem> = (props) => {
  const {
    selected,
    rightContent,
    leftContent,
    onClick,
    size,
    divider,
    disabled,
    customItem,
    dir = useDir(props.dir),
    children,
    className,
    ...rest
  } = props;

  const classes = useStyles()({
    ...props,
    dir,
  });

  return (
    <div
      className={classNames(
        classes.listItem,
        {
          [classes.selected]: selected,
          [classes.disabled]: disabled,
          [classes.listItemDivider]: divider,
        },
        classes[size!],
        className
      )}
      onClick={onClick}
      {...rest}
      data-testid="test-list-item"
    >
      <div className={classes.listItemContainer}>
        {leftContent && (
          <div className={classes.leftContent}>{leftContent}</div>
        )}
        {children}
      </div>
      {rightContent && (
        <div className={classes.rightContent}>{rightContent}</div>
      )}
    </div>
  );
};

export default ListItem;

ListItem.defaultProps = {
  size: 'medium',
};
