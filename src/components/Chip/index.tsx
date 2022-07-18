import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface IChip extends React.HTMLAttributes<HTMLDivElement>{
  text?: string,
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  variant?: 'contained' | 'outlined',
  color?: 'primary' | 'secondary' | 'success' | 'default',
  disabled?: boolean,
}

const Chip: React.FC<IChip> = (props) => {
  const {
    text,
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
      [classes.iconLeft]: !!iconLeft && text,
      [classes.iconRight]: !!iconRight && text,
      [classes.iconOnly]: !text,
      [classes.default]: color === 'default',
    })} {...rest}>
      {iconLeft}
      {text}
      {iconRight}
    </div>
  );
}

export default Chip;

Chip.defaultProps = {
  color: 'primary',
  variant: 'contained',
}
