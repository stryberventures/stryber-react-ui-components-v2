import React, { useState } from 'react';
import useStyles from './styles';
import { IInput, Input } from '../Input'
import classNames from 'classnames';
import Plus from '../Icons/plus';
import Minus from '../Icons/minus';
import VerticalLine from '../Icons/verticalLine';
import { useFormContext } from '../Form';

export interface INumberInput extends Omit<IInput, 'value' | 'onChange'> {
  quantityCounter?: boolean,
  min?: number,
  max?: number,
  step?: number,
  value?: number,
  onChange?: (e: number) => void,
}

export const NumberInput = (props: INumberInput) => {
  const classes = useStyles(props);
  const {
    quantityCounter = false,
    min = 0,
    max = 100,
    step = 1,
    name = 'numberInput',
    value = '',
    errorMessage,
    onChange,
    ...rest
  } = props;
  const { updateFormValue, fieldValue, fieldError } = useFormContext(name);
  const error = fieldError || errorMessage;
  const initValue = fieldValue || value;
  const [initialValue, setInitialValue] = useState(initValue);
  const handleChange = (value: number) => {
    setInitialValue(value);
    updateFormValue(name, value);
    onChange && onChange(value);
  }
  const checkValue = (value: number) => {
    if (value > max) {
      handleChange(max)
    } else if (isNaN(+value) || value < min) {
      handleChange(min)
    } else {
      handleChange(value)
    }
  }
  const counterBtnPress = (pressed: 'plus' | 'minus') => {
    const newVal = pressed === 'plus' ? +initialValue + step : +initialValue - step;
    checkValue(newVal);
  };
  const handleDecrease = () => counterBtnPress('minus');
  const handleIncrease = () => counterBtnPress('plus');
  return (
    <div className={classNames(classes.numberInputContainer, { [classes.quantityCounter]: quantityCounter })}>
      <Input
        {...rest}
        name={name}
        controlled={true}
        className={classes.input}
        value={isNaN(+initialValue) ? undefined : initialValue}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={(e) => checkValue(+e.target.value)}
        errorMessage={error}
        endAdornment={(
          quantityCounter && (
            <div className={classes.btnsContainer}>
              <div className={classes.counterBtn} onClick={ handleDecrease }><Minus/></div>
              <div><VerticalLine/></div>
              <div className={classes.counterBtn} onClick={ handleIncrease }><Plus/></div>
            </div>
          )
        )}
      />

    </div>
  );
};

export default {
  NumberInput,
}
