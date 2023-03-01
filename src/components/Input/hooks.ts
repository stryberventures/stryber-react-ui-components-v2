import { IInput } from './index';
import { useFormContext } from '../Form';
import React, { useEffect, useRef, useState } from 'react';
import { applyDigitMask } from './utils';

export const useInput = (props: IInput) => {
  const {
    disabled,
    name = '',
    value = '',
    controlled,
    errorMessage: error,
    mobile = false,
    onChange,
    onFocus,
    onBlur,
    onInput,
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
  const [inputInUse, setInputInUse] = useState<boolean>(mobile && !!value);
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

    !controlled && updateFormValue(name, nextValue);
    onChange && onChange(e);
  };

  const onResetButtonMouseDown = () => {
    setInternalValue('');
    setTimeout(() => {
      inputRef.current && inputRef.current.focus();
    }, 0);
  };

  const onInputContainerClick = (e: any) => {
    onClick && onClick(e);
    if (mobile) {
      setInputInUse(true);
    }
    inputRef.current && inputRef.current.focus();
  };

  const onInputFocus = (e: any) => {
    onFocus && onFocus(e);
    if (mobile) {
      setInputInUse(true)
    }
    setInFocus(true);
  };

  const onInputBlur = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    !controlled && updateFormTouched(name, true);
    onBlur && onBlur(e);

    if (mobile && !e.target.value) {
      setInputInUse(false)
    }
    setInFocus(false);
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
    mobile,
    inputInUse,
    inputRef,
    inFocus,
    setInternalValue,
    onChange: onChangeWrapper,
    onResetButtonMouseDown,
    onInputContainerClick,
    onInputFocus,
    onInputBlur,
  }
}
