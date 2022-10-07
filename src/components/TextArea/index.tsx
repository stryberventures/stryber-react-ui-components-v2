import React, { useEffect } from 'react';
import useStyles from './styles';
import { ErrorMessage } from '../ErrorMessage';
import classNames from 'classnames';
import { HintMessage } from '../HintMessage';
import { useFormContext } from '../Form';

export interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  label?: string,
  disabled?: boolean,
  color?: 'primary' | 'secondary',
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
    label,
    onChange,
    onBlur,
    errorMessage: error,
    disabled,
    controlled,
    className,
    maxLength,
    showLength,
    hint,
    maxLengthClassName,
    fullWidth,
    ...rest
  } = props;
  const { updateFormTouched, updateFormValue, unsetFormValue, fieldValue, fieldError } = useFormContext(name);
  const errorMessage = fieldError || error;
  const classes = useStyles(props);
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

  return (
    <div className={className}>
      <div className={classNames(classes.textArea, {
        [classes.containerDisabled]: disabled,
        [classes.containerError]: !!errorMessage,
        [classes.fullWidth]: fullWidth,
      })}>
        <div className={classNames(classes.label, { [classes.textDisabled]: disabled })}>
          {label}
        </div>
        <textarea
          name={name}
          value={controlled ? value : internalValue}
          className={classNames(classes.textarea, { [classes.textDisabled]: disabled })}
          onChange={onChangeWrapper}
          onBlur={onBlurWrapper}
          maxLength={maxLength}
          {...rest}
        />
      </div>
      {hint && <HintMessage text={hint} disabled={disabled} className={classes.message} />}
      {errorMessage && <ErrorMessage text={errorMessage} className={classes.message}/>}
      {showLength && (
        <HintMessage
          text={maxLength ? `${length}/${maxLength}` : `${length}`}
          disabled={disabled}
          className={classNames(classes.message, maxLengthClassName)}
        />
      )}
    </div>
  );
};

TextArea.defaultProps = {
  color: 'primary',
}

export default TextArea;
