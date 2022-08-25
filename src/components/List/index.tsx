import React from 'react';
import useStyles from './styles';

export interface IListItem {
  title?: string,
  subtitle?: string,
  leftContent?: React.ReactNode,
  rightContent?: React.ReactNode,
  onClick?: (e: React.BaseSyntheticEvent) => void,
}

const List = (props: IListItem) => {
  const {
    title,
    subtitle,
    rightContent,
    leftContent,
    onClick,
    ...rest
  } = props;
  const classes = useStyles(props);

  return (
    <div data-testid="listItemTestID" className={classes.listItem} onClick={onClick} {...rest}>
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

export default List;

