import React, { useState } from 'react';
import useStyles from './styles';
import Input, { IInput } from '../Input'
import Button from '../Button'
import classNames from 'classnames';
import { CountIcon } from '../Icons';
import { useFormContext } from '../Form';
import { useTheme, toRem } from '../Theme';

export interface INumberInput extends Omit<IInput, 'value' | 'onChange'> {
  quantityCounter?: boolean,
  min?: number,
  max?: number,
  step?: number,
  value?: number,
  onChange?: (e: number) => void,
}

const NumberInput: React.FC<INumberInput> = (props) => {
  const classes = useStyles();
  const { theme } = useTheme();
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
    prefixClassName,
    postfix,
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
    <div className={classNames(classes.numberInputContainer, className)}>
      <Input
        {...rest}
        name={name}
        controlled={true}
        className={classes.numberInput}
        value={`${initialValue}` || undefined}
        onChange={handleChange}
        errorMessage={error}
        prefix={prefix}
        prefixClassName={classNames(classes.prefix, prefixClassName)}
        postfix={postfix}
        autoComplete='off'
        rightIcon={(
          <div className={classes.right} data-testid="testContainer">
            {quantityCounter && (
              <div className={classes.btnsContainer}>
                <Button
                  variant="ghost"
                  shape="circle"
                  className={classes.counterBtn}
                  onClick={ handleDecrease }
                  iconLeft={() => (
                    <CountIcon
                      variant="minus"
                      width={toRem(8)}
                      height={toRem(8)}
                      fill={theme.colors.neutralGray.extraDark900}
                    />)}
                  data-testid="testMinus"
                />
                <div className={classes.separatorLine}></div>
                <Button
                  variant="ghost"
                  shape="circle"
                  className={classes.counterBtn}
                  onClick={ handleIncrease }
                  iconLeft={() => (
                    <CountIcon
                      variant="plus"
                      width={toRem(8)}
                      height={toRem(8)}
                      fill={theme.colors.neutralGray.extraDark900}
                    />)}
                  data-testid="testPlus"
                />
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default NumberInput;
