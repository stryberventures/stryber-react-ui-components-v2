import React from 'react';
import useStyles from './styles';
import Dropdown, { IDropdownBase } from '../Dropdown';
import MenuItem from '../MenuItem';
import { useSelect } from './hooks';

export interface ISelect extends Omit<IDropdownBase, 'onChange'> {
  options: string[],
  name?: string,
  value?: string,
  onChange?: (value: string) => void,
}

const Select: React.FC<ISelect> = (props) => {
  const { options, label, color, placeholder, onChange, onToggle, ...rest } = props;
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
    >
      {options.map((option) => (
        <MenuItem
          key={option}
          selected={value === option}
          onClick={() => onOptionClick(option)}
        >
          {option}
        </MenuItem>
      ))}
    </Dropdown>
  );
}

export default Select;
