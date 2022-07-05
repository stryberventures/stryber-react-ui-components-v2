import React, { useState } from 'react';
import useStyles from './styles';
import { IInput, Input } from '../Input'
import classNames from 'classnames';
import Plus from '../../stories/icons/plus';
import Minus from '../../stories/icons/minus';
import VerticalLine from '../../stories/icons/verticalLine';

export interface INumberInput extends IInput {
  quantityCounter?: boolean,
  min?: number,
  max?: number,
  step?: number,
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
    ...rest
  } = props;

  const [initialValue, setInitialValue] = useState(value)
  const handleCheck = (value: number) => {
    if (value > max) {
      setInitialValue(max.toString());
    } else if (isNaN(+value) || value < min) {
      setInitialValue(min.toString());
    } else {
      setInitialValue(value.toString());
    }
  }
  const counterBtnPress = (pressed: 'plus' | 'minus') => {
    const newVal = pressed === 'plus' ? +initialValue + step : +initialValue - step;
    handleCheck(newVal);
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
        onChange={ (e) => setInitialValue(e.target.value)}
        onBlur={(e) => handleCheck(+e.target.value)}
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

NumberInput.defaultProps = {
  placeholder: '0',
}

export default {
  NumberInput,
}
