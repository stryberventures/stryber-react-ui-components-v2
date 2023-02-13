import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';


export interface IRadioBoxMarkProps {
  checked?: boolean;
  color?: 'primary' | 'secondary' | 'error',
  disabled?: boolean;
}

export const RadioBoxMark = (props: IRadioBoxMarkProps) => {
  const {
    checked,
    disabled,
  } = props;
  const classes = useStyles(props.color);
  return (
    <div
      className={classNames(classes.radioBoxMark,
        {
          [classes.checked]: checked,
          [classes.disabled]: disabled,
        },
      )}>
      {checked && <div className={classes.radioBoxIcon} />}
      <div className={classes.clickArea}/>
    </div>
  );
};

RadioBoxMark.defaultProps = {
  checked: false,
  color: 'primary',
}
