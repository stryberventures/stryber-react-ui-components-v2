import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
export interface ICircularProgress extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary';
  shape?: 'flat' | 'round';
  value?: number;
  className?: string;
  size?: number;
  thickness?: number;
}

const CircularProgress: React.FC<ICircularProgress> = (props) => {
  const {
    variant,
    value = 0,
    size = 48,
    thickness = 3.6,
    className,
    ...rest
  } = props;
  const circumference = 2 * Math.PI * ((size - thickness) / 2);
  const classes = useStyles()(props);
  return (
    <span className={classNames(classes.root, className)} {...rest}>
      <svg viewBox={`${size / 2} ${size / 2} ${size} ${size}`} className={classes.svg}>
        <circle
          className={classes.circle}
          style={variant === 'determinate' ? {
            strokeDashoffset: `${(((100 - value) / 100) * circumference).toFixed(3)}px`,
            strokeDasharray: circumference.toFixed(3)
          }
            :
            {}}
          cx={size}
          cy={size}
          r={(size - thickness) / 2}
          fill="none"
          strokeWidth={thickness} />
      </svg>
    </span>
  );
};

CircularProgress.defaultProps = {
  color: 'primary',
  shape: 'flat',
  size: 48,
  variant: 'indeterminate',
}

export default CircularProgress;
