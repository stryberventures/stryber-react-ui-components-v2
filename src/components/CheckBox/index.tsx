import React from 'react';
import InputToggleLayout from '../InputToggleLayout';
import { CheckBoxMark, ICheckBoxMark } from './CheckBoxMark';
import { IInputToggleBaseControlled } from '../InputToggleLayout/types';
import { useCheckedState } from '../InputToggleLayout/hooks';

export interface ICheckBox extends ICheckBoxMark, IInputToggleBaseControlled {}

const CheckBox:React.FC<ICheckBox> = (props) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckedState(props);
  const { size, shape, disabled, label, color, children, reverse, fullWidth, ...rest } = props;

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
      reverse={reverse}
      fullWidth={fullWidth}
      control={
        <CheckBoxMark
          checked={checked}
          size={size}
          shape={shape}
          disabled={disabled}
          color={color}
        />
      }
    >
      {children}
    </InputToggleLayout>
  );
}

export default CheckBox;
