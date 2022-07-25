import { ICombobox, IOption } from './index';
import { useFormContext } from '../Form';
import React from 'react';
import { IDropdownRef } from '../Dropdown';

export const useCombobox = (props: ICombobox) => {
  const { name = 'combobox', options, value, error, onChange, onToggle } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } = useFormContext(name);
  const dropdownRef = React.useRef<IDropdownRef>(null);

  const getOptionLabelByValue = (value: string | number) => {
    const option = options.find(optionItem => optionItem.value === value);
    return option ? option.label : '';
  };
  
  const getOptionValueByLabel = (label: string) => {
    const option = options.find(optionItem => optionItem.label === label);
    return option ? option.value : '';
  };

  const [inputValue, setInputValue] = React.useState(
    getOptionLabelByValue(fieldValue || value),
  );
  
  const onDropdownToggle = (open: boolean) => {
    !open && updateFormTouched(name, true);
    onToggle && onToggle(open);
  };

  const changeInputValue = (value: string) => {
    setInputValue(value);
    const optionValue = getOptionValueByLabel(value);
    updateFormValue(name, optionValue);
    onChange && onChange(optionValue);
  }

  const onOptionClick = (option: IOption) => {
    dropdownRef.current?.close();
    changeInputValue(option.label);
  };

  const onInputChange = (e: React.BaseSyntheticEvent) => {
    changeInputValue(e.target.value);
  }
  
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase()
    ));
  

  React.useEffect(() => {
    updateFormValue(name, getOptionValueByLabel(inputValue), true);
    return () => {
      updateFormValue(name, '', true);
    };
  }, []);
  
  return {
    inputValue,
    dropdownRef,
    error: fieldError || error,
    options: filteredOptions,
    onInputChange,
    onOptionClick,
    onDropdownToggle,
  }
}
