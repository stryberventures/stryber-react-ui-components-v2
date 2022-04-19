import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface IButton extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>{
  label: string,
  size?: 'mini' | 'small' | 'medium' | 'large',
  shape?: 'flat' | 'round' | 'circle',
  type?: 'primary' | 'secondary' | 'tertiary',
  disabled?: boolean,
  className?: string,
  icon?: React.FC<{className?: string}>,
  iconAlign?: 'left' | 'right',
}

export const Button = (props: IButton) => {
  const {
    size = 'medium',
    shape = 'round',
    type = 'primary',
    iconAlign = 'left',
    label,
    disabled,
    className,
    icon: IconComponent,
    ...rest
  } = props;
  const classes = useStyles();
  
  return (
    <button
      className={classNames(classes.button, classes[type], classes[shape], classes[size], {
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
