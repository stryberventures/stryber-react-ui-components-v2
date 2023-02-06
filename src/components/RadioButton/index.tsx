import React from 'react';
import InputToggleLayout from '../InputToggleLayout';
import { RadioBoxMark, IRadioBoxMarkProps } from './RadioBoxMark';
import { useRadioButtonState } from './hooks';
import { IInputToggleBase } from '../InputToggleLayout/types';

export interface IRadioButton extends IRadioBoxMarkProps, IInputToggleBase {}

const RadioButton: React.FC<IRadioButton> = (props) => {
  const { checked, errorMessage, onChange, onFocus } = useRadioButtonState(props);
  const { size, disabled, color, label, children, reverse, fullWidth, ...rest } = props;

  return (
    <InputToggleLayout
      {...rest}
      type="radio"
      checked={checked}
      errorMessage={errorMessage}
      onChange={onChange}
      onFocus={onFocus}
      size={size}
      label={label}
      disabled={disabled}
      reverse={reverse}
      fullWidth={fullWidth}
      control={
        <RadioBoxMark
          checked={checked}
          disabled={disabled}
          color={color}
        />
      }
    />
  );
}

export default RadioButton;
