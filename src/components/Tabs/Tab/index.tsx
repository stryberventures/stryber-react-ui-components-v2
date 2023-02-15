import React, { BaseSyntheticEvent } from 'react';
import classNames from 'classnames';
import { KEYS } from '../../../hooks/useKeyPress';
import { toRem } from '../../Theme/utils';
import Text from '../../Text';
import { CloseIcon } from '../../Icons';
import { TTabsDirection } from '../index';
import useStyles from './styles';


export interface ITab {
  id: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary';
  label: string | React.ReactNode;
  active: boolean;
  disabled?: boolean;
  removable?: boolean;
}

export interface ITabProps extends ITab {
  onChange: (id: ITab['id']) => void;
  onRemove?: (id: ITab['id']) => void;
  className?: string;
  color?: 'primary' | 'secondary';
  direction?: TTabsDirection;
  size?: 'small' | 'medium' | 'large';
}

const Tab: React.FC<ITabProps> = ({
  className,
  id,
  label,
  icon,
  active,
  disabled,
  removable,
  direction,
  color,
  size = 'large',
  onChange,
  onRemove,
  ...rest
}) => {
  const classes = useStyles(color);
  const handleOnChange = () => {
    !disabled && !active && onChange(id);
  };
  const handleOnRemove = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
    onRemove?.(id);
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
        },
        className)
      }
      {...rest}
    >
      {icon && icon}
      {label && typeof (label == 'string')
        ? (
          <Text
            component="span"
            className={classes.label}
            variant={size == 'medium' ? 'components1' : 'components2'}
            weight={size == 'large' ? 'medium' : 'semiBold'}
          >
            {label}
          </Text>
        )
        : label}
      {removable && onRemove && (
        <div
          className={classes.iconWrapper}
          tabIndex={0}
          role="button"
          onClick={handleOnRemove}
          onKeyDown={(e: React.KeyboardEvent) => (e.key == KEYS.enter) && handleOnRemove(e)}
          data-testid="test-remove-tab"
        >
          <CloseIcon
            width={toRem(18)}
            height={toRem(18)}
          />
        </div>
      )}
    </div>
  );
}

export default Tab;

Tab.defaultProps = {
  color: 'primary',
}
