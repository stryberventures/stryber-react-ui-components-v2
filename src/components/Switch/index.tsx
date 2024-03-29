import React from 'react';
import { useCheckedState } from '../InputToggleLayout/hooks';
import InputToggleLayout from '../InputToggleLayout';
import { ISwitchIcon, SwitchIcon } from './SwitchIcon';
import { IInputToggleBaseControlled } from '../InputToggleLayout/types';
import { useDir } from '../Theme';

export interface ISwitch extends ISwitchIcon, IInputToggleBaseControlled {
  color?: 'primary' | 'secondary';
}

const Switch: React.FC<ISwitch> = (props) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckedState(props);
  const {
    disabled,
    label,
    color,
    className,
    hint,
    heading,
    reverse,
    dir = useDir(props.dir),
    ...rest
  } = props;

  return (
    <InputToggleLayout
      {...rest}
      dir={dir}
      type="checkbox"
      checked={checked}
      errorMessage={errorMessage}
      onChange={onChange}
      onFocus={onFocus}
      label={label}
      hint={hint}
      disabled={disabled}
      reverse={reverse}
      className={className}
      control={
        <SwitchIcon
          checked={checked}
          color={color}
          disabled={disabled}
          dir={dir}
        />
      }
    />
  );
};
Switch.defaultProps = {
  color: 'primary',
};

export default Switch;
