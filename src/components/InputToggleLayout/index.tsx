import * as React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { IInputToggle } from './types';
import { ErrorMessage } from '../ErrorMessage';
import Text from '../Text';
import { KEYS } from '../../hooks/useKeyPress';
import { useDir } from '../Theme';

const InputToggleLayout: React.FC<IInputToggle> = (props) => {
  const {
    name = '', alignControl = 'top', className, type, checked, disabled, value, children, title, control,
    onChange, onFocus, errorMessage, placeholder, label, hint, controlled,
    reverse, fullWidth, color, dir = useDir(props.dir), ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });
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
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            const target = e?.target as HTMLInputElement;
            if (e.key == KEYS.enter) {
              onChange?.({ ...e,  target: { ...target, checked: !target.checked, name } });
            }
          }}
          onFocus={onFocus}
        />
        <div className={classNames(classes.inputContainer, { [classes.middleAlign]: alignControl == 'middle' })}>
          {control}
        </div>
        {label && typeof label == 'string'
          ? (
            <Text
              variant="components2"
              weight="regular"
              className={classNames(
                classes.label,
                classes.firstRow,
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
              {
                [classes.textDisabled]: disabled,
                [classes.secondRow]: !!label,
                [classes.firstRow]: !label,
              }
            )}
          >
            {hint}
          </Text>
        }
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
