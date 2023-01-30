import * as React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { IInputToggle } from './types';
import { ErrorMessage } from '../ErrorMessage';
import Text from '../Text';

const InputToggleLayout: React.FC<IInputToggle> = (props) => {
  const {
    name = '', size = 'small', className, type, checked, disabled, value, children, title, control,
    onChange, onFocus, errorMessage, placeholder, label, hint, controlled,
    reverse, fullWidth, controlCentered, ...rest
  } = props;
  const classes = useStyles();
  // TODO ask designers all questions
  return (
    <div className={classNames(classes.inputToggleLayout, {
      [classes.disabled]: disabled,
    }, className)}>
      <label className={classNames(classes.container, {
        [classes.reverse]: reverse
      })}>
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
        <div className={classNames(
          classes.controlContainer, {
            [classes.fullWidth]: fullWidth,
            [classes.controlCentered]: controlCentered
          })}>
          {control}
          <div className={classes.text}>
            {title &&
            <Text
              variant="components2"
              weight="medium"
              className={classNames(
                classes.title,
                classes[size],
                {
                  [classes.textDisabled]: disabled,
                }
              )}
            >
              {title}
            </Text>
            }
            {label && typeof label == 'string'
              ? (
                <Text
                  variant={size === 'medium' ? 'components1' : 'components2'}
                  weight="regular"
                  className={classNames(
                    classes.label,
                    classes[size],
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
          </div>
        </div>
        {hint &&
            <Text
              variant="components2"
              weight="medium"
              className={classNames(
                classes.hint, {
                  [classes.textDisabled]: disabled,
                }
              )}
            >
              {hint}
            </Text>
        }
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
  controlCentered: false,
}

export default InputToggleLayout;
