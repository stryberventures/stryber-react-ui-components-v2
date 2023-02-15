import React from 'react';
import classNames from 'classnames';
import Tab, { ITab, ITabProps } from './Tab';
import useStyles from './styles';


export type TTabsDirection = 'horizontal' | 'vertical';

export interface ITabs {
  tabs: ITab[];
  onChange: (id: ITab['id']) => void;
  onRemove?: (id: ITab['id']) => void;
  className?: string;
  color?: 'primary' | 'secondary';
  direction?: TTabsDirection;
  size?: ITabProps['size'];
  children?: React.ReactNode;
}

const Tabs: React.FC<ITabs> = ({
  color = 'primary',
  direction = 'horizontal',
  tabs = [],
  className,
  onChange,
  onRemove,
  children,
  size,
  ...rest
}) => {
  const classes = useStyles(color);
  return (
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
            key={index}
            direction={direction}
            color={color}
            size={size}
            onChange={(id: ITab['id']) => onChange(id)}
            onRemove={(id: ITab['id']) => onRemove?.(id)}
          />
        );
      })}
    </div>
  );
}

export default Tabs;

Tabs.defaultProps = {
  color: 'primary',
  direction: 'horizontal',
}
