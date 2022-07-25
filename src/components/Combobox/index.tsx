import React from 'react';
import useStyles from './styles';
import { useCombobox } from './hooks';
import Dropdown, { IDropdown } from '../Dropdown';
import MenuItem from '../MenuItem';

export interface IOption {
  value: string | number,
  label: string,
}

export interface ICombobox extends Omit<IDropdown, 'onChange' | 'children'> {
  options: IOption[],
  onChange?: (value: IOption['value']) => void,
  noOptionsFoundText?: string,
}

const Combobox: React.FC<ICombobox> = (props) => {
  const {
    className,
    placeholder,
    label,
    noOptionsFoundText = 'No options found',
    onChange,
    ...rest
  } = props;
  const {
    inputValue, dropdownRef, onInputChange, onOptionClick, onDropdownToggle, options,
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
    >
      {!options.length && (
        <MenuItem readOnly>
          {noOptionsFoundText}
        </MenuItem>
      )}
      {options.map((option) => (
        <MenuItem
          key={option.value}
          onClick={() => onOptionClick(option)}
        >
          {option.label}
        </MenuItem>
      ))}
    </Dropdown>
  );
}

export default Combobox;
