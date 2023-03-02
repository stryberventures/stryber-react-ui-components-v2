import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import useTextClasses from '../Text/styles';
import { ErrorMessage } from '../ErrorMessage';
import { HintMessage } from '../HintMessage';
import { CloseCircleIcon } from '../Icons';
import Text from '../Text';
import { useTheme } from '../Theme';
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
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  mask?: string,
  fullWidth?: boolean,
  highlighted?: boolean,
  variant?: 'default' | 'mobile',
  clearButton?: boolean,
}

const Input: React.FC<IInput> = (props) => {
  const classes = useStyles(props);
  const textClasses = useTextClasses(props);
  const { theme } = useTheme();
  const {
    label, className, hint, prefix, prefixClassName, errorClassName, hintClassName,
    leftIcon, rightIcon, placeholder, fullWidth, highlighted, clearButton = false, ...rest
  } = props;
  const {
    name,
    value,
    disabled,
    errorMessage,
    inputProps,
    mobile,
    inputInUse,
    inputRef,
    inFocus,
    onResetButtonPointerDown,
    onInputContainerClick,
    onChange,
    onInputBlur,
    onInputFocus,
  } = useInput(rest);

  const renderLabel = () => {
    if (!label) {
      return null;
    }
    const variant = mobile && inputInUse
      ? 'caption1'
      : mobile
        ? 'components1'
        : 'components2';

    return (
      <Text
        variant={variant}
        weight="regular"
        onClick={() => {inputRef.current?.focus()}}
        className={classNames(
          classes.label,
          { [classes.labelMobile]: mobile },
          { [classes.textDisabled]: disabled }
        )}
      >
        {label}
      </Text>
    );
  };
  const renderCore = () => (
    <>
      { !mobile && renderLabel() }
      <div
        onClick={onInputContainerClick}
        className={classNames(classes.inputContainer, {
          [classes.disabled]: disabled,
          [classes.inputContainerError]: !!errorMessage,
          [classes.withLabel]: label,
          [classes.highlighted]: highlighted,
        })}
      >
        {leftIcon}
        <div className={classes.inputArea}>
          { mobile && renderLabel() }
          <div
            className={classNames(
              classes.inputWrapper,
              { [classes.mobileInputWrapper]: mobile },
              { [classes.mobileInputWrapperInUse]: mobile && inputInUse },
            )}
          >
            {prefix && <div className={classNames(classes.prefix, prefixClassName)}>{prefix}</div>}
            <input
              {...inputProps}
              name={name}
              ref={inputRef}
              value={value}
              className={classNames(
                classes.input,
                textClasses.components1,
                textClasses.regular,
                {
                  [classes.textDisabled]: disabled,
                }
              )}
              placeholder={placeholder}
              disabled={disabled}
              onChange={onChange}
              onBlur={onInputBlur}
              onFocus={onInputFocus}
            />
          </div>
        </div>
        { (clearButton && inFocus && !!value) && (
          <div
            className={classes.clearButton}
            onPointerDown={onResetButtonPointerDown}
          >
            <CloseCircleIcon
              variant="filled"
              fill={theme.colors.text.tint}
            />
          </div>
        )}
        {rightIcon}
      </div>
    </>
  );

  return (
    <div className={classNames(classes.inputRoot, {
      [classes.fullWidth]: fullWidth
    }, className)}>
      {renderCore()}
      {errorMessage && <ErrorMessage text={errorMessage} className={classNames(classes.message, errorClassName)}/>}
      {!errorMessage && hint && <HintMessage text={hint} disabled={disabled} className={classNames(classes.message, hintClassName)}/>}
    </div>
  );
};

Input.defaultProps = {
  color: 'primary',
}

export default Input;
