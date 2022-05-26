import React, { useState } from 'react';
import { IInput, Input } from '../Input'
import { EyeIcon } from './EyeIcon';

export interface IInputPassword extends Omit<IInput, 'endAdornment'> {}

export const InputPassword = (props: IInputPassword) => {
  const { disabled } = props;
  const [visible, setVisible] = useState(false);
  
  const onEyeClick = () => {
    setVisible(!visible);
  }

  return (
    <Input
      {...props}
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
  );
}
