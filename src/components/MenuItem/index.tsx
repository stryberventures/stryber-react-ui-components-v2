import React, { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import Text from '../Text';
import { useDir } from '../Theme';
import useStyles from './styles';

export interface IMenuItem extends React.HTMLAttributes<HTMLDivElement> {
  children: string | ReactNode,
  selected?: boolean,
  readOnly?: boolean,
}

const MenuItem = forwardRef<HTMLDivElement,IMenuItem>( (props, ref) => {
  const { children, className, selected, dir = useDir(props.dir), readOnly = false, ...rest } = props;
  const classes = useStyles({
    ...props,
    dir
  });

  return (
    <div
      ref={ref}
      className={classNames(
        classes.menuItemWrapper,
        {
          [classes.selected]: selected,
          [classes.readOnly]: readOnly,
        }
      )}
      {...rest}
    >
      {typeof children == 'string' ? (
        <Text
          variant="components2"
          weight="regular"
          className={classNames(classes.menuItem, classes.menuItemText, className)}
        >
          {children}
        </Text>
      ) : (
        <div className={classNames(classes.menuItem, className)}>
          {children}
        </div>
      )}
    </div>
  );
})

MenuItem.displayName = 'MenuItem';

export default MenuItem;
