import React from 'react';
import useStyles from './styles';
import Dropdown, { IDropdownBase } from '../Dropdown';
import MenuItem from '../MenuItem';
import CheckBox from '../CheckBox';
import { useMultiselect } from './hooks';

export interface IOption {
  value: string,
  label: string
}
export interface IMultiselect extends Omit<IDropdownBase, 'onChange'> {
  options: IOption[],
  name?: string,
  value?: string[],
  onChange?: (values: IOption[]) => void;
}

const Multiselect: React.FC<IMultiselect> = (props) => {
  const { options, label, color, placeholder, fullWidth, onChange, onToggle, ...rest } = props;
  const { value, selectedOptions, error, onCheckboxChange, onDropdownToggle } = useMultiselect(props);
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
      fullWidth={fullWidth}
    >
      {options.map((option) => (
        <MenuItem key={option.label}>
          <CheckBox
            className={classes.checkbox}
            name={option.label}
            controlled={true}
            color={color}
            size="small"
            checked={selectedOptions.map(option => option).indexOf(option.label) >= 0}
            onChange={onCheckboxChange}
          >
            {option.label}
          </CheckBox>
        </MenuItem>
      ))}
    </Dropdown>
  );
}

export default Multiselect;
