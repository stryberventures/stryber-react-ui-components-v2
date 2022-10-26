import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import useStyles from './styles';
import Input from '../Input';
import classNames from 'classnames';
import { ArrowDownIcon } from '../Icons';
import { useDropdown } from './hooks';

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
  fullWidth?: boolean,
}

export interface IDropdown extends IDropdownBase {
  children: React.ReactNode,
  value?: string,
  contentClassName?: string,
  inputReadOnly?: boolean,
  onInputChange?: (e: React.BaseSyntheticEvent) => void,
  endAdornment?: ReactNode;
  onOutsideClick?: () => void;
}

export interface IDropdownRef {
  open: () => void,
  close: () => void,
}

const Dropdown = forwardRef((props: IDropdown, ref: ForwardedRef<IDropdownRef>) => {
  const {
    inputReadOnly = true, children, label, placeholder, value, className, color, name, fullWidth,
    hint, error, disabled, onClick, onToggle, contentClassName, onInputChange, endAdornment, onOutsideClick, ...rest
  } = props;
  const classes = useStyles();
  const { open, onInputClick, onOverlayClick } = useDropdown(props, ref);

  return (
    <div
      {...rest}
      className={classNames(classes.dropdown, className, { [classes.fullWidth]: fullWidth })}
    >
      {open && <div className={classes.overlay} onClick={onOverlayClick}/>}
      <Input
        readOnly={inputReadOnly}
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
        onChange={onInputChange}
        highlighted={open}
        className={classNames(classes.input, { [classes.inputDisabled]: disabled })}
        endAdornment={(
          <>
            {endAdornment}
            <div className={classNames(classes.toggleIcon, {
              [classes.toggleIconDisabled]: disabled,
              [classes.toggleIconOpened]: open,
            })}>
              <ArrowDownIcon />
            </div>
          </>
        )}
      />
      {open && (
        <div
          className={classNames(classes.content, contentClassName)}
        >
          {children}
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;
