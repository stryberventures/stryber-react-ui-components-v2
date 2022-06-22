import React from 'react';
import useStyles from './styles';
import { ErrorMessage } from '../ErrorMessage';
import { HintMessage } from '../HintMessage';
import classNames from 'classnames';
import { useInput } from './hooks';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string,
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
  endAdornment?: React.ReactNode,
  mask?: string,
}

export const Input = (props: IInput) => {
  const classes = useStyles(props);
  const {
    name,
    value,
    label,
    placeholder,
    disabled,
    className,
    onClick,
    endAdornment,
    errorMessage,
    hint,
    inputProps,
    onChange,
    onBlur
  } = useInput(props);

  return (
    <div className={classNames(classes.root, className)}>
      <div
        onClick={onClick}
        className={classNames(classes.inputContainer, {
          [classes.disabled]: disabled,
          [classes.inputContainerError]: !!errorMessage,
        })}
      >
        <div className={classes.inputArea}>
          <div className={classNames(classes.label, { [classes.textDisabled]: disabled })}>
            {label}
          </div>
          <input
            {...inputProps}
            name={name}
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
      {errorMessage && <ErrorMessage text={errorMessage} className={classes.message}/>}
      {hint && <HintMessage text={hint} disabled={disabled} className={classes.message}/>}
    </div>
  );
};

Input.defaultProps = {
  color: 'primary',
}

export default {
  Input,
}
