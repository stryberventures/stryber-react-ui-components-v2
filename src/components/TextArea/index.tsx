import React from 'react';
import useStyles from './styles';
import { ErrorMessage } from '../ErrorMessage';
import classNames from 'classnames';
import { HintMessage } from '../HintMessage';

export interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  label?: string,
  placeholder?: string,
  disabled?: boolean,
  color?: 'primary' | 'secondary',
  errorMessage?: string,
  value?: string,
  name?: string,
  controlled?: boolean,
  onChange?: (e: React.BaseSyntheticEvent) => void,
  maxLength?: number,
  showLength?: boolean,
  hint?: string;
  maxLengthClassName?: string,
  fullWidth?: boolean,
}

const TextArea: React.FC<ITextArea> = (props) => {
  const {
    value = '',
    label,
    placeholder,
    onChange,
    errorMessage,
    disabled,
    name,
    controlled,
    className,
    maxLength,
    showLength,
    hint,
    maxLengthClassName,
    fullWidth,
  } = props;
  const classes = useStyles(props);
  const [internalValue, setInternalValue] = React.useState(value);
  const [length, setLength] = React.useState(internalValue.length);

  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { value } = e.target;
    setLength(value.length);
    setInternalValue(value);
    onChange && onChange(e);
  };

  return (
    <div className={className}>
      <div className={classNames(classes.container, {
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
          maxLength={maxLength}
          placeholder={placeholder}
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
