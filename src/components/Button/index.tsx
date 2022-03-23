import React from 'react';
import useStyles from './styles';
import classNames from "classnames";

export interface IButton extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>{
  label: string,
  size?: 'mini' | 'small' | 'medium' | 'large',
  shape?: 'flat' | 'round' | 'circle',
  type?: 'primary' | 'secondary',
  colorPrimary?: string,
  colorSecondary?: string,
  disabled?: boolean,
  className?: string,
  icon?: React.FC<{color?: string, className?: string}>,
}

export const Button = (props: IButton) => {
  const { label, size, shape, colorPrimary, colorSecondary, type, disabled, className, icon: IconComponent } = props;
  const classes = useStyles({colorPrimary, colorSecondary});

  return (
    <button
      className={classNames(classes.button, {
        [classes.mini]: size === 'mini',
        [classes.small]: size === 'small',
        [classes.medium]: size === 'medium',
        [classes.large]: size === 'large',
        [classes.round]: shape === 'round',
        [classes.circle]: shape === 'circle',
        [classes.primary]: type === 'primary',
        [classes.secondary]: type === 'secondary',
        [classes.disabled]: disabled === true,
        [classes.withIcon]: !!IconComponent,
      }, className)}
    >
      {IconComponent && <IconComponent className={classes.icon} color={type === 'primary' ? colorSecondary : colorPrimary} />}
      {label}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  shape: 'round',
  type: 'primary',
  colorPrimary: '#007AFF',
  colorSecondary: '#fff',
}
