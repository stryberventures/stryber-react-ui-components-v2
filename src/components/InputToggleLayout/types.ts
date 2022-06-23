import * as React from 'react';

export interface IInputToggleBase extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'size' | 'shape'> {
  className?: string,
  name?: string,
  size?: 'small' | 'medium',
  color?: 'primary' | 'secondary',
  checked?: boolean,
  disabled?: boolean,
  value?: string,
  label?: string,
  title?: string,
  errorMessage?: string,
  onChange?: (e: React.BaseSyntheticEvent) => void,
  onFocus?: (e: React.BaseSyntheticEvent) => void,
  children?: React.ReactNode,
}

export interface IInputToggleBaseControlled extends IInputToggleBase {
  controlled?: boolean,
}

export interface IInputToggle extends IInputToggleBaseControlled {
  type?: 'radio' | 'checkbox',
  control: React.ReactNode,
}
