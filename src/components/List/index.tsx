import React from 'react';
import classNames from 'classnames';
import ListItem, { IListItem } from './ListItem';
import { useDir } from '../Theme';
import useStyles from './styles';

export interface IList {
  listItems: IListItem[],
  listClassName?: string,
  dir?: string,
}

const List: React.FC<IList> = (props) => {
  const {
    listItems,
    listClassName,
    dir = useDir(props.dir),
    ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir
  });
  return (
    <ul className={classNames(classes.list, listClassName)} {...rest}>
      {props.children
        ? props.children
        : listItems.map((listItem, index) => (
          listItem.customItem
            ? listItem.customItem
            : <ListItem
              key={index}
              title={listItem.title}
              subtitle={listItem.subtitle}
              leftContent={listItem.leftContent}
              rightContent={listItem.rightContent}
              onClick={listItem.onClick}
              label={listItem.label}
              hasDivider={listItem.hasDivider}
              size={listItem.size}
              customItem={listItem.customItem}
              disabled={listItem.disabled}
              dir={dir}
            />
        ))}
    </ul>
  )
}

export default List;

