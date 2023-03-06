import React from 'react';
import useStyles from './styles';
import { useCombobox } from './hooks';
import Dropdown, { IDropdown } from '../Dropdown';
import MenuItem from '../MenuItem';
import ClearIcon from './ClearIcon';

export interface IOption {
  value: string | number,
  label: string,
}

export interface ICombobox extends Omit<IDropdown, 'onChange' | 'children' | 'value'> {
  options: IOption[],
  value?: IOption['value'],
  onChange?: (option: IOption['value'] | null) => void,
  noOptionsFoundText?: string,
}

const Combobox: React.FC<ICombobox> = (props) => {
  const {
    className,
    placeholder,
    label,
    noOptionsFoundText = 'No options found',
    onChange,
    options,
    fullWidth,
    ...rest
  } = props;
  const {
    inputValue, dropdownRef, onInputChange, onSelectOption, onDropdownToggle, filteredOptions, activeIndex, handleKeyDown, setActiveIndex, activeRef,
    clearSelectedOption, isOpen, handleOutsideClick,
  } = useCombobox(props);
  const classes = useStyles();

  return (
    <Dropdown
      {...rest}
      label={label}
      inputReadOnly={false}
      onInputChange={onInputChange}
      value={inputValue}
      ref={dropdownRef}
      className={className}
      contentClassName={classes.content}
      placeholder={placeholder}
      onToggle={onDropdownToggle}
      fullWidth={fullWidth}
      onKeyDown={handleKeyDown}
      rightIcon={inputValue && isOpen && <ClearIcon onClick={() => clearSelectedOption()} className={classes.clearIcon} />}
      onOutsideClick={handleOutsideClick}
    >
      {!filteredOptions.length && (
        <MenuItem readOnly>
          {noOptionsFoundText}
        </MenuItem>
      )}
      {filteredOptions.map((option, index) => (
        <MenuItem
          id={String(index)}
          key={option.value}
          onClick={() => onSelectOption(option)}
          selected={index === activeIndex.index}
          onMouseEnter={() => setActiveIndex({ type: 'mouse', index })}
          ref={index === activeIndex.index ? activeRef : undefined}
        >
          {option.label}
        </MenuItem>
      ))}
    </Dropdown>
  );
}

export default Combobox;
