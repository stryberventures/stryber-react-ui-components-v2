import React, { useState } from 'react';
import useStyles from './styles';
import Input, { IInput } from '../Input'
import classNames from 'classnames';
import { CountIcon, VerticalLineDeprecated } from '../Icons';
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
    className,
    ...rest
  } = props;

  const { updateFormValue, fieldValue, fieldError } = useFormContext(name);
  const error = fieldError || errorMessage;
  const initValue = +fieldValue || value;
  const [initialValue, setInitialValue] = useState(initValue);

  const valueUpdate = (value: number) => {
    setInitialValue(value);
    updateFormValue(name, value);
    onChange && onChange(value);
  }
  const handleChange = (e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    if (isNaN(+value) && value !== '-') {
      e.preventDefault();
    } else valueUpdate(value);
  }
  const counterBtnPress = (pressed: string) => {
    if (initialValue === '' || initialValue === undefined) {
      return valueUpdate(min);
    }
    const newVal = pressed === 'plus' ? +initialValue + step : +initialValue - step;
    if (newVal > max) {
      valueUpdate(max);
    } else if (newVal < min) {
      valueUpdate(min)
    } else valueUpdate(newVal)
  };
  const handleDecrease = () => counterBtnPress('minus');
  const handleIncrease = () => counterBtnPress('plus');
  return (
    <div className={classNames(classes.numberInputContainer, { [classes.quantityCounter]: quantityCounter }, className)}>
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
              <div data-testid="testMinus" className={classes.counterBtn} onClick={ handleDecrease }><CountIcon variant="minus" /></div>
              <div className={classes.separatorLine}><VerticalLineDeprecated /></div>
              <div data-testid="testPlus" className={classes.counterBtn} onClick={ handleIncrease }><CountIcon variant="plus"/></div>
            </div>
          )
        )}
      />
    </div>
  );
};

export default NumberInput;
