import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

interface IMenuItem extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
}

const MenuItem = (props: IMenuItem) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classNames(classes.menuItem, className)} {...rest}>
      {children}
    </div>
  );
}

export default MenuItem;
