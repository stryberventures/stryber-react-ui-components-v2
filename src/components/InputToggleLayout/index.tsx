import * as React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { IInputToggle } from './types';
import { ErrorMessage } from '../ErrorMessage';
import Text from '../Text';

const InputToggleLayout: React.FC<IInputToggle> = (props) => {
  const {
    name = '', className, type, checked, disabled, value, children, title, control,
    onChange, onFocus, errorMessage, placeholder, label, hint, controlled,
    reverse, fullWidth, ...rest
  } = props;
  const classes = useStyles();
  return (
    <div className={classNames(classes.inputToggleLayout, {
      [classes.disabled]: disabled,
    }, className)}>
      {title &&
        <Text
          variant="components2"
          weight="regular"
          className={classNames(
            classes.title,
            {
              [classes.textDisabled]: disabled,
              [classes.titleReverse]: reverse,
            }
          )}
        >
          {title}
        </Text>
      }
      <label className={classNames(
        classes.labelContainer,
        {
          [classes.reverse]: reverse,
          [classes.fullWidth]: fullWidth,
        })}
      >
        <input
          {...rest}
          type={type}
          className={classes.input}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
        />
        <div className={classes.inputContainer}>
          {control}
        </div>
        <div className={classes.textContainer}>
          {label && typeof label == 'string'
            ? (
              <Text
                variant="components2"
                weight="regular"
                className={classNames(
                  classes.label,
                  {
                    [classes.textDisabled]: disabled,
                  }
                )}
              >
                {label}
              </Text>
            )
            : label
          }
          {hint &&
            <Text
              variant="components2"
              weight="regular"
              className={classNames(
                classes.hint,
                { [classes.textDisabled]: disabled, }
              )}
            >
              {hint}
            </Text>
          }
        </div>
      </label>
      {errorMessage && (
        <ErrorMessage
          text={errorMessage}
          className={classes.error}
        />
      )}
    </div>
  );
};

InputToggleLayout.defaultProps = {
  type: 'checkbox',
  color: 'primary',
  checked: false,
  disabled: false,
}

export default InputToggleLayout;
