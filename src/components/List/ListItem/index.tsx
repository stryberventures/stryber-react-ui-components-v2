import React from 'react';
import useStyles from './styles';

export interface IListItem {
  title: string,
  subtitle?: string,
  leftContent?: React.ReactNode,
  rightContent?: React.ReactNode,
  onClick?: (e: React.BaseSyntheticEvent) => void,
  testID?: string;
}

const ListItem: React.FC<IListItem> = (props) => {
  const classes = useStyles();
  const {
    title,
    subtitle,
    rightContent,
    leftContent,
    onClick,
    ...rest
  } = props
  return (
    <div data-testid="test-list-item" className={classes.listItem} onClick={onClick} {...rest}>
      <div className={classes.listItemContainer}>
        {leftContent && <div className={classes.leftContent}>{leftContent}</div>}
        <div>
          <div className={classes.title}>{title}</div>
          <div className={classes.subtitle}>{subtitle}</div>
        </div>
      </div>
      {rightContent && <div className={classes.rightContent}>{rightContent}</div>}
    </div>
  );
}

export default ListItem;

