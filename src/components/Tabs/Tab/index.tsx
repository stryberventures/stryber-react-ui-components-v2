import React from 'react';
import classNames from 'classnames';
import { KEYS } from '../../../hooks/useKeyPress';
import Text from '../../Text';
import { TTabsDirection } from '../index';
import useStyles from './styles';


export interface ITab {
  id: string;
  icon?: React.ReactNode | ((p: ITab) => React.ReactNode);
  color?: 'primary' | 'secondary';
  label: string | React.ReactNode;
  active: boolean;
  disabled?: boolean;
  dir?: string;
}

export interface ITabProps extends ITab {
  onChange: (id: ITab['id']) => void;
  className?: string;
  color?: 'primary' | 'secondary';
  direction?: TTabsDirection;
  size?: 'small' | 'medium';
  variant?: 'fitted' | 'default';
}

const Tab: React.FC<ITabProps> = (props) => {
  const {
    className,
    id,
    label,
    icon: pIcon,
    active,
    disabled,
    direction,
    color,
    size = 'small',
    variant = 'default',
    onChange,
    dir,
    ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir
  });
  const icon = typeof pIcon === 'function'
    ? pIcon({ ...props, dir })
    : pIcon;
  const handleOnChange = () => {
    !disabled && !active && onChange(id);
  };
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOnChange}
      onKeyDown={(e: React.KeyboardEvent) => e.key == KEYS.enter && handleOnChange()}
      className={classNames(
        classes.tab,
        classes[size],
        {
          [classes.active]: active,
          [classes.disabled]: disabled,
          [classes.vertical]: direction == 'vertical',
          [classes.horizontal]: direction == 'horizontal',
          [classes.fitted]: variant == 'fitted',
        },
        className)
      }
      {...rest}
    >
      {!!icon && icon}
      {label && typeof (label == 'string')
        ? (
          <Text
            component="span"
            className={classes.label}
            variant={size == 'small' ? 'components2' : 'components1'}
            weight="medium"
          >
            {label}
          </Text>
        )
        : label}
    </div>
  );
}

export default Tab;

Tab.defaultProps = {
  color: 'primary',
}
