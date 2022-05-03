import * as React from 'react';
import { useFormContext } from '../Form';
import { IInputToggleBase } from '../InputToggle/types';

export const useRadioButtonState = (props: IInputToggleBase) => {
  const {
    name = '', checked, disabled, errorMessage, onChange, onFocus, value,
  } = props;
  const { fieldValue, fieldError, updateFormTouched, updateFormValue } = useFormContext(name);
  const checkedValue = fieldValue === value;

  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { name, checked } = e.target;
    checked && updateFormValue(name, value);
    onChange && onChange(e);
  };
  
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    updateFormTouched(name, true);
    onFocus && onFocus(e);
  };
  
  React.useEffect(() => {
    updateFormValue(name, value, true);
    return () => {
      updateFormValue(name, undefined, true);
    };
  }, []);
  
  return {
    checked: checkedValue || checked,
    errorMessage: fieldError || errorMessage,
    onChangeWrapper,
    onFocusWrapper,
  }
}
