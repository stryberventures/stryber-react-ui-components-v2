import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import RadioBoxIcon from '../../Icons/RadioIcon';

export interface IRadioBoxMarkProps {
  checked?: boolean;
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary',
  disabled?: boolean;
}

export const RadioBoxMark = (props: IRadioBoxMarkProps) => {
  const {
    checked,
    size = 'medium',
    disabled
  } = props;
  const classes = useStyles(props);

  return (
    <span
      className={classNames(classes.radiomark, classes[size],
        { [classes.disabled]: disabled },
        { [classes.checked]: checked },
      )}>
      <RadioBoxIcon/>
      <div className={classes.clickArea}/>
    </span>
  );
};

RadioBoxMark.defaultProps = {
  checked: false,
  size: 'medium',
  color: 'primary',
}
