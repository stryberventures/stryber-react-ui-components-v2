import React from 'react';
import InputToggleLayout from '../InputToggleLayout';
import { CheckBoxMark, ICheckBoxMark } from './CheckBoxMark';
import { IInputToggleBaseControlled } from '../InputToggleLayout/types';
import { useCheckedState } from '../InputToggleLayout/hooks';
import { useDir } from '../Theme';

export interface ICheckBox extends ICheckBoxMark, IInputToggleBaseControlled {}

const CheckBox:React.FC<ICheckBox> = (props) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckedState(props);
  const {
    shape,
    disabled,
    label,
    color,
    className,
    reverse,
    fullWidth,
    hint,
    indeterminate,
    dir = useDir(props.dir),
    ...rest
  } = props;
  return (
    <InputToggleLayout
      {...rest}
      type="checkbox"
      indeterminate={indeterminate}
      checked={checked}
      errorMessage={errorMessage}
      onChange={onChange}
      onFocus={onFocus}
      label={label}
      hint={hint}
      disabled={disabled}
      reverse={reverse}
      fullWidth={fullWidth}
      className={className}
      dir={dir}
      control={
        <CheckBoxMark
          checked={checked}
          shape={shape}
          disabled={disabled}
          color={errorMessage ? 'error' : color}
          indeterminate={indeterminate}
        />
      }
    />
  );
}

CheckBox.defaultProps = {
  color: 'primary',
}

export default CheckBox;
