import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface IButton extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>{
  label: string,
  size?: 'mini' | 'small' | 'medium' | 'large',
  shape?: 'flat' | 'round' | 'circle',
  variant?: 'contained' | 'outlined',
  color?: 'primary' | 'secondary',
  disabled?: boolean,
  className?: string,
  iconLeft?: React.FC<{className?: string}>,
  iconRight?: React.FC<{className?: string}>,
}

export const Button = (props: IButton) => {
  const {
    size = 'medium',
    shape = 'round',
    variant = 'contained',
    label,
    disabled,
    className,
    iconLeft: IconLeftComponent,
    iconRight: IconRightComponent,
    onClick,
    ...rest
  } = props;
  const classes = useStyles(props);
  
  return (
    <button
      className={classNames(classes.button, classes[variant], classes[shape], classes[size], {
        [classes.disabled]: disabled,
      }, className)}
      onClick={(e) => !disabled && onClick && onClick(e)}
      {...rest}
    >
      {IconLeftComponent && <IconLeftComponent className={classes.icon}/>}
      {label}
      {IconRightComponent && <IconRightComponent className={classes.icon}/>}
    </button>
  );
}

export default {
  Button,
}

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  shape: 'round',
  variant: 'contained',
}
