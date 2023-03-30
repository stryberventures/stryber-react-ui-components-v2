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
  postfix?: string,
  prefixClassName?: string,
  postfixClassName?: string,
  errorClassName?: string,
  hintClassName?: string,
  leftIcon?: React.ReactNode | JSX.Element,
  rightIcon?: React.ReactNode | JSX.Element,
  mask?: string,
  fullWidth?: boolean,
  variant?: 'labelOutside' | 'floatingLabel',
  clearButton?: boolean,
}

const Input: React.FC<IInput> = (props) => {
  const classes = useStyles()(props);
  const textClasses = useTextClasses();
  const { theme } = useTheme();
  const {
    label, className, hint, prefix, prefixClassName, postfix, postfixClassName, errorClassName, hintClassName,
    leftIcon, rightIcon, placeholder, clearButton = false, fullWidth, ...rest
  } = props;
  const {
    name,
    value,
    disabled,
    errorMessage,
    inputProps,
    floatingLabel,
    inputInUse,
    inputRef,
    inFocus,
    onResetButtonPointerDown,
    onInputContainerClick,
    onChange,
    onBlur,
    onFocus,
  } = useInput(rest);

  const renderLabel = () => {
    if (!label) {
      return null;
    }
    const variant = floatingLabel && inputInUse
      ? 'caption1'
      : floatingLabel
        ? 'components1'
        : 'components2';

    return (
      <Text
        variant={variant}
        weight="regular"
        onClick={() => {inputRef.current?.focus()}}
        className={classNames(
          classes.label,
          { [classes.floatingLabel]: floatingLabel },
          { [classes.textDisabled]: disabled }
        )}
      >
        {label}
      </Text>
    );
  };
  const renderCore = () => (
    <>
      { !floatingLabel && renderLabel() }
      <div
        onClick={onInputContainerClick}
        className={classNames(classes.inputContainer, {
          [classes.disabled]: disabled,
          [classes.inputContainerError]: !!errorMessage,
          [classes.withLabel]: label,
          [classes.fullWidth]: fullWidth,
        })}
      >
        {leftIcon}
        <div className={classes.inputArea}>
          { floatingLabel && renderLabel() }
          <div
            className={classNames(
              classes.inputWrapper,
              { [classes.floatingLabelInputWrapper]: floatingLabel },
              { [classes.floatingLabelInputWrapperInUse]: floatingLabel && inputInUse },
            )}
          >
            {!!prefix && (
              <Text
                variant="components1"
                className={classNames(classes.prefix, prefixClassName)}
              >
                {prefix}
              </Text>
            )}
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
              onBlur={onBlur}
              onFocus={onFocus}
            />
          </div>
        </div>
        { (clearButton && inFocus && !!value && !props.readOnly) && (
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
        {!!postfix && <Text variant="components1" className={classNames(classes.postfix, postfixClassName)}>{postfix}</Text>}
        {rightIcon}
      </div>
    </>
  );

  return (
    <div className={classNames(classes.inputRoot, {
      [classes.fullWidth]: fullWidth,
    }, className)}>
      {renderCore()}
      {errorMessage && (
        <ErrorMessage
          text={errorMessage}
          className={classNames(classes.message, errorClassName, { [classes.withMarginLeft]: floatingLabel })}
        />
      )}
      {!errorMessage && hint && (
        <HintMessage
          text={hint}
          disabled={disabled}
          className={classNames(classes.message, hintClassName, { [classes.withMarginLeft]: floatingLabel })}
        />
      )}
    </div>
  );
};

Input.defaultProps = {
  color: 'primary',
}

export default Input;
