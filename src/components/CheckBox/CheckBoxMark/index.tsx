import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { CheckIcon } from '../../Icons';
import { useTheme } from '../../Theme';

export interface ICheckBoxMark {
  checked?: boolean;
  size?: 'small' | 'medium';
  shape?: 'square' | 'circle';
  color?: 'primary' | 'secondary' | 'error',
  disabled?: boolean;
  indeterminate?: boolean;
}

export const CheckBoxMark = (props: ICheckBoxMark) => {
  const {
    checked,
    size = 'medium',
    shape = 'square',
    disabled,
    indeterminate,
  } = props;
  const classes = useStyles(props);
  const { theme } = useTheme();
  return (
    <span
      className={classNames(classes.checkboxMark, classes[shape], classes[size],
        { [classes.disabled]: disabled },
        { [classes.checked]: checked || indeterminate },
      )}>
      {indeterminate
        ? <div className={classes.indeterminate} />
        : <CheckIcon variant="default" fill={theme.colors.contrast.white} />
      }
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
