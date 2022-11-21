import { ICombobox, IOption } from './index';
import { useFormContext } from '../Form';
import React, { useEffect, useRef, useState } from 'react';
import { IDropdownRef } from '../Dropdown';

interface IActiveIndex {
  type: 'mouse' | 'keyboard';
  index: number;
}

export const useCombobox = (props: ICombobox) => {
  const { name = 'combobox', options, value = null, error, onChange, onToggle } = props;
  const { fieldError, fieldValue, updateFormTouched, updateFormValue } = useFormContext(name);
  const dropdownRef = React.useRef<IDropdownRef>(null);

  const getOptionByValue = (optionValue: string | number) => {
    const option = options.find(optionItem => optionItem.value === optionValue);
    return option ? option : null;
  };

  const [selectedOption, setSelectedOption] = useState<IOption | null>(getOptionByValue(fieldValue || value));
  const [isOpen, setIsOpen] = useState(false);
  const activeRef: React.Ref<HTMLDivElement> = useRef(null);
  const [inputValue, setInputValue] = React.useState(
    selectedOption?.label || '',
  );

  const filteredOptions = selectedOption?.label === inputValue ? options : options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase()
    ));

  const getActiveIndexBySelectedOption = () => {
    const filteredOptionsLabels = filteredOptions.map((option) => option.label);
    return selectedOption ? filteredOptionsLabels.indexOf(selectedOption.label) : 0;
  }

  const [activeIndex, setActiveIndex] = useState<IActiveIndex>({ type: 'mouse', index: getActiveIndexBySelectedOption() });

  const clearSelectedOption = (skipText?: boolean) => {
    !skipText && setInputValue('');
    setSelectedOption(null);
    setActiveIndex({ type: 'mouse', index: 0 });
    updateFormValue(name, null);
    onChange && onChange(null);
  }

  const handleOutsideClick = () => {
    if (selectedOption) {
      setActiveIndex({ type: 'mouse', index: getActiveIndexBySelectedOption() });
      setInputValue(selectedOption.label);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      e.key === 'Enter' && dropdownRef.current?.open();
    } else {
      switch (e.key) {
        case 'Enter':
          return onSelectOption(filteredOptions[activeIndex.index]);
        case 'ArrowDown':
          return setActiveIndex((currentIndex) => {
            const nextIndex = currentIndex.index + 1;
            if (nextIndex > filteredOptions.length - 1) return { type: 'keyboard', index: 0 };
            return { type: 'keyboard', index: nextIndex };
          });
        case 'ArrowUp':
          return setActiveIndex((currentIndex) => {
            const nextIndex = currentIndex.index - 1;
            if (nextIndex < 0) return { type: 'keyboard', index: filteredOptions.length - 1 };
            return { type: 'keyboard', index: nextIndex };
          })
        case 'Escape':
          return dropdownRef.current?.close();
        case 'Tab':
          return dropdownRef.current?.close();
      }
    }
  }

  const onDropdownToggle = (open: boolean) => {
    !open && updateFormTouched(name, true);
    setIsOpen(open);
    onToggle && onToggle(open);
    open && setTimeout(() => activeRef?.current?.scrollIntoView(false));
  };

  const onSelectOption = (option: IOption) => {
    setInputValue(option.label);
    setSelectedOption(option);
    updateFormValue(name, option.value);
    onChange && onChange(option.value);
    dropdownRef.current?.close();
  };

  const onInputChange = (e: React.BaseSyntheticEvent) => {
    const text = e.target.value;
    if (text === '') {
      clearSelectedOption(true);
    }
    setInputValue(text);
  }

  useEffect(() => {
    updateFormValue(name, selectedOption?.value, true);
    return () => {
      updateFormValue(name, '', true);
    };
  }, []);

  useEffect(() => {
    if (activeIndex.type === 'keyboard') {
      activeRef?.current?.scrollIntoView(false);
    }
  }, [activeIndex]);

  return {
    inputValue,
    dropdownRef,
    filteredOptions,
    error: fieldError || error,
    onInputChange,
    onSelectOption,
    onDropdownToggle,
    activeIndex,
    handleKeyDown,
    setActiveIndex,
    activeRef,
    clearSelectedOption,
    handleOutsideClick,
    isOpen,
  }
}
