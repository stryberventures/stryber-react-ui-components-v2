import React from 'react';
import ListItem, { IListItem } from './ListItem';

export interface IList {
  listItems: IListItem[],
  listClassName?: string
}

const List: React.FC<IList> = (props) => {
  const { listItems, listClassName, ...rest } = props;
  return (
    <div className={listClassName} {...rest}>
      {listItems.map((listItem, index) => (
        <ListItem
          key={index}
          title={listItem.title}
          subtitle={listItem.subtitle}
          leftContent={listItem.leftContent}
          rightContent={listItem.rightContent}
          onClick={listItem.onClick}
        />
      ))}
    </div>
  )
}

export default List;

