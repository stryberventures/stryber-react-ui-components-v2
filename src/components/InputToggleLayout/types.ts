import * as React from 'react';

export interface IInputToggleBase
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    'type' | 'size' | 'shape' | 'label' | 'children'
  > {
  className?: string;
  name?: string;
  color?: 'primary' | 'secondary' | 'error';
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  label?: string | React.ReactElement;
  title?: string;
  hint?: string;
  heading?: string;
  errorMessage?: string;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  reverse?: boolean;
  fullWidth?: boolean;
  alignControl?: 'top' | 'middle';
}

export interface IInputToggleBaseControlled extends IInputToggleBase {
  controlled?: boolean;
}

export interface IInputToggle extends IInputToggleBaseControlled {
  type?: 'radio' | 'checkbox';
  indeterminate?: boolean;
  control: React.ReactNode;
}
