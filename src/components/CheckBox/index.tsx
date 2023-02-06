import React from 'react';
import InputToggleLayout from '../InputToggleLayout';
import { CheckBoxMark, ICheckBoxMark } from './CheckBoxMark';
import { IInputToggleBaseControlled } from '../InputToggleLayout/types';
import { useCheckedState } from '../InputToggleLayout/hooks';
import classNames from 'classnames';
import useStyles from './styles';

export interface ICheckBox extends ICheckBoxMark, IInputToggleBaseControlled {}

const CheckBox:React.FC<ICheckBox> = (props) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckedState(props);
  const {
    size = 'medium', shape, disabled, label, color, className, reverse, fullWidth,
    hint, controlCentered, indeterminate, ...rest
  } = props;
  const  classes = useStyles(props);
  return (
    <InputToggleLayout
      {...rest}
      size={size}
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
      controlCentered={controlCentered}
      className={classNames(classes.checkbox, classes[size], { [classes.reversed]: reverse }, className)}
      control={
        <CheckBoxMark
          checked={checked}
          shape={shape}
          disabled={disabled}
          color={color}
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
