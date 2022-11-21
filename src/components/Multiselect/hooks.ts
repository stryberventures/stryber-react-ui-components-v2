import { IMultiselect, IOption } from './index';
import React, { useState } from 'react';
import { useFormContext } from '../Form';
import { IDropdownRef } from '../Dropdown';

interface IActiveIndex {
  type: 'mouse' | 'keyboard';
  index: number;
}

export const useMultiselect = (props: IMultiselect) => {
  const { name = '', error, onChange, onToggle, options, value } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } = useFormContext(name);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<IDropdownRef>(null);

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
    setIsOpen(open);
    onToggle && onToggle(open);
  };

  const getActiveIndexBySelectedOption = () => {
    const optionsLabels = options.map((option) => option.label);
    return selectedOptions[0] ? optionsLabels.indexOf(selectedOptions[0]) : 0;
  }

  const [activeIndex, setActiveIndex] = useState<IActiveIndex>({ type: 'mouse', index: getActiveIndexBySelectedOption() });

  const onOptionClick = (option: IOption) => {
    let updatedOptions = [...selectedOptions];
    const label = option.label
    const checked = updatedOptions.find(option => option == label);
    if (!checked) {
      updatedOptions.push(label);
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== label)
    }
    updateFormValue(name, updatedOptions);
    setSelectedOptions(updatedOptions);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      e.key === 'Enter' && dropdownRef.current?.open();
    } else {
      switch (e.key) {
        case 'Enter':
          return onOptionClick(options[activeIndex.index]);
        case 'ArrowDown':
          return setActiveIndex((currentIndex) => {
            const nextIndex = currentIndex.index + 1;
            if (nextIndex > options.length - 1) return { type: 'keyboard', index: 0 };
            return { type: 'keyboard', index: nextIndex };
          });
        case 'ArrowUp':
          return setActiveIndex((currentIndex) => {
            const nextIndex = currentIndex.index - 1;
            if (nextIndex < 0) return { type: 'keyboard', index: options.length - 1 };
            return { type: 'keyboard', index: nextIndex };
          })
        case 'Escape':
          return dropdownRef.current?.close();
        case 'Tab':
          return dropdownRef.current?.close();
      }
    }
  }

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
    handleKeyDown,
    activeIndex,
    setActiveIndex,
    dropdownRef
  }
}
