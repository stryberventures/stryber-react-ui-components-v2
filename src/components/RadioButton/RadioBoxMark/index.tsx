import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';

export type TRadioButtonColor = 'primary' | 'secondary' | 'error';

export interface IRadioBoxMarkProps {
  checked?: boolean;
  size?: 'small' | 'medium';
  color?: TRadioButtonColor,
  disabled?: boolean;
}

export const RadioBoxMark = (props: IRadioBoxMarkProps) => {
  const {
    checked,
    disabled,
  } = props;
  console.log('props.color', props.color);
  const classes = useStyles(props);
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
