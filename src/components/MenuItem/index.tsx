import React from 'react';
import useStyles from './styles';

interface IMenuItem {
  children: React.ReactNode,
}

export const MenuItem = (props: IMenuItem) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.menuItem}>
      {children}
    </div>
  );
}
