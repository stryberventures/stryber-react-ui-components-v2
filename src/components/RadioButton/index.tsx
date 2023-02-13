import React from 'react';
import InputToggleLayout from '../InputToggleLayout';
import { RadioBoxMark, IRadioBoxMarkProps } from './RadioBoxMark';
import { useRadioButtonState } from './hooks';
import { IInputToggleBase } from '../InputToggleLayout/types';
import classNames from 'classnames';
import useStyles from './styles';


export interface IRadioButton extends IRadioBoxMarkProps, IInputToggleBase {}

const RadioButton: React.FC<IRadioButton> = (props) => {
  const { checked, errorMessage, onChange, onFocus } = useRadioButtonState(props);
  const { disabled, color, label, children, reverse, fullWidth, className, ...rest } = props;
  const classes = useStyles(color);
  return (
    <InputToggleLayout
      {...rest}
      type="radio"
      checked={checked}
      errorMessage={errorMessage}
      onChange={onChange}
      onFocus={onFocus}
      label={label}
      disabled={disabled}
      reverse={reverse}
      fullWidth={fullWidth}
      className={classNames(classes.radiobutton, className)}
      control={
        <RadioBoxMark
          checked={checked}
          disabled={disabled}
          color={color}
        />
      }
    />
  );
};

RadioButton.defaultProps = {
  color: 'primary',
}

export default RadioButton;
