import { IMultiselect } from './index';
import React, { useState } from 'react';
import { useFormContext } from '../Form';

export const useMultiselect = (props: IMultiselect) => {
  const { name = '', error, onChange } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } = useFormContext(name);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(fieldValue || []);

  const onCheckboxChange = (e: React.BaseSyntheticEvent) => {
    const { name: checkboxName, checked } = e.target;
    let updatedOptions = [...selectedOptions];
    
    if (checked) {
      updatedOptions.push(checkboxName);
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== checkboxName);
    }
    updateFormValue(name, updatedOptions);
    setSelectedOptions(updatedOptions);
    onChange && onChange(updatedOptions);
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
    value: selectedOptions.join(', '),
    error: fieldError || error,
    onCheckboxChange,
    onDropdownToggle,
  }
}
