import React from 'react';
import { useCheckedState } from '../InputToggleLayout/hooks';
import { InputToggleLayout } from '../InputToggleLayout';
import { ISwitchIcon, SwitchIcon } from './SwitchIcon';
import { IInputToggleBaseControlled } from '../InputToggleLayout/types';
import useStyles from './styles';

export interface ISwitch extends ISwitchIcon, Omit<IInputToggleBaseControlled, 'size' | 'title'> {}

export const Switch = (props: ISwitch) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckedState(props);
  const { disabled, label, color, children, ...rest } = props;
  const classes = useStyles();

  return (
    <InputToggleLayout
      {...rest}
      type="checkbox"
      checked={checked}
      errorMessage={errorMessage}
      onChange={onChange}
      onFocus={onFocus}
      label={label}
      disabled={disabled}
      className={classes.layout}
      control={
        <SwitchIcon checked={checked} color={color} disabled={disabled}/>
      }
    >
      {children}
    </InputToggleLayout>
  );
}
