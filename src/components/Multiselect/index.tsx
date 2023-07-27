import React from 'react';
import useStyles from './styles';
import Dropdown, { IDropdownBase } from '../Dropdown';
import { MenuItem, MenuSearch } from '../Menu';
import CheckBox from '../CheckBox';
import { useDir } from '../Theme';
import Tag from '../Tag';
import Text from '../Text';
import { useMultiselect } from './hooks';

export interface IOption {
  value: string | number;
  label: string;
  icon?: React.ReactElement;
}
export interface IMultiselect extends Omit<IDropdownBase, 'onChange'> {
  options: IOption[];
  name?: string;
  value?: (string | number)[];
  onChange?: (options: IOption[]) => void;
  withSearch?: boolean;
  searchPlaceholder?: string;
}

const Multiselect: React.FC<IMultiselect> = (props) => {
  const {
    options,
    label,
    color,
    placeholder,
    fullWidth,
    dir = useDir(props.dir),
    onChange,
    onToggle,
    withSearch = true,
    searchPlaceholder,
    inputFocused,
    inputVariant,
    value: _, // we don't want to pass value to Dropdown
    ...rest
  } = props;
  const {
    selectedOptions,
    error,
    onCheckboxChange,
    onDropdownToggle,
    handleRemoveOption,
    handleSearchChange,
    filteredOptions,
    searchValue,
  } = useMultiselect(props);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const classes = useStyles()(props);

  const renderTags = () => {
    if (!selectedOptions.length) return null;
    return (
      <div className={classes.tagWrapper}>
        {selectedOptions.map((option) => (
          <Tag
            shape="square"
            key={option}
            onRemove={() => handleRemoveOption(option)}
          >
            {option}
          </Tag>
        ))}
      </div>
    );
  };

  return (
    <Dropdown
      {...rest}
      dir={dir}
      label={label}
      placeholder={placeholder}
      onToggle={onDropdownToggle}
      color={color}
      contentClassName={classes.content}
      error={error}
      fullWidth={fullWidth}
      inputContent={renderTags()}
      inputVariant={inputVariant}
      inputFocused={!!selectedOptions.length || inputFocused}
      className={classes.dropdown}
    >
      {withSearch && (
        <MenuSearch
          value={searchValue}
          placeholder={searchPlaceholder}
          onChange={handleSearchChange}
        />
      )}
      {filteredOptions.map((option) => (
        <MenuItem
          key={option.value}
          dir={dir}
          className={classes.listItem}
          selected={
            !!selectedOptions.find((selected) => selected === option.label)
          }
        >
          <CheckBox
            className={classes.checkbox}
            name={option.label}
            controlled={true}
            color={color}
            checked={
              selectedOptions.map((option) => option).indexOf(option.label) >= 0
            }
            onChange={onCheckboxChange}
            label={
              <div className={classes.multiselectLabel}>
                {option.icon}
                <Text variant="components2" weight="regular">
                  {option.label}
                </Text>
              </div>
            }
            dir={dir}
          />
        </MenuItem>
      ))}
    </Dropdown>
  );
};

export default Multiselect;
