import { IOption, ISelect } from './index';
import React, { useState } from 'react';
import { useFormContext } from '../Form';
import { IDropdownRef } from '../Dropdown';

interface IActiveIndex {
  type: 'mouse' | 'keyboard';
  index: number;
}

export const useSelect = (props: ISelect) => {
  const { name = '', error, onChange, onToggle, value, options } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } = useFormContext(name);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<IDropdownRef>(null);

  const getOptionLabelByValue = (value: string | number) => {
    const option = options.find(optionItem => optionItem.value === value);
    return option ? option.label : '';
  };
  const [selectedValue, setSelectedValue] = useState<string>(getOptionLabelByValue(fieldValue || value));

  const onDropdownToggle = (open: boolean) => {
    !open && updateFormTouched(name, true);
    setIsOpen(open);
    onToggle && onToggle(open);
  };

  const onOptionClick = (option: IOption) => {
    updateFormValue(name, option.value);
    setSelectedValue(option.label);
    onChange && onChange(option);
    dropdownRef?.current?.close();
  }

  const getActiveIndexBySelectedOption = () => {
    const optionsLabels = options.map((option) => option.label);
    return selectedValue ? optionsLabels.indexOf(selectedValue) : 0;
  }

  const [activeIndex, setActiveIndex] = useState<IActiveIndex>({ type: 'mouse', index: getActiveIndexBySelectedOption() });

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
    activeIndex,
    setActiveIndex,
    handleKeyDown
  }
}
