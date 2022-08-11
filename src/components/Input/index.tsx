import React, { useRef } from 'react';
import useStyles from './styles';
import { ErrorMessage } from '../ErrorMessage';
import { HintMessage } from '../HintMessage';
import classNames from 'classnames';
import { useInput } from './hooks';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string,
  placeholder?: string,
  disabled?: boolean,
  color?: 'primary' | 'secondary',
  hint?: string,
  errorMessage?: string,
  value?: string,
  name?: string,
  controlled?: boolean,
  onChange?: (e: React.BaseSyntheticEvent) => void,
  onBlur?: (e: React.BaseSyntheticEvent) => void,
  prefix?: string,
  prefixClassName?: string,
  errorClassName?: string,
  hintClassName?: string,
  endAdornment?: React.ReactNode,
  mask?: string,
  fullWidth?: boolean,
}

const Input: React.FC<IInput> = (props) => {
  const classes = useStyles(props);
  const {
    label, className, hint, prefix, prefixClassName, errorClassName, hintClassName,
    endAdornment, placeholder, onClick, fullWidth, ...rest
  } = props;
  const {
    name,
    value,
    disabled,
    errorMessage,
    inputProps,
    onChange,
    onBlur
  } = useInput(rest);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={classNames(classes.root, {
      [classes.fullWidth]: fullWidth
    }, className)}>
      <div
        onClick={onClick}
        className={classNames(classes.inputContainer, {
          [classes.disabled]: disabled,
          [classes.inputContainerError]: !!errorMessage,
          [classes.withLabel]: label,
        })}
      >
        <div className={classes.inputArea}>
          {label && (
            <div
              onClick={() => {inputRef.current?.focus()}}
              className={classNames(classes.label, { [classes.textDisabled]: disabled })}
            >
              {label}
            </div>
          )}
          {prefix && <div className={classNames(classes.prefix, prefixClassName)}>{prefix}</div>}
          <input
            {...inputProps}
            name={name}
            ref={inputRef}
            value={value}
            className={classNames(classes.input, {
              [classes.disabled]: disabled,
              [classes.textDisabled]: disabled
            })}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
        {endAdornment}
      </div>
      {errorMessage && <ErrorMessage text={errorMessage} className={classNames(classes.message, errorClassName)}/>}
      {hint && <HintMessage text={hint} disabled={disabled} className={classNames(classes.message, hintClassName)}/>}
    </div>
  );
};

Input.defaultProps = {
  color: 'primary',
}

export default Input;
