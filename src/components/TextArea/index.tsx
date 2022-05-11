import React from 'react';
import useStyles from './styles';
import { ErrorMessage } from '../ErrorMessage';
import classNames from 'classnames';

export interface ITextArea extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string,
  disabled?: boolean,
  color?: 'primary' | 'secondary',
  errorMessage?: string,
  value?: string,
  name?: string,
  controlled?: boolean,
  onChange?: (e: React.BaseSyntheticEvent) => void,
  maxLength?: number,
}

export const TextArea = (props: ITextArea) => {
  const {
    value = '',
    label,
    onChange,
    errorMessage,
    disabled,
    name,
    controlled,
    className,
    maxLength,
  } = props;
  const classes = useStyles(props);
  const [internalValue, setInternalValue] = React.useState(value);
  const [lengthCount, setLengthCount] = React.useState(0);

  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { value } = e.target;
    setLengthCount(value.length);
    setInternalValue(value);
    onChange && onChange(e);
  };

  return (
    <div className={className}>
      <div className={classNames(classes.container, {
        [classes.containerDisabled]: disabled,
        [classes.containerError]: !!errorMessage,
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
        />
      </div>
      {errorMessage && <ErrorMessage text={errorMessage} className={classes.message}/>}
      {maxLength && <div className={classNames(classes.maxLength, className, {
        [classes.textDisabled]: disabled,
      })}>{lengthCount}/{maxLength}</div>}
    </div>
  );
};

TextArea.defaultProps = {
  color: 'primary',
}

export default {
  TextArea,
}
