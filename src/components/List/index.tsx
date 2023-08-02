import React from 'react';
import classNames from 'classnames';
import ListItem from './ListItem';
import ListItemText from './ListItemText';
import { useDir } from '../Theme';
import useStyles from './styles';

export interface IList {
  className?: string;
  dir?: string;
}

const List: React.FC<IList> = (props) => {
  const { className, dir = useDir(props.dir), children, ...rest } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });
  return (
    <div className={classNames(classes.list, className)} {...rest}>
      {children}
    </div>
  );
};

export { ListItem, ListItemText };

export default List;
