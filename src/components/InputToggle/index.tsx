import * as React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { IInputToggle } from './types';
import { HintMessage } from '../HintMessage';

export const InputToggle = (props: IInputToggle) => {
  const {
    name = '', className, type, size, checked, disabled, value, children,
    onChange, onFocus, errorMessage, placeholder, label, ...rest
  } = props;
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.wrapper, {
      [classes.disabled]: disabled,
    }, className)}>
      <label className={classes.label}>
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
        {label && <HintMessage text={label} className={classes.labelText} disabled={disabled} />}
      </label>
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
