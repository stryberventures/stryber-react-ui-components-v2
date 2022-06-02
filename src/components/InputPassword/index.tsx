import React, { useState } from 'react';
import { IInput, Input } from '../Input'
import { EyeIcon } from './EyeIcon';
import { Chip } from '../Chip';
import useStyles from './styles';
import { IValidationItemProps, usePasswordValidation } from './hooks';
import CheckBoxIcon from '../Icons/CheckBoxIcon';
import classNames from 'classnames';

export interface IInputPassword extends Omit<IInput, 'endAdornment'> {
  validationScheme?: IValidationItemProps[];
}

export const InputPassword = (props: IInputPassword) => {
  const { disabled, validationScheme, value, className, ...rest } = props;
  const { onInputChange, scheme } = usePasswordValidation({ validationScheme, value });
  const [visible, setVisible] = useState(false);
  const classes = useStyles();

  const onEyeClick = () => {
    setVisible(!visible);
  }

  return (
    <div className={classNames(classes.container, className)}>
      <Input
        {...rest}
        disabled={disabled}
        value={value}
        className={classes.inputLayout}
        onChange={onInputChange}
        type={visible ? 'text' : 'password'}
        endAdornment={
          <EyeIcon
            data-testid="password-icon"
            visible={visible}
            disabled={disabled}
            onClick={onEyeClick}
          />
        }
      />
      {!!validationScheme && (
        <div className={classes.chips}>
          {scheme.map(({ id, label , matched }) =>
            <Chip
              key={id}
              text={label}
              color={matched ? 'success' : 'default'}
              iconLeft={matched && <CheckBoxIcon className={classes.chipMatched}/>}
            />
          )}
        </div>
      )}
    </div>

  );
}
