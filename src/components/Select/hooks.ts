import { IOption, ISelect } from './index';
import React, { useState } from 'react';
import { useFormContext } from '../Form';
import { IDropdownRef } from '../Dropdown';

export const useSelect = (props: ISelect) => {
  const { name = '', error, onChange, value, options } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } = useFormContext(name);
  const dropdownRef = React.useRef<IDropdownRef>(null);

  const getOptionLabelByValue = (value: string) => {
    const option = options.find(optionItem => optionItem.value === value);
    return option ? option.label : '';
  };
  const [selectedValue, setSelectedValue] = useState<string>(getOptionLabelByValue(fieldValue || value));

  const onDropdownToggle = (open: boolean) => {
    !open && updateFormTouched(name, true);
  };

  const onOptionClick = (option: IOption) => {
    updateFormValue(name, option);
    setSelectedValue(option.label);
    onChange && onChange([option]);
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
