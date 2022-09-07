import { IMultiselect, IOption } from './index';
import React, { useState } from 'react';
import { useFormContext } from '../Form';

export const useMultiselect = (props: IMultiselect) => {
  const { name = '', error, onChange } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } = useFormContext(name);
  const [selectedOptions, setSelectedOptions] = useState<IOption[]>(fieldValue || []);

  const onCheckboxChange = (e: React.BaseSyntheticEvent) => {
    const { name: checkboxName, checked } = e.target;
    let updatedOptions = [...selectedOptions];
    if (checked) {
      updatedOptions.push({ name: checkboxName });
    } else {
      updatedOptions = updatedOptions.filter((option) => {
        return option.name !== checkboxName })
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
    value: selectedOptions.map((option) => option.name).join(', '),
    error: fieldError || error,
    onCheckboxChange,
    onDropdownToggle,
  }
}
