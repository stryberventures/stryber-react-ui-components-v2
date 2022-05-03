import * as React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { IInputToggle } from './types';

export const InputToggle = (props: IInputToggle) => {
  const {
    name = '', className, type, size, checked, disabled, value, children,
    onChange, onFocus, errorMessage, placeholder, ...rest
  } = props;
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.wrapper, {
      [classes.error]: errorMessage,
    }, className)}>
      <label className={classes.label}>
        <input
          {...rest}
          type={type}
          className={classNames(classes.input,
            { [classes.disabled]: disabled },
          )}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          onFocus={onFocus}
        />
        {children}
        {placeholder &&
          <div
            className={classNames(classes.placeholder, {
              [classes.error]: errorMessage,
            })}
          >
            {placeholder}
          </div>
        }
      </label>
      {errorMessage &&
        <div className={classes.errorMessage}>
          {errorMessage}
        </div>
      }
    </div>
  );
};

InputToggle.defaultProps = {
  type: 'checkbox',
  size: 'small',
  color: 'primary',
  checked: false,
  disabled: false,
}
