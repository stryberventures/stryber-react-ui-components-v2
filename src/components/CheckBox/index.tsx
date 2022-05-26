import React from 'react';
import { InputToggleLayout } from '../InputToggleLayout';
import { CheckBoxMark, ICheckBoxMark } from './CheckBoxMark';
import { IInputToggleBaseControlled } from '../InputToggleLayout/types';
import { useCheckedState } from '../InputToggleLayout/hooks';

export interface ICheckBox extends ICheckBoxMark, IInputToggleBaseControlled {}

export const CheckBox = (props: ICheckBox) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckedState(props);
  const { size, shape, disabled, label, color, ...rest } = props;

  return (
    <InputToggleLayout
      {...rest}
      size={size}
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
