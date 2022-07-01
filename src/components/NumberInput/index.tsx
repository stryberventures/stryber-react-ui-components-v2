import React, { useEffect, useRef, useState } from 'react';
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
    quantityCounter,
    min = 0,
    max = 100,
    step = 1,
    name = 'numberInput',
    value = '',
  } = props;

  const [initialValue, setInitialValue] = useState(value)
  const handleDecrease = () => {
    const newVal = +initialValue - step
    setInitialValue(newVal.toString())
  }
  const handleIncrease = () => {
    const newVal = +initialValue + step
    setInitialValue(newVal.toString())
  }
  return (
    <div className={classNames(classes.numberInputContainer, { [classes.quantityCounter]: quantityCounter })}>
      <Input
        {...props}
        key={initialValue}
        name={name}
        type='number'
        className={classes.input}
        placeholder='0'
        value={initialValue}
        onChange={(e) => quantityCounter && setInitialValue(e.target.value)}
      />
      {quantityCounter && (
        <div className={classes.counterBtns}>
          <div className={classes.decrease} onClick={handleDecrease}><Minus/></div>
          <div><VerticalLine/></div>
          <div className={classes.increase} onClick={handleIncrease}><Plus/></div>
        </div>
      )}
    </div>
  );
};

NumberInput.defaultProps = {
  placeholder: '0',
}

export default {
  NumberInput,
}
