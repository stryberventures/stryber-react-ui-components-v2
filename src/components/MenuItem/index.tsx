import React, { forwardRef } from 'react';
import useStyles from './styles';
import classNames from 'classnames';

interface IMenuItem extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  selected?: boolean,
  readOnly?: boolean,
}

const MenuItem = forwardRef<HTMLDivElement,IMenuItem>( (props, ref) => {
  const { children, className, selected, readOnly = false, ...rest } = props;
  const classes = useStyles();

  return (
    <div
      ref={ref}
      className={classNames(classes.menuItem, className, {
        [classes.selected]: selected,
        [classes.readOnly]: readOnly,
      })}
      {...rest}
    >
      {children}
    </div>
  );
})

MenuItem.displayName = 'MenuItem';

export default MenuItem;
