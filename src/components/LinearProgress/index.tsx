import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';
import { useDir } from '../Theme';

export interface ILinearProgress extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary';
  shape?: 'flat' | 'round';
  value?: number;
  className?: string;
}

const LinearProgress: React.FC<ILinearProgress> = (props) => {
  const {
    variant = 'indeterminate',
    className,
    value = 0,
    dir = useDir(props.dir),
    ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });

  const transform = (value - 100) * (dir === 'rtl' ? -1 : 1);
  return (
    <div className={classNames(classes.root, className)} {...rest}>
      <span className={classes.progressContainer}>
        {variant === 'indeterminate' ? (
          <>
            <span
              className={classNames(
                classes.progressLine,
                classes.spinningLine,
                classes.firstSpinningLine
              )}
            />
            <span
              className={classNames(
                classes.progressLine,
                classes.spinningLine,
                classes.secondSpinningLine
              )}
            />
          </>
        ) : (
          <span
            className={classNames(
              classes.progressLine,
              classes.determinateLine
            )}
            style={{ transform: `translateX(${transform}%)` }}
          />
        )}
      </span>
    </div>
  );
};

LinearProgress.defaultProps = {
  color: 'primary',
};

export default LinearProgress;
