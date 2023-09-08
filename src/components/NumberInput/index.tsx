import React, { useState } from 'react';
import useStyles from './styles';
import Input, { IInput } from '../Input';
import Button from '../Button';
import classNames from 'classnames';
import { CountIcon } from '../Icons';
import { useFormContext } from '../Form';
import { useTheme, toRem, useDir } from '../Theme';

export interface INumberInput extends Omit<IInput, 'value' | 'onChange'> {
  quantityCounter?: boolean;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (e: number) => void;
}

const NumberInput: React.FC<INumberInput> = (props) => {
  const {
    quantityCounter = false,
    min = 0,
    max = 100,
    step = 1,
    name = 'numberInput',
    value = '',
    controlled = false,
    errorMessage,
    onChange,
    prefix,
    prefixClassName,
    postfix,
    className,
    dir = useDir(props.dir),
    ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });
  const { theme } = useTheme();

  const { updateFormValue, fieldValue, fieldError } = useFormContext(name);
  const error = fieldError || errorMessage;
  const [initialValue, setInitialValue] = useState(+fieldValue || value);
  const internalValue = controlled ? value : initialValue;

  const valueUpdate = (value: number) => {
    setInitialValue(value);
    !controlled && updateFormValue(name, value);
    onChange && onChange(value);
  };
  const handleChange = (e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    if (isNaN(+value) && value !== '-') {
      e.preventDefault();
    } else valueUpdate(+value);
  };
  const counterBtnPress = (pressed: string) => {
    if (initialValue === '' || initialValue === undefined) {
      return valueUpdate(min);
    }
    const newVal =
      pressed === 'plus' ? +initialValue + step : +initialValue - step;
    if (newVal > max) {
      valueUpdate(max);
    } else if (newVal < min) {
      valueUpdate(min);
    } else valueUpdate(newVal);
  };
  const handleDecrease = () => counterBtnPress('minus');
  const handleIncrease = () => counterBtnPress('plus');

  const renderRightIcon = () => (
    <div className={classes.right} data-testid="testContainer">
      {quantityCounter && (
        <div className={classes.btnsContainer}>
          <Button
            variant="ghost"
            shape="circle"
            type="button"
            className={classes.counterBtn}
            onClick={handleDecrease}
            iconLeft={() => (
              <CountIcon
                variant="minus"
                width={toRem(8)}
                height={toRem(8)}
                fill={theme.colors.neutralGray.extraDark900}
              />
            )}
            data-testid="testMinus"
          />
          <div className={classes.separatorLine}></div>
          <Button
            variant="ghost"
            shape="circle"
            type="button"
            className={classes.counterBtn}
            onClick={handleIncrease}
            iconLeft={() => (
              <CountIcon
                variant="plus"
                width={toRem(8)}
                height={toRem(8)}
                fill={theme.colors.neutralGray.extraDark900}
              />
            )}
            data-testid="testPlus"
          />
        </div>
      )}
    </div>
  );
  return (
    <div className={classNames(classes.numberInputContainer, className)}>
      <Input
        {...rest}
        dir={dir}
        name={name}
        controlled
        className={classes.numberInput}
        value={`${internalValue}` || undefined}
        onChange={handleChange}
        errorMessage={error}
        prefix={prefix}
        prefixClassName={classNames(classes.prefix, prefixClassName)}
        postfix={postfix}
        autoComplete="off"
        type="number"
        rightIcon={renderRightIcon}
      />
    </div>
  );
};

export default NumberInput;
