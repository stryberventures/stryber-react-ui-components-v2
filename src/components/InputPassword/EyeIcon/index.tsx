import React from 'react';
import useStyles from './styles';
import { Eye } from '../../Icons/Eye';
import { EyeSlash } from '../../Icons/EyeSlash';
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
      className={classNames(classes.container, {
        [classes.disabled]: disabled,
      }, className)}
    >
      {visible ? <EyeSlash/> : <Eye/>}
    </div>
  );
}
