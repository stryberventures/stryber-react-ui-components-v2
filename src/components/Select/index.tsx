import React from 'react';
import useStyles from './styles';
import Dropdown, { IDropdownBase } from '../Dropdown';
import MenuItem from '../MenuItem';
import { useSelect } from './hooks';

export interface IOption {
  value: string | number,
  label: string
}

export interface ISelect extends Omit<IDropdownBase, 'onChange'> {
  options: IOption[],
  name?: string,
  value?: string | number,
  onChange?: (option: IOption) => void,
  inputVariant?: 'labelOutside' | 'floatingLabel',
}

const Select: React.FC<ISelect> = (props) => {
  const { options, label, color, placeholder, fullWidth, onChange, onToggle, ...rest } = props;
  const { value, error, onDropdownToggle, onOptionClick, dropdownRef } = useSelect(props);
  const classes = useStyles();

  return (
    <Dropdown
      {...rest}
      label={label}
      placeholder={placeholder}
      onToggle={onDropdownToggle}
      value={value}
      color={color}
      contentClassName={classes.content}
      error={error}
      ref={dropdownRef}
      fullWidth={fullWidth}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          selected={value === option.label}
          onClick={() => onOptionClick(option)}
        >
          {option.label}
        </MenuItem>
      ))}
    </Dropdown>
  );
}

export default Select;
