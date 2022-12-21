import React, { useRef } from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import useTextClasses from '../Text/styles';
import { ErrorMessage } from '../ErrorMessage';
import { HintMessage } from '../HintMessage';
import Text from '../Text';
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
  highlighted?: boolean,
}

const Input: React.FC<IInput> = (props) => {
  const classes = useStyles(props);
  const textClasses = useTextClasses(props);
  const {
    label, className, hint, prefix, prefixClassName, errorClassName, hintClassName,
    endAdornment, placeholder, onClick, fullWidth, highlighted, ...rest
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
    <div className={classNames(classes.inputRoot, {
      [classes.fullWidth]: fullWidth
    }, className)}>
      <div
        onClick={onClick}
        className={classNames(classes.inputContainer, {
          [classes.disabled]: disabled,
          [classes.inputContainerError]: !!errorMessage,
          [classes.withLabel]: label,
          [classes.highlighted]: highlighted,
        })}
      >
        <div className={classes.inputArea}>
          {label && (
            <Text
              variant="components2"
              weight="regular"
              onClick={() => {inputRef.current?.focus()}}
              className={classNames(
                classes.label,
                { [classes.textDisabled]: disabled }
              )}
            >
              {label}
            </Text>
          )}
          <div className={classes.inputWrapper}>
            {prefix && <div className={classNames(classes.prefix, prefixClassName)}>{prefix}</div>}
            <input
              {...inputProps}
              name={name}
              ref={inputRef}
              value={value}
              className={classNames(
                classes.input,
                textClasses.components2,
                textClasses.regular,
                {
                  [classes.disabled]: disabled,
                  [classes.textDisabled]: disabled,
                }
                )}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
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
