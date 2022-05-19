import { IInput } from './index';
import { useFormContext } from '../Form';
import React, { useEffect } from 'react';

export const useInput = (props: IInput) => {
  const {
    disabled,
    name = '',
    value = '',
    controlled,
    label,
    placeholder,
    hint,
    className,
    endAdornment,
    onClick,
    errorMessage: error,
    onChange,
    onBlur,
    ...inputProps
  } = props;
  const { updateFormTouched, updateFormValue, unsetFormValue, fieldValue, fieldError } = useFormContext(name);
  const errorMessage = fieldError || error;
  const [internalValue, setInternalValue] = React.useState(fieldValue || value);
  
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { value } = e.target;
    setInternalValue(value);
    !controlled && updateFormValue(name, value);
    onChange && onChange(e);
  };
  
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    !controlled && updateFormTouched(name, true);
    onBlur && onBlur(e);
  };
  
  useEffect(() => {
    !controlled && updateFormValue(name, internalValue, true);
    return () => {
      !controlled && unsetFormValue(name);
    };
  }, []);

  return {
    name,
    label,
    placeholder,
    hint,
    errorMessage,
    className,
    endAdornment,
    onClick,
    disabled,
    inputProps,
    value: controlled ? value : internalValue,
    onChange: onChangeWrapper,
    onBlur: onBlurWrapper,
  }
}
