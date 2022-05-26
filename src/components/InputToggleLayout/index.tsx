import * as React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { IInputToggle } from './types';
import { ErrorMessage } from '../ErrorMessage';

export const InputToggleLayout = (props: IInputToggle) => {
  const {
    name = '', size = 'medium', className, type, checked, disabled, value, children, title,
    onChange, onFocus, errorMessage, placeholder, label, controlled, ...rest
  } = props;
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.wrapper, {
      [classes.disabled]: disabled,
    }, className)}>
      <label className={classes.container}>
        <input
          {...rest}
          type={type}
          className={classes.input}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          onFocus={onFocus}
        />
        {children}
        <div className={classNames(classes.text, classes[size])}>
          {title &&
            <div className={classNames(classes.title, {
              [classes.textDisabled]: disabled,
            })}>
              {title}
            </div>
          }
          {label &&
            <div className={classNames(classes.label, {
              [classes.textDisabled]: disabled,
            })}>
              {label}
            </div>
          }
        </div>
      </label>
      {errorMessage && <ErrorMessage text={errorMessage} className={classes.error}/>}
    </div>
  );
};

InputToggleLayout.defaultProps = {
  type: 'checkbox',
  size: 'medium',
  color: 'primary',
  checked: false,
  disabled: false,
}
