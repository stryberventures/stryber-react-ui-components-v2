import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { CheckBoxIconDeprecated } from '../../Icons';

export interface ICheckBoxMark {
  checked?: boolean;
  size?: 'small' | 'medium';
  shape?: 'square' | 'circle';
  color?: 'primary' | 'secondary',
  disabled?: boolean;
}

export const CheckBoxMark = (props: ICheckBoxMark) => {
  const {
    checked,
    size = 'medium',
    shape = 'square',
    disabled
  } = props;
  const classes = useStyles(props);

  return (
    <span
      className={classNames(classes.checkboxMark, classes[shape], classes[size],
        { [classes.disabled]: disabled },
        { [classes.checked]: checked },
      )}>
      <CheckBoxIconDeprecated />
      <div className={classes.clickArea}/>
    </span>
  );
};

CheckBoxMark.defaultProps = {
  checked: false,
  size: 'medium',
  shape: 'square',
  color: 'primary',
}
