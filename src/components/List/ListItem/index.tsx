import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import Text from '../../Text';

export interface IListItem {
  label?: string,
  title: string,
  subtitle?: string,
  leftContent?: React.ReactNode,
  rightContent?: React.ReactNode,
  onClick?: (e: React.BaseSyntheticEvent) => void,
  size?: 'small' | 'medium' | 'large', 
  hasDivider?: boolean,
  testID?: string;
}

const ListItem: React.FC<IListItem> = (props) => {
  const classes = useStyles();
  const sizes = {
    'small': classes.smallListItem,
    'medium': classes.mediumListItem,
    'large': classes.largeListItem
  }
  const {
    label,
    title,
    subtitle,
    rightContent,
    leftContent,
    onClick,
    size, 
    hasDivider,
    ...rest
  } = props
  return (
    <li
      className={classNames(classes.listItem, hasDivider ? classes.listItemDivider : '', sizes[size || 'medium'])}
      {...rest}
    >
      <div
        className={classes.listItemContainer}
        data-testid="test-list-item"
        onClick={onClick}
      >
        {leftContent && <div className={classes.leftContent}>{leftContent}</div>}
        <div>
          {label && (
            <Text
              variant="components2"
              weight="regular"
              className={classNames(classes.label, classes.listItemText)}
            >
              {label}
            </Text>
          )}
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

