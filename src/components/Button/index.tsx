<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useEffect } from 'react';
import useStyles from './styles';
>>>>>>> Stashed changes
import classNames from 'classnames';
import useTextStyles from '../Text/styles';
import useStyles from './styles';

export interface IButton extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>{
  children: string,
  size?: 'mini' | 'small' | 'medium' | 'large',
  shape?: 'flat' | 'round' | 'circle',
  variant?: 'contained' | 'outlined',
  color?: 'primary' | 'secondary',
  disabled?: boolean,
  className?: string,
  fullWidth?: boolean,
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
    iconLeft: IconLeftComponent,
    iconRight: IconRightComponent,
    onClick,
    ...rest
  } = props;
  const classes = useStyles(props);
  const textClasses = useTextStyles();

  return (
    <button
      className={classNames(
        classes.button,
        textClasses.buttonLabel,
        classes[variant],
        classes[size],
        classes[shape],
        {
          [classes.disabled]: disabled,
          [classes.fullWidth]: fullWidth,
        },
        className
      )}
      onClick={(e) => !disabled && onClick && onClick(e)}
      {...rest}
    >
      {IconLeftComponent && <IconLeftComponent className={classes.icon}/>}
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
}
