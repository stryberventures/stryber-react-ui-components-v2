import { IInput } from './index';
import { useFormContext } from '../Form';
import React, { useEffect } from 'react';
import { applyDigitMask } from './utils';

export const useInput = (props: IInput) => {
  const {
    disabled,
    name = '',
    value = '',
    controlled,
    onClick,
    errorMessage: error,
    onChange,
    onBlur,
    mask,
    ...inputProps
  } = props;
  const { updateFormTouched, updateFormValue, unsetFormValue, fieldValue, fieldError } = useFormContext(name);
  const errorMessage = fieldError || error;
  const [internalValue, setInternalValue] = React.useState<string>(fieldValue || value);

  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { value: targetValue } = e.target;
    let nextValue = targetValue;

    setInternalValue(prevValue => {
      if (mask) {
        nextValue = prevValue.length >= targetValue.length ? targetValue : applyDigitMask(targetValue, mask);
      }
      return nextValue;
    });

    !controlled && updateFormValue(name, nextValue);
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
    errorMessage,
    onClick,
    disabled,
    inputProps,
    value: controlled ? value : internalValue,
    onChange: onChangeWrapper,
    onBlur: onBlurWrapper,
  }
}
