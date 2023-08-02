import { IMultiselect } from './index';
import React, { useState } from 'react';
import { useFormContext } from '../Form';

export const useMultiselect = (props: IMultiselect) => {
  const { name = '', error, onChange, options, value, inputFocused } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } =
    useFormContext(name);

  const getOptionLabelByValue = (value: string[]) => {
    const newOptions = options.filter((option) =>
      value?.find((val) => val === option.value)
    );
    return newOptions.map((option) => option.label);
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    getOptionLabelByValue(fieldValue || value || [])
  );

  const onCheckboxChange = (e: React.BaseSyntheticEvent) => {
    const { name: checkboxName, checked } = e.target;
    const option = options.filter(
      (optionItem) => optionItem.label === checkboxName
    );
    let updatedOptions = [...selectedOptions];
    if (checked) {
      updatedOptions.push(checkboxName);
    } else {
      updatedOptions = updatedOptions.filter(
        (option) => option !== checkboxName
      );
    }
    updateFormValue(name, updatedOptions);
    setSelectedOptions(updatedOptions);
    onChange && onChange(option);
  };

  const [opened, setOpened] = useState<boolean>(!!inputFocused);
  const onDropdownToggle = (open: boolean) => {
    setOpened(open);
    !open && updateFormTouched(name, true);
  };

  const handleRemoveOption = (option: string) => {
    const updatedOptions = selectedOptions.filter(
      (optionItem) => optionItem !== option
    );
    updateFormValue(name, updatedOptions);
    setSelectedOptions(updatedOptions);
  };

  const [searchValue, setSearchValue] = React.useState('');
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchChange = (e: React.BaseSyntheticEvent) => {
    setSearchValue(e.target.value);
  };

  React.useEffect(() => {
    updateFormValue(name, selectedOptions, true);
    return () => {
      updateFormValue(name, [], true);
    };
  }, []);
  return {
    selectedOptions,
    error: fieldError || error,
    onCheckboxChange,
    onDropdownToggle,
    handleRemoveOption,
    handleSearchChange,
    filteredOptions,
    searchValue,
    opened,
  };
};
