import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface IButton extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>{
  label: string,
  size?: 'mini' | 'small' | 'medium' | 'large',
  shape?: 'flat' | 'round' | 'circle',
  type?: 'primary' | 'secondary' | 'ghost',
  disabled?: boolean,
  className?: string,
  icon?: React.FC<{className?: string}>,
  iconAlign?: 'left' | 'right',
}

export const Button = (props: IButton) => {
  const { label, size, shape, type, disabled,
    className, icon: IconComponent, iconAlign, ...rest } = props;
  const classes = useStyles();
  
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
        [classes.ghost]: type === 'ghost',
        [classes.disabled]: disabled,
        [classes.withIcon]: !!IconComponent,
        [classes.iconAlignRight]: iconAlign === 'right',
      }, className)}
      {...rest}
    >
      {IconComponent && <IconComponent className={classes.icon}/>}
      {label}
    </button>
  );
}

export default {
  Button,
}

Button.defaultProps = {
  size: 'medium',
  shape: 'round',
  type: 'primary',
  iconAlign: 'left',
}
