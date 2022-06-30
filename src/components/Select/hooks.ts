import { ISelect } from './index';
import React, { useState } from 'react';
import { useFormContext } from '../Form';
import { IDropdownRef } from '../Dropdown';

export const useSelect = (props: ISelect) => {
  const { name = '', error, onChange, value = '' } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } = useFormContext(name);
  const [selectedValue, setSelectedValue] = useState<string>(fieldValue || value);
  const dropdownRef = React.useRef<IDropdownRef>(null);

  const onDropdownToggle = (open: boolean) => {
    !open && updateFormTouched(name, true);
  };

  const onOptionClick = (value: string) => {
    updateFormValue(name, value);
    setSelectedValue(value);
    onChange && onChange(value);
    dropdownRef?.current?.close();
  }

  React.useEffect(() => {
    updateFormValue(name, selectedValue, true);
    return () => {
      updateFormValue(name, '', true);
    };
  }, []);

  return {
    dropdownRef,
    value: selectedValue,
    error: fieldError || error,
    onOptionClick,
    onDropdownToggle,
  }
}
