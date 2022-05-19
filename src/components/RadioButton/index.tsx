import React from 'react';
import { InputToggle } from '../InputToggle';
import { RadioBoxMark, IRadioBoxMarkProps } from './RadioBoxMark';
import { useRadioButtonState } from './hooks';
import { IInputToggleBase } from '../InputToggle/types';

export interface IRadioButton extends IRadioBoxMarkProps, IInputToggleBase {}

export const RadioButton = (props: IRadioButton) => {
  const { checked, errorMessage, onChange, onFocus } = useRadioButtonState(props);
  const { size, disabled, color, label, ...rest } = props;

  return (
    <InputToggle
      {...rest}
      type="radio"
      checked={checked}
      errorMessage={errorMessage}
      onChange={onChange}
      onFocus={onFocus}
      label={label}
      disabled={disabled}
    >
      <RadioBoxMark
        checked={checked}
        size={size}
        disabled={disabled}
        color={color}
      />
    </InputToggle>
  );
}
