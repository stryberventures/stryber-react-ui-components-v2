import React from 'react';
import { InputToggle } from '../InputToggle';
import { CheckBoxMark, ICheckBoxMark } from './CheckBoxMark';
import { IInputToggleBaseControlled } from '../InputToggle/types';
import { useCheckBoxState } from './hooks';

export interface ICheckBox extends ICheckBoxMark, IInputToggleBaseControlled {}

export const CheckBox = (props: ICheckBox) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckBoxState(props);
  const { size, shape, disabled, label, color, ...rest } = props;

  return (
    <InputToggle
      {...rest}
      type="checkbox"
      checked={checked}
      errorMessage={errorMessage}
      onChange={onChange}
      onFocus={onFocus}
      label={label}
      disabled={disabled}
    >
      <CheckBoxMark
        checked={checked}
        size={size}
        shape={shape}
        disabled={disabled}
        color={color}
      />
    </InputToggle>
  );
}
