import { IInput } from './index';
import { useFormContext } from '../Form';
import React, { useEffect, useRef, useState } from 'react';
import { applyDigitMask } from './utils';

export const useInput = (props: IInput) => {
  const {
    variant = 'labelOutside',
    disabled,
    name = '',
    value = '',
    controlled,
    errorMessage: error,
    onChange,
    onFocus,
    onBlur,
    onClick,
    mask,
    ...inputProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { updateFormTouched, updateFormValue, unsetFormValue, fieldValue, fieldError } = useFormContext(name);
  const errorMessage = fieldError || error;
  const initValue = fieldValue || value;
  const [internalValue, setInternalValue] = useState<string>(
    mask && initValue ? applyDigitMask(initValue, mask) : initValue,
  );
  const floatingLabel = variant === 'floatingLabel';
  const [inputInUse, setInputInUse] = useState<boolean>(floatingLabel && !!value);
  const [inFocus, setInFocus] = useState<boolean>(false);


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

    onChange && onChange(e);
  };

  useEffect(
    () => { !controlled && updateFormValue(name, internalValue); },
    [internalValue]
  );

  const onResetButtonPointerDown = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setInternalValue('');
  };

  const onInputContainerClick = (e: any) => {
    onClick && onClick(e);
    if (floatingLabel) {
      setInputInUse(true);
    }
    inputRef.current && inputRef.current.focus();
  };

  const onInputFocus = (e: any) => {
    onFocus && onFocus(e);
    if (floatingLabel) {
      setInputInUse(true)
    }
    setInFocus(true);
  };

  const onInputBlur = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    !controlled && updateFormTouched(name, true);
    onBlur && onBlur(e);

    if (floatingLabel && !e.target.value) {
      setInputInUse(false)
    }
    setInFocus(false);
  };

  useEffect(() => {
    setInputInUse(floatingLabel && !!value);
  },[value])

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
    floatingLabel,
    inputInUse,
    inputRef,
    inFocus,
    setInternalValue,
    onInputContainerClick,
    onResetButtonPointerDown,
    onChange: onChangeWrapper,
    onFocus: onInputFocus,
    onBlur: onInputBlur,
  }
}
