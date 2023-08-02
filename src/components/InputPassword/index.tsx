import React, { useState } from 'react';
import Input, { IInput } from '../Input';
import { EyeIcon } from './EyeIcon';
import Chip from '../Chip';
import useStyles from './styles';
import { IValidationItemProps, usePasswordValidation } from './hooks';
import { CheckIcon } from '../Icons';
import { useDir } from '../Theme';
import classNames from 'classnames';

export interface IInputPassword extends Omit<IInput, 'rightIcon'> {
  validationSchema?: IValidationItemProps[];
  onValidationChange?: (valid: boolean) => void;
}

const InputPassword: React.FC<IInputPassword> = (props) => {
  const {
    disabled,
    validationSchema,
    onValidationChange,
    value,
    className,
    fullWidth,
    dir = useDir(props.dir),
    ...rest
  } = props;
  const { onInputChange, schema } = usePasswordValidation({
    validationSchema,
    value,
    onValidationChange,
  });
  const [visible, setVisible] = useState(false);
  const classes = useStyles()({
    ...props,
    dir,
  });

  const onEyeClick = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation();
    setVisible(!visible);
  };
  const renderRightIcon = () => {
    return (
      <EyeIcon
        data-testid="password-icon"
        visible={visible}
        disabled={disabled}
        onClick={onEyeClick}
        className={classes.eyeIcon}
      />
    );
  };

  return (
    <div
      className={classNames(classes.inputPassword, className, {
        [classes.fullWidth]: fullWidth,
      })}
    >
      <Input
        {...rest}
        dir={dir}
        disabled={disabled}
        value={value}
        className={classes.inputLayout}
        onChange={onInputChange}
        type={visible ? 'text' : 'password'}
        fullWidth={fullWidth}
        rightIcon={renderRightIcon}
      />
      {!!validationSchema && (
        <div className={classes.chips}>
          {schema.map(({ label, matched }) => (
            <Chip
              key={label}
              color={matched ? 'success' : 'default'}
              iconLeft={
                matched && <CheckIcon className={classes.chipMatched} />
              }
            >
              {label}
            </Chip>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputPassword;
