import React from 'react';
import { useCheckedState } from '../InputToggleLayout/hooks';
import InputToggleLayout from '../InputToggleLayout';
import { ISwitchIcon, SwitchIcon } from './SwitchIcon';
import { IInputToggleBaseControlled } from '../InputToggleLayout/types';
import useStyles from './styles';
import classNames from 'classnames';

export interface ISwitch extends ISwitchIcon, Omit<IInputToggleBaseControlled, 'title'> {}

const Switch: React.FC<ISwitch> = (props) => {
  const { checked, errorMessage, onChange, onFocus } = useCheckedState(props);
  const {
    disabled, label, color, className, size = 'medium', heading, hint,
    reverse, controlCentered, ...rest 
  } = props;
  const classes = useStyles(props);

  return (
    <InputToggleLayout
      {...rest}
      type="checkbox"
      checked={checked}
      errorMessage={errorMessage}
      onChange={onChange}
      onFocus={onFocus}
      label={label}
      hint={hint}
      heading={heading}
      size={size}
      disabled={disabled}
      reverse={reverse}
      controlCentered={controlCentered}
      className={classNames(classes.switch, classes[size], { [classes.reversed]: reverse }, className)}
      control={
        <SwitchIcon checked={checked} color={color} disabled={disabled} size={size}/>
      }
    />
  );
}
Switch.defaultProps = {
  color: 'primary',
}

export default Switch;
