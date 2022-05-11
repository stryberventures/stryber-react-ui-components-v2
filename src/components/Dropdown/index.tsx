import React, { useState } from 'react';
import useStyles from './styles';
import { Input } from '../Input';
import classNames from 'classnames';
import ArrowDownIcon from '../Icons/ArrowDownIcon';

export interface IDropdown extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  label: string,
  placeholder?: string,
  value?: string,
  className?: string,
  disabled?: boolean,
  color?: 'primary' | 'secondary',
  error?: string,
  hint?: string,
  onToggle?: (open: boolean) => void,
}

export const Dropdown = (props: IDropdown) => {
  const {
    children, label, placeholder, value, className, color,
    hint, error, disabled, onClick, onToggle, ...rest
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
        label={label}
        placeholder={placeholder}
        color={color}
        value={value}
        onClick={onInputClick}
        disabled={disabled}
        controlled={!!value}
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
        <div className={classes.content}>
          {children}
        </div>
      )}
    </div>
  );
}
