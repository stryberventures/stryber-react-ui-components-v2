import React from 'react';
import useStyles from './styles';
import { Dropdown, IDropdownBase } from '../Dropdown';
import { MenuItem } from '../MenuItem';
import { useSelect } from './hooks';
import classNames from 'classnames';

export interface ISelect extends Omit<IDropdownBase, 'onChange'> {
  options: string[],
  name?: string,
  value?: string,
  onChange?: (value: string) => void,
}

export const Select = (props: ISelect) => {
  const { options, label, color, placeholder, onChange, onToggle, ...rest } = props;
  const { value, error, onDropdownToggle, onOptionClick } = useSelect(props);
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
    >
      {options.map((option) => (
        <MenuItem
          key={option}
          className={classNames(classes.item, {
            [classes.selected]: value === option,
          })}
          onClick={() => onOptionClick(option)}
        >
          {option}
        </MenuItem>
      ))}
    </Dropdown>
  );
}
