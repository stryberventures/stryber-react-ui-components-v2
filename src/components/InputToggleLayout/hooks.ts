import * as React from 'react';
import { useFormContext } from '../Form';
import { IInputToggleBaseControlled } from './types';

export const useCheckedState = (props: IInputToggleBaseControlled) => {
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
    !controlled && updateFormValue(name, checked);
    onChange && onChange(e);
  };

  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    !controlled && updateFormTouched(name, true);
    onFocus && onFocus(e);
  };
  
  React.useEffect(() => {
    !controlled && updateFormValue(name, !!checked, true);
    return () => {
      !controlled && updateFormValue(name, undefined, true);
    };
  }, []);

  return {
    checked: controlled ? checked : internalValue,
    errorMessage: fieldError || errorMessage,
    onChange: onChangeWrapper,
    onFocus: onFocusWrapper,
  }
}
