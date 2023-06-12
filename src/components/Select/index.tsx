import React from 'react';
import useStyles from './styles';
import Dropdown, { IDropdownBase } from '../Dropdown';
import { MenuItem, MenuItemText } from '../Menu';
import { useDir } from '../Theme';
import { useSelect } from './hooks';

export interface IOption {
  value: string | number;
  label: string;
}

export interface ISelect extends Omit<IDropdownBase, 'onChange'> {
  options: IOption[];
  name?: string;
  value?: string | number;
  onChange?: (option: IOption) => void;
  inputVariant?: 'labelOutside' | 'floatingLabel';
}

const Select: React.FC<ISelect> = (props) => {
  const {
    options,
    label,
    color,
    placeholder,
    fullWidth,
    dir = useDir(props.dir),
    onChange,
    onToggle,
    ...rest
  } = props;
  const { value, error, onDropdownToggle, onOptionClick, dropdownRef } =
    useSelect(props);
  const classes = useStyles();

  return (
    <Dropdown
      {...rest}
      dir={dir}
      label={label}
      placeholder={placeholder}
      onToggle={onDropdownToggle}
      value={value}
      color={color}
      contentClassName={classes.content}
      error={error}
      ref={dropdownRef}
      fullWidth={fullWidth}
      inputVariant="floatingLabel"
      inputFocused={!!value}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          selected={value === option.label}
          dir={dir}
          size="large"
          onClick={() => onOptionClick(option)}
        >
          <MenuItemText primary={option.label} />
        </MenuItem>
      ))}
    </Dropdown>
  );
};

export default Select;
