import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { RadioBoxIconDeprecated } from '../../Icons';

export interface IRadioBoxMarkProps {
  checked?: boolean;
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'error',
  disabled?: boolean;
}

export const RadioBoxMark = (props: IRadioBoxMarkProps) => {
  const {
    checked,
    disabled
  } = props;
  const classes = useStyles(props);

  return (
    <span
      className={classNames(classes.radioBoxMark,
        { [classes.disabled]: disabled },
        { [classes.checked]: checked },
      )}>
      <RadioBoxIconDeprecated />
      <div className={classes.clickArea}/>
    </span>
  );
};

RadioBoxMark.defaultProps = {
  checked: false,
  size: 'medium',
  color: 'primary',
}
