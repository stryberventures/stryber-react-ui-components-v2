import * as React from 'react';
import { useFormContext } from '../Form';
import { IInputToggleBaseControlled } from '../InputToggle/types';

export const useCheckBoxState = (props: IInputToggleBaseControlled) => {
  const {
    name = '', checked, disabled, errorMessage, onChange, onFocus, controlled,
  } = props;
  const { fieldValue, fieldError, updateFormTouched, updateFormValue } = useFormContext(name);
  const [internalValue, setInternalValue] = React.useState<boolean>(fieldValue || checked);

  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { name, checked } = e.target;
    setInternalValue(checked);
    updateFormValue(name, checked);
    onChange && onChange(e);
  };
  
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    updateFormTouched(name, true);
    onFocus && onFocus(e);
  };
  
  React.useEffect(() => {
    updateFormValue(name, !!checked, true);
    return () => {
      updateFormValue(name, undefined, true);
    };
  }, []);
  
  return {
    checked: controlled ? checked : internalValue,
    errorMessage: fieldError || errorMessage,
    onChangeWrapper,
    onFocusWrapper,
  }
}
