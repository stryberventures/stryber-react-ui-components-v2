import * as React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import {CheckBoxMark} from './CheckBoxMark';
import {RadioBoxMark} from './RadioBoxMark';
import {FormContext} from '../Form';

export interface ICheckBoxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'size'> {
  className?: string;
  name: string;
  type?: 'checkbox' | 'radio';
  size?: 'small' | 'medium';
  shape?: 'square' | 'circle';
  color?: 'primary' | 'secondary',
  checked?: boolean;
  disabled?: boolean;
  value?: any;
  controlled?: boolean;
  errorMessage?: string;
  placeholder?: string;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
}

export const CheckBox = (props: ICheckBoxProps) => {

  const {
    className, name, type, size, shape, checked, disabled, value, controlled,
    errorMessage, placeholder, onChange, onFocus, ...rest
  } = props;
  const classes = useStyles(props);

  const {
    updateFormValue,
    formValues,
    formErrors,
    updateFormTouched,
    formTouched,
  } = React.useContext(FormContext);

  const [internalValue, setInternalValue] = React.useState((formValues && formValues[name]) || checked);

  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const {name, checked} = e.target;
    if (!disabled) setInternalValue(checked);
    formValues && updateFormValue(name, checked);
    onChange && onChange(e);
  };
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    const {name} = e.target;
    formTouched && updateFormTouched(name, true);
    onFocus && onFocus(e);
  };

  React.useEffect(() => {
    if (formValues) {
      updateFormValue(name, !!checked, true);
    }
    return () => {
      formValues && updateFormValue(name, undefined, true);
    };
  }, []);

  return (
    <div className={classNames([
      classes.wrapper,
      errorMsg ? classes.error : null,
      className
    ])}>
      <label className={classes.label}>
        <input
          {...rest}
          type={type}
          className={classNames(classes.input,
            {[classes.disabled]: disabled},
          )}
          name={name}
          value={value}
          checked={controlled ? checked : internalValue}
          onChange={onChangeWrapper}
          onFocus={onFocusWrapper}
        />
        {type !== 'radio' ?
          <CheckBoxMark
            shape={shape}
            size={size}
            checked={internalValue}
            disabled={disabled}
          /> :
          <RadioBoxMark
            size={size}
            checked={internalValue}
            disabled={disabled}
          />
        }
        {placeholder &&
          <div
            className={classNames([
              classes.placeholder,
              errorMsg ? classes.error : null,
            ])}
          >
            {placeholder}
          </div>}
      </label>
      {errorMsg ?
        (<div className={classes.errorMessage}>
          {errorMsg}
        </div>) : null
      }
    </div>
  );
};
CheckBox.defaultProps = {
  type: 'checkbox',
  size: 'small',
  shape: 'square',
  color: 'primary',
  checked: false,
  disabled: false,
}
