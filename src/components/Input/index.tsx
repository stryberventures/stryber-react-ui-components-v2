import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import useTextClasses from '../Text/styles';
import { ErrorMessage } from '../ErrorMessage';
import { HintMessage } from '../HintMessage';
import { CloseCircleIcon } from '../Icons';
import { useDir } from '../Theme';
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
  leftIcon?: React.ReactNode | JSX.Element | ((props: IInput) => React.ReactNode | JSX.Element),
  rightIcon?: React.ReactNode | JSX.Element | ((props: IInput) => React.ReactNode | JSX.Element),
  mask?: string,
  fullWidth?: boolean,
  variant?: 'labelOutside' | 'floatingLabel',
  floatingLabelFocused?: boolean,
  clearButton?: boolean,
  content?: React.ReactNode,
}

const Input: React.FC<IInput> = (props) => {
  const {
    label, className, hint, prefix, prefixClassName, postfix, postfixClassName, errorClassName, hintClassName,
    leftIcon: pLeftIcon, content, rightIcon: pRightIcon, placeholder, clearButton = false, fullWidth, dir = useDir(props.dir), floatingLabelFocused,
    ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });
  const leftIcon = typeof pLeftIcon === 'function'
    ? pLeftIcon({ ...props, dir })
    : pLeftIcon;
  const rightIcon = typeof pRightIcon === 'function'
    ? pRightIcon({ ...props, dir })
    : pRightIcon;
  const textClasses = useTextClasses();
  const { theme } = useTheme();
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
  const isFloatingLabelFocused = typeof floatingLabelFocused === 'boolean' ? floatingLabel && floatingLabelFocused : floatingLabel && inputInUse;

  const renderLabel = () => {
    if (!label) {
      return null;
    }
    const variant = isFloatingLabelFocused
      ? 'caption1'
      : floatingLabel
        ? 'components1'
        : 'components2';

    return (
      <Text
        data-testid="input-label"
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
              { [classes.floatingLabelInputWrapperInUse]: isFloatingLabelFocused },
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
            {content ?
                content
                :
                (<input
                {...inputProps}
                dir={dir}
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
            />)}
          </div>
        </div>
        { (clearButton && inFocus && !!value && !props.readOnly) && (
          <div
            className={classes.clearButton}
            onPointerDown={onResetButtonPointerDown}
            data-testid="clear-button"
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
          className={classNames(classes.message, errorClassName, { [classes.withPaddingLeft]: floatingLabel })}
          dir={dir}
        />
      )}
      {!errorMessage && hint && (
        <HintMessage
          text={hint}
          disabled={disabled}
          dir={dir}
          className={classNames(classes.message, hintClassName, { [classes.withPaddingLeft]: floatingLabel })}
        />
      )}
    </div>
  );
};

Input.defaultProps = {
  color: 'primary',
}

export default Input;
