import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';

interface ISelectedItems {
  children: string | React.ReactNode;
  className?: string;
}

const SelectedItems: React.FC<ISelectedItems> = (props) => {
  const { children, className } = props;
  const classes = useStyles()();
  return (
    <div className={classNames(classes.selectedItems, className)}>
      {children}
    </div>
  );
};

export default SelectedItems;
