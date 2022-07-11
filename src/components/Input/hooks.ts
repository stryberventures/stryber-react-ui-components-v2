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
    errorMessage: error,
    onChange,
    onBlur,
    mask,
    ...inputProps
  } = props;
  const { updateFormTouched, updateFormValue, unsetFormValue, fieldValue, fieldError } = useFormContext(name);
  const errorMessage = fieldError || error;
  const initValue = fieldValue || value;
  const [internalValue, setInternalValue] = React.useState<string>(
    mask && initValue ? applyDigitMask(initValue, mask) : initValue,
  );
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { value: targetValue } = e.target;
    let nextValue = targetValue;

    setInternalValue(prevValue => {
      if (inputProps.type === 'number') {
        // Fixes input[type=number] on Safari, where any symbol is allowed
        return targetValue.replace(/^\D/g, '');
      }
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
    disabled,
    inputProps,
    value: controlled ? value : internalValue,
    onChange: onChangeWrapper,
    onBlur: onBlurWrapper,
  }
}
