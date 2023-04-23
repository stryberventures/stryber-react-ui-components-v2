import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import { useDir } from '../Theme';
import useStyles from './styles';

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
  const dir = useDir(props.dir);
  const classes = useStyles()({
    ...props,
    dir,
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
      {children && (
        <Text
          variant="components2"
          weight="medium"
          className={classes.chipText}
        >
          {children}
        </Text>
      )}
      {iconRight}
    </div>
  );
}

export default Chip;

Chip.defaultProps = {
  color: 'primary',
  variant: 'contained',
}
