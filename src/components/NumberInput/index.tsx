import React, { useState } from 'react';
import useStyles from './styles';
import Input, { IInput } from '../Input'
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

const NumberInput: React.FC<INumberInput> = (props) => {
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
    prefix,
    ...rest
  } = props;

  const { updateFormValue, fieldValue, fieldError } = useFormContext(name);
  const [errorText, setErrorText] = useState<string>()
  const error = fieldError || errorMessage || errorText;
  const initValue = +fieldValue || value;
  const [initialValue, setInitialValue] = useState(initValue);

  const dataCheck = (value: string) => {
    if (max <= min) {
      setErrorText('Min should be less than Max');
    } else if (min < 0 && max >= 0 && step > Math.abs(min) + max) {
      setErrorText('Invalid step');
    } else if (step > max - min || step <= 0) {
      setErrorText('Invalid step');
    } else if (+value > max) {
      setErrorText(`Max value is ${max}`);
    } else if (value !== '' && +value < min) {
      setErrorText(`Min value is ${min}`);
    } else setErrorText(undefined)
  }

  React.useEffect( () => {
    dataCheck(String(initialValue))
  }, [min, max, step]);

  const valueUpdate = (value: number) => {
    dataCheck(String(value));
    setInitialValue(value);
    updateFormValue(name, value);
    onChange && onChange(value);
  }
  const handleChange = (e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    if (+value > max) {
      value.length > `${max}`.length + 1 ? e.preventDefault() : valueUpdate(value);
    } else if (+value < min) {
      value.length > `${max}`.length + 1 ? e.preventDefault() : valueUpdate(value);
    } else if (isNaN(+value) && value !== '-') {
      e.preventDefault();
    } else {
      valueUpdate(value);
    }

  }
  const counterBtnPress = (pressed: string) => {
    if (initialValue === '' || initialValue === undefined) {
      return valueUpdate(min);
    }
    if (pressed === 'plus' && initialValue < max) {
      if (+initialValue + step > max) {
        valueUpdate(max);
      } else {
        valueUpdate(+initialValue + step);
      }
    } else if (pressed === 'minus' && initialValue > min) {
      if (+initialValue - step < min) {
        valueUpdate(min);
      } else {
        valueUpdate(+initialValue - step);
      }
    }
  };
  const handleDecrease = () => counterBtnPress('minus');
  const handleIncrease = () => counterBtnPress('plus');
  return (
    <div className={classNames(classes.numberInputContainer, { [classes.quantityCounter]: quantityCounter })}>
      <Input
        {...rest}
        name={name}
        controlled={true}
        className={classes.numberInput}
        value={`${initialValue}` || undefined}
        onChange={handleChange}
        errorMessage={error}
        prefix={prefix}
        autoComplete='off'
        endAdornment={(
          quantityCounter && (
            <div data-testid="testContainer" className={classes.btnsContainer}>
              <div data-testid="testMinus" className={classes.counterBtn} onClick={ handleDecrease }><Minus/></div>
              <div className={classes.separatorLine}><VerticalLine/></div>
              <div data-testid="testPlus" className={classes.counterBtn} onClick={ handleIncrease }><Plus/></div>
            </div>
          )
        )}
      />
    </div>
  );
};

export default NumberInput;
