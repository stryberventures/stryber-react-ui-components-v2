import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface IChip extends React.HTMLAttributes<HTMLDivElement>{
  children?: string,
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  variant?: 'contained' | 'outlined',
  color?: 'primary' | 'secondary' | 'success' | 'default',
  disabled?: boolean,
}

const Chip: React.FC<IChip> = (props) => {
  const {
    children,
    iconLeft,
    iconRight,
    variant = 'contained',
    disabled,
    className,
    color,
    ...rest
  } = props;
  const classes = useStyles({
    ...props,
    color: color === 'default' ? 'primary' : color
  });

  return (
    <div className={classNames(classes.chip, classes[variant], className, {
      [classes.disabled]: disabled,
      [classes.iconLeft]: !!iconLeft && children,
      [classes.iconRight]: !!iconRight && children,
      [classes.iconOnly]: !children,
      [classes.default]: color === 'default',
    })} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </div>
  );
}

export default Chip;

Chip.defaultProps = {
  color: 'primary',
  variant: 'contained',
}
