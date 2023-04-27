import React from 'react';
import classNames from 'classnames';
import ListItem, { IListItem } from './ListItem';
import useStyles from './styles';

export interface IList {
  listItems: IListItem[],
  listClassName?: string
}

const List: React.FC<IList> = (props) => {
  const { listItems, listClassName, ...rest } = props;
  const classes = useStyles();
  return (
    <ul className={classNames(classes.list, listClassName)} {...rest}>
      {listItems.map((listItem, index) => (
        <ListItem
          key={index}
          title={listItem.title}
          subtitle={listItem.subtitle}
          leftContent={listItem.leftContent}
          rightContent={listItem.rightContent}
          onClick={listItem.onClick}
          label={listItem.label}
          hasDivider={listItem.hasDivider}
          size={listItem.size}
        />
      ))}
    </ul>
  )
}

export default List;

