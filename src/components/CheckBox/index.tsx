import React from 'react';
import { InputToggleLayout } from '../InputToggle';
import { CheckBoxMark, ICheckBoxMark } from './CheckBoxMark';
import { IInputToggleBaseControlled } from '../InputToggle/types';
import { useCheckedState } from '../InputToggle/hooks';

export interface ICheckBox extends ICheckBoxMark, IInputToggleBaseControlled {}

export const CheckBox = (props: ICheckBox) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckedState(props);
  const { size, shape, disabled, label, color, ...rest } = props;

  return (
    <InputToggleLayout
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
    </InputToggleLayout>
  );
}
