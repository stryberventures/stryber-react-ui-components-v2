import React from 'react';
import useStyles from './styles';
import { EyeIcon as Eye } from '../../Icons';
import classNames from 'classnames';

interface IEyeIcon extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
  disabled?: boolean;
}

export const EyeIcon = (props: IEyeIcon) => {
  const { visible, disabled, className, ...rest } = props;
  const classes = useStyles();
  return (
    <div
      {...rest}
      className={classNames(
        classes.eyeIcon,
        {
          [classes.disabled]: disabled,
        },
        className
      )}
    >
      <Eye variant={visible ? 'open' : 'closed'} />
    </div>
  );
};
