import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import Text from '../../Text';

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
    <li
      className={classes.listItem}
      {...rest}
    >
      <div
        className={classes.listItemContainer}
        data-testid="test-list-item"
        onClick={onClick}
      >
        {leftContent && <div className={classes.leftContent}>{leftContent}</div>}
        <div>
          <Text
            variant="components2"
            weight="medium"
            className={classNames(classes.title, classes.listItemText)}
          >
            {title}
          </Text>
          {subtitle && (
            <Text
              variant="components2"
              weight="regular"
              className={classNames(classes.subtitle, classes.listItemText)}
            >
              {subtitle}
            </Text>
          )}
        </div>
      </div>
      {rightContent && <div className={classes.rightContent}>{rightContent}</div>}
    </li>
  );
}

export default ListItem;

