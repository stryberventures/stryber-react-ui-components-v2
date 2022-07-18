import React from 'react';
import useStyles from './styles';
import Dropdown, { IDropdownBase } from '../Dropdown';
import MenuItem from '../MenuItem';
import CheckBox from '../CheckBox';
import { useMultiselect } from './hooks';

export interface IMultiselect extends Omit<IDropdownBase, 'onChange'> {
  options: string[],
  name?: string,
  onChange?: (values: string[]) => void;
}

const Multiselect: React.FC<IMultiselect> = (props) => {
  const { options, label, color, placeholder, onChange, onToggle, ...rest } = props;
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
    >
      {options.map((option) => (
        <MenuItem key={option}>
          <CheckBox
            className={classes.checkbox}
            label={option}
            name={option}
            controlled={true}
            color={color}
            checked={selectedOptions.indexOf(option) >= 0}
            onChange={onCheckboxChange}
          />
        </MenuItem>
      ))}
    </Dropdown>
  );
}

export default Multiselect;
