import React, { useState } from 'react';
import Input, { IInput } from '../Input'
import { EyeIcon } from './EyeIcon';
import Chip from '../Chip';
import useStyles from './styles';
import { IValidationItemProps, usePasswordValidation } from './hooks';
import { CheckBoxIcon } from '../Icons';
import classNames from 'classnames';

export interface IInputPassword extends Omit<IInput, 'endAdornment'> {
  validationSchema?: IValidationItemProps[];
  onValidationChange?: (valid: boolean) => void;
}

const InputPassword: React.FC<IInputPassword> = (props) => {
  const { disabled, validationSchema, onValidationChange, value, className, fullWidth, ...rest } = props;
  const { onInputChange, schema } = usePasswordValidation({ validationSchema, value, onValidationChange });
  const [visible, setVisible] = useState(false);
  const classes = useStyles();

  const onEyeClick = () => {
    setVisible(!visible);
  }

  return (
    <div className={classNames(classes.inputPassword, className, { [classes.fullWidth]: fullWidth })}>
      <Input
        {...rest}
        disabled={disabled}
        value={value}
        className={classes.inputLayout}
        onChange={onInputChange}
        type={visible ? 'text' : 'password'}
        fullWidth={fullWidth}
        endAdornment={
          <EyeIcon
            data-testid="password-icon"
            visible={visible}
            disabled={disabled}
            onClick={onEyeClick}
          />
        }
      />
      {!!validationSchema && (
        <div className={classes.chips}>
          {schema.map(({ label , matched }) =>
            <Chip
              key={label}
              color={matched ? 'success' : 'default'}
              iconLeft={matched && <CheckBoxIcon className={classes.chipMatched}/>}
            >
              {label}
            </Chip>
          )}
        </div>
      )}
    </div>
  );
}

export default InputPassword;
