import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { CheckIcon } from '../../Icons';
import { useTheme } from '../../Theme';

export interface ICheckBoxMark {
  checked?: boolean;
  shape?: 'square' | 'circle';
  color?: 'primary' | 'secondary' | 'error',
  disabled?: boolean;
  indeterminate?: boolean;
}

export const CheckBoxMark = (props: ICheckBoxMark) => {
  const {
    checked,
    shape = 'square',
    disabled,
    indeterminate,
    color,
  } = props;
  const classes = useStyles()(color);
  const { theme } = useTheme();
  return (
    <div
      className={classNames(
        classes.checkboxMark, classes[shape],
        {
          [classes.disabled]: disabled,
          [classes.checked]: checked || indeterminate
        },
      )}>
      {indeterminate
        ? <div className={classes.indeterminate} />
        : <CheckIcon variant="default" fill={theme.colors.contrast.white} />
      }
      <div className={classes.clickArea}/>
    </div>
  );
};

CheckBoxMark.defaultProps = {
  checked: false,
  shape: 'square',
  color: 'primary',
}
