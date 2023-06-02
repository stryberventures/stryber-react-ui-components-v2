import { IMultiselect } from './index';
import React, { useState } from 'react';
import { useFormContext } from '../Form';

export const useMultiselect = (props: IMultiselect) => {
  const { name = '', error, onChange, options, value, separator = ', ', } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } = useFormContext(name);

  const getOptionLabelByValue = (value: string[]) => {
    const newOptions = options.filter(option => value?.find(val => val === option.value))
    return newOptions.map(option => option.label);
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>(getOptionLabelByValue(fieldValue || value || []));

  const onCheckboxChange = (e: React.BaseSyntheticEvent) => {
    const { name: checkboxName, checked } = e.target;
    const option = options.filter(optionItem => optionItem.label === checkboxName);
    let updatedOptions = [...selectedOptions];
    if (checked) {
      updatedOptions.push(checkboxName);
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== checkboxName)
    }
    updateFormValue(name, updatedOptions);
    setSelectedOptions(updatedOptions);
    onChange && onChange(option);
  }

  const onDropdownToggle = (open: boolean) => {
    !open && updateFormTouched(name, true);
  };

  React.useEffect(() => {
    updateFormValue(name, selectedOptions, true);
    return () => {
      updateFormValue(name, [], true);
    };
  }, []);
  return {
    selectedOptions,
    value: selectedOptions.join(separator),
    error: fieldError || error,
    onCheckboxChange,
    onDropdownToggle,
  }
}
