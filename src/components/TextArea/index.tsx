import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ErrorMessage } from '../ErrorMessage';
import { HintMessage } from '../HintMessage';
import { useFormContext } from '../Form';
import { useDir } from '../Theme';
import Text from '../Text';
import useStyles from './styles';
import useTextStyles from '../Text/styles';

export interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  label?: string,
  disabled?: boolean,
  color?: 'primary' | 'secondary',
  variant?: 'floatingLabel' | 'labelOutside',
  errorMessage?: string,
  name?: string,
  controlled?: boolean,
  onChange?: (e: React.BaseSyntheticEvent) => void,
  onBlur?: (e: React.BaseSyntheticEvent) => void,
  maxLength?: number,
  showLength?: boolean,
  hint?: string;
  maxLengthClassName?: string,
  fullWidth?: boolean,
}

const TextArea: React.FC<ITextArea> = (props) => {
  const {
    value = '',
    name = '',
    variant = 'labelOutside',
    label,
    onChange,
    onBlur,
    onFocus,
    errorMessage: error,
    disabled,
    controlled,
    className,
    maxLength,
    showLength,
    hint,
    maxLengthClassName,
    fullWidth,
    color,
    id,
    dir = useDir(props.dir),
    ...rest
  } = props;
  const { updateFormTouched, updateFormValue, unsetFormValue, fieldValue, fieldError } = useFormContext(name);
  const errorMessage = fieldError || error;
  const classes = useStyles()({
    ...props,
    dir,
  });
  const textClasses = useTextStyles();
  const [internalValue, setInternalValue] = React.useState(fieldValue || value);
  const [length, setLength] = React.useState(internalValue.toString().length);

  useEffect(() => {
    !controlled && updateFormValue(name, internalValue, true);
    return () => {
      !controlled && unsetFormValue(name);
    };
  }, []);

  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { value } = e.target;
    setLength(value.length);
    setInternalValue(value);
    updateFormValue(name, value);
    onChange && onChange(e);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    !controlled && updateFormTouched(name, true);
    onBlur && onBlur(e);
  }
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div
      className={classNames(
        classes.textAreaWrapper,
        { [classes.fullWidth]: fullWidth, },
        className)}
    >
      {label && variant == 'labelOutside' && (
        <Text
          variant="components2"
          weight="regular"
          className={classNames(
            classes.label,
            { [classes.textDisabled]: disabled },
          )}
          onClick={() => textareaRef?.current?.focus()}
          dir={dir}
        >
          {label}
        </Text>
      )}
      <div
        className={classNames(
          classes.textArea,
          classes[variant],
          {
            [classes.containerDisabled]: disabled,
            [classes.containerError]: !!errorMessage,
            [classes.labelMinified]: variant == 'floatingLabel' && (value || internalValue || textareaRef?.current?.value),
          },
        )}
      >
        {label && variant == 'floatingLabel' && (
          <Text
            variant="components1"
            weight="regular"
            className={classNames(
              classes.label,
              { [classes.textDisabled]: disabled, }
            )}
            dir={dir}
            onClick={() => textareaRef?.current?.focus()}
          >
            {label}
          </Text>
        )}
        <textarea
          ref={textareaRef}
          id={id}
          name={name}
          value={controlled ? value : internalValue}
          className={classNames(
            classes.textarea,
            textClasses.components1,
            textClasses.regular,
            { [classes.textDisabled]: disabled }
          )}
          onChange={onChangeWrapper}
          onBlur={onBlurWrapper}
          maxLength={maxLength}
          disabled={disabled}
          {...rest}
          dir={dir}
        />
      </div>
      {(!!hint || !!errorMessage || showLength || !!maxLength) && (
        <div className={classes.hintContainer}>
          <div className={classes.messagesWrapper}>
            {hint && !errorMessage && (
              <HintMessage
                text={hint}
                disabled={disabled}
                className={classes.hint}
                dir={dir}
              />
            )}
            {errorMessage && (
              <ErrorMessage
                text={errorMessage}
                className={classes.error}
                dir={dir}
              />
            )}
          </div>
          {showLength && (
            <HintMessage
              text={maxLength ? `${length}/${maxLength}` : `${length}`}
              disabled={disabled}
              className={classNames(
                classes.hint,
                classes.lengthContainer,
                maxLengthClassName,
                { [classes.textDisabled]: disabled },
              )}
              dir={dir}
            />
          )}
        </div>
      )}
    </div>
  );
};

TextArea.defaultProps = {
  color: 'primary',
}

export default TextArea;
