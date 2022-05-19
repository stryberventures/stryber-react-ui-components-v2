import React, { useState } from 'react';
import useStyles from './styles';
import { Input } from '../Input';
import classNames from 'classnames';
import ArrowDownIcon from '../Icons/ArrowDownIcon';

export interface IDropdownBase extends React.HTMLAttributes<HTMLDivElement>{
  label: string,
  placeholder?: string,
  className?: string,
  disabled?: boolean,
  error?: string,
  hint?: string,
  onToggle?: (open: boolean) => void,
  color?: 'primary' | 'secondary',
  name?: string,
}

export interface IDropdown extends IDropdownBase {
  children: React.ReactNode,
  value?: string,
  contentClassName?: string,
}

export const Dropdown = (props: IDropdown) => {
  const {
    children, label, placeholder, value, className, color, name,
    hint, error, disabled, onClick, onToggle, contentClassName, ...rest
  } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onInputClick = () => {
    if (disabled) {
      return;
    }
    setOpen(!open);
    onToggle && onToggle(!open);
  };

  const onOverlayClick = () => {
    setOpen(false);
    onToggle && onToggle(false);
  }

  return (
    <div
      {...rest}
      className={classNames(classes.dropdown, className)}
    >
      {open && <div className={classes.overlay} onClick={onOverlayClick}/>}
      <Input
        readOnly
        name={name}
        label={label}
        placeholder={placeholder}
        color={color}
        value={value}
        onClick={onInputClick}
        disabled={disabled}
        controlled={true}
        hint={hint}
        errorMessage={error}
        className={classNames(classes.input, { [classes.inputDisabled]: disabled })}
        endAdornment={(
          <div className={classNames(classes.toggleIcon, {
            [classes.toggleIconDisabled]: disabled,
            [classes.toggleIconOpened]: open,
          })}>
            <ArrowDownIcon />
          </div>
        )}
      />
      {open && (
        <div className={classNames(classes.content, contentClassName)}>
          {children}
        </div>
      )}
    </div>
  );
}
