import React from 'react';
import classNames from 'classnames';
import Tab, { ITab, ITabProps } from './Tab';
import useStyles from './styles';


export type TTabsDirection = 'horizontal' | 'vertical';

export interface ITabs {
  tabs: ITab[];
  onChange: (id: ITab['id']) => void;
  className?: string;
  color?: 'primary' | 'secondary';
  variant?: 'fitted' | 'default';
  direction?: TTabsDirection;
  size?: ITabProps['size'];
  children?: React.ReactNode;
  rtl?: boolean;
}

const Tabs: React.FC<ITabs> = ({
  color = 'primary',
  direction = 'horizontal',
  variant = 'default',
  tabs = [],
  className,
  onChange,
  children,
  size,
  rtl = false,
  ...rest
}) => {
  const classes = useStyles(color);
  return (
    <div
      className={classNames(
        classes.wrapper,
        {
          [classes.vertical]: direction == 'vertical',
          [classes.rtl]: rtl,
        },
      )}
    >
      <div
        className={classNames(
          classes.tabs,
          { [classes.vertical]: direction == 'vertical' },
          className)}
        {...rest}
      >
        {children || tabs.map((tab, index) => {
          return(
            <Tab
              {...tab}
              rtl={rtl}
              key={index}
              direction={direction}
              color={color}
              size={size}
              variant={variant}
              onChange={(id: ITab['id']) => onChange(id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;

Tabs.defaultProps = {
  color: 'primary',
  direction: 'horizontal',
}
