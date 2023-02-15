import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';

export interface ITabs {
}

const Tabs: React.FC<ITabs> = () => {
  const classes = useStyles();
  return (
    <div className={classes.tabs}></div>
  );
}

export default Tabs;

Tabs.defaultProps = {
}
