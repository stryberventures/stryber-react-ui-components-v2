import React from 'react';
import { useCheckedState } from '../InputToggle/hooks';
import { InputToggleLayout } from '../InputToggle';
import { IToggleIcon, ToggleIcon } from './ToggleIcon';
import { IInputToggleBaseControlled } from '../InputToggle/types';

export interface IToggle extends IToggleIcon, Omit<IInputToggleBaseControlled, 'size'> {}

export const Toggle = (props: IToggle) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckedState(props);
  const { disabled, label, color, ...rest } = props;

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
      <ToggleIcon checked={checked} color={color} disabled={disabled}/>
    </InputToggleLayout>
  );
}
