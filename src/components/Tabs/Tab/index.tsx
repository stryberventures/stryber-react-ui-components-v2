import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';

export interface ITabs {
  className?: string;
}

const Tabs: React.FC<ITabs> = (props) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.tabs, props.className)}>
      
    </div>
  );
}

export default Tabs;

Tabs.defaultProps = {
}
