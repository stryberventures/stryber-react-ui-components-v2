import React, { KeyboardEvent, useRef } from 'react';
import classNames from 'classnames';
import useTextStyles from '../Text/styles';
import useStyles from './styles';
import { KEYS } from '../../hooks/useKeyPress';

export interface IButton extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>{
  children?: string,
  size?: 'mini' | 'small' | 'medium' | 'large',
  shape?: 'square' | 'round' | 'circle',
  variant?: 'contained' | 'outlined' | 'ghost',
  color?: 'primary' | 'secondary' | 'error',
  disabled?: boolean,
  className?: string,
  fullWidth?: boolean,
  icon?: React.FC<{className?: string}>,
  iconLeft?: React.FC<{className?: string}>,
  iconRight?: React.FC<{className?: string}>,
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
    icon: IconComponent,
    iconLeft: IconLeftComponent,
    iconRight: IconRightComponent,
    onClick,
    ...rest
  } = props;
  const classes = useStyles(props);
  const textClasses = useTextStyles();
  const btnRef: React.Ref<HTMLButtonElement> = useRef(null);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
    !disabled && onClick?.(e as React.MouseEvent<HTMLButtonElement>);
  }
  return (
    <button
      ref={btnRef}
      className={classNames(
        classes.button,
        (size == 'mini') ? textClasses.buttonLabelMini : textClasses.buttonLabelLarge,
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
      onClick={(e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        btnRef?.current?.blur();
        handleOnClick(e);
      }}
      onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key != KEYS.tab) e.preventDefault(); // to prevent invocation of onClick event
        e.key == KEYS.enter && handleOnClick(e);
      }}
      {...rest}
    >
      {IconLeftComponent && <IconLeftComponent className={classes.icon}/>}
      {IconComponent && <IconComponent className={classes.icon} />}
      {children}
      {IconRightComponent && <IconRightComponent className={classes.icon}/>}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  shape: 'round',
  variant: 'contained',
  disabled: false,
  fullWidth: false,
}
