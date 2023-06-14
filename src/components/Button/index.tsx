import React, { KeyboardEvent, useRef } from 'react';
import classNames from 'classnames';
import useTextStyles from '../Text/styles';
import useStyles from './styles';
import { useDir } from '../Theme';
import { KEYS } from '../../hooks/useKeyPress';

export interface IButton
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  children?: string;
  size?: 'mini' | 'small' | 'medium' | 'large';
  shape?: 'square' | 'round' | 'circle';
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary' | 'error';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode | ((p: IIconButton) => React.ReactNode);
  iconLeft?: React.ReactNode | ((p: IIconButton) => React.ReactNode);
  iconRight?: React.ReactNode | ((p: IIconButton) => React.ReactNode);
}
interface IIconButton extends IButton {
  classIcon: string;
}

const Button: React.FC<IButton> = (props) => {
  const {
    size = 'medium',
    shape = 'round',
    variant = 'contained',
    children,
    disabled,
    className,
    fullWidth,
    icon: pIcon,
    iconLeft: pIconLeft,
    iconRight: pIconRight,
    onClick,
    dir = useDir(props.dir),
    ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });
  const icon =
    typeof pIcon === 'function'
      ? pIcon({ ...props, dir, classIcon: classes.icon })
      : pIcon;
  const iconLeft =
    typeof pIconLeft === 'function'
      ? pIconLeft({ ...props, dir, classIcon: classes.icon })
      : pIconLeft;
  const iconRight =
    typeof pIconRight === 'function'
      ? pIconRight({ ...props, dir, classIcon: classes.icon })
      : pIconRight;
  const textClasses = useTextStyles();
  const btnRef: React.Ref<HTMLButtonElement> = useRef(null);
  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => {
    !disabled && onClick?.(e as React.MouseEvent<HTMLButtonElement>);
  };
  return (
    <button
      ref={btnRef}
      className={classNames(
        classes.button,
        size == 'mini'
          ? textClasses.buttonLabelMini
          : textClasses.buttonLabelLarge,
        textClasses.bold,
        classes[variant],
        classes[size],
        classes[shape],
        {
          [classes.disabled]: disabled,
          [classes.fullWidth]: fullWidth,
        },
        className
      )}
      onClick={(
        e:
          | React.MouseEvent<HTMLButtonElement>
          | KeyboardEvent<HTMLButtonElement>
      ) => {
        btnRef?.current?.blur();
        handleOnClick(e);
      }}
      onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key != KEYS.tab) e.preventDefault(); // to prevent invocation of onClick event
        e.key == KEYS.enter && handleOnClick(e);
      }}
      {...rest}
    >
      {icon}
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  shape: 'round',
  variant: 'contained',
  disabled: false,
  fullWidth: false,
};
