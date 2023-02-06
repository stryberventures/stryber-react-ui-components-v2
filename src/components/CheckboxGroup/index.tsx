import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import Checkbox, { ICheckBox } from '../CheckBox';
import { useFormContext } from '../Form';
import useStyles from './styles';
import classNames from 'classnames';


export type TChildCheckbox = {
  name: string;
  label: string;
  checked?: boolean;
  error?: string;
  hint?: string;
  disabled?: boolean;
};

export interface ICheckboxGroupProps
  extends Omit<ICheckBox, 'value' | 'onChange'> {
  name: string;
  checkboxes: TChildCheckbox[];
  error: string;
  onChange?: (e: BaseSyntheticEvent) => void;
}

interface IChildCheckboxesState {
  [key: string]: TChildCheckbox;
}

const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  name,
  checkboxes,
  disabled,
  error,
  ...rest
}) => {
  const classes = useStyles();
  const { updateFormValue } = useFormContext(name);
  const onChangeWrapper = (newState: IChildCheckboxesState) => {
    setChildCheckboxes(newState);
  };
  const setAllChildVal = (val: boolean): IChildCheckboxesState => {
    const newValue: IChildCheckboxesState = {};
    for (const _name in childCheckboxes) {
      newValue[_name] = {
        ...childCheckboxes[_name],
        checked: !childCheckboxes[_name].disabled ? val : childCheckboxes[_name].checked,
      }
    }
    setChildCheckboxes(newValue);
    return newValue;
  };
  const checkChildValues = (
    _checkboxes: IChildCheckboxesState,
    type: 'some' | 'all',
  ) => {
    const checkboxArr = Object.values(_checkboxes);
    if (type === 'some') {
      
      return checkboxArr.some((val) => val?.checked);
    }
    return checkboxArr.every(val => val?.checked);
  };
  const handleParentCheckboxChange = () => {
    const enabledCheckboxes = Object.values(childCheckboxes).reduce(
      (acc, checkbox) => {
        return checkbox.disabled ? acc : { ...acc, [checkbox.name]: checkbox }
      },
      {}
    );
    onChangeWrapper(setAllChildVal(!checkChildValues(enabledCheckboxes,'some')))
  };
  const [childCheckboxes, setChildCheckboxes] = useState<{[key: string]: TChildCheckbox}>(
    checkboxes.reduce(
      (acc, checkbox) => {
        return {
          ...acc,
          [checkbox.name]: {
            ...checkbox,
            checked: !!checkbox?.checked,
          },
        }
      },
      {}
    )
  );
  const handleChildCheckboxChange = (e: BaseSyntheticEvent, _name: string) => {
    setChildCheckboxes({
      ...childCheckboxes,
      [_name]: {
        ...childCheckboxes[_name],
        checked: !childCheckboxes[_name].disabled
          ? e.target.checked
          : childCheckboxes[_name].checked,
      },
    });
  }
  useEffect(
    () => {
      const checkboxesArray = Object.values(childCheckboxes);
      updateFormValue(name, checkboxesArray);
    },
    [childCheckboxes]
  );
  return (
    <div className={classNames(classes.checkboxGroup, rest.className)}>
      {/* TODO remove sizes from checkbox and radio button */}
      {/* TODO handle onKeyDown */}
      {/* TODO call onBlur after onKeyDown */}
      {/* TODO check styles for focused state */}
      <Checkbox
        {...rest}
        disabled={disabled}
        name={name}
        controlled
        indeterminate={
          checkChildValues(childCheckboxes, 'some') &&
          !checkChildValues(childCheckboxes, 'all')
        }
        onChange={handleParentCheckboxChange}
        checked={checkChildValues(childCheckboxes, 'all')}
        errorMessage={error}
        color={rest.color}
      />
      <div className={classes.childCheckboxes}>
        {Object.values(childCheckboxes)
          .map((props: TChildCheckbox) => {
            return (
              <Checkbox
                controlled
                checked={childCheckboxes[props.name].checked}
                disabled={disabled || props.disabled}
                onChange={(e: BaseSyntheticEvent) => handleChildCheckboxChange(e, props.name)}
                key={props.name}
                color={rest.color}
                errorMessage={props.error}
                {...props}
              />
            )
          })}
      </div>
    </div>
  );
};

CheckboxGroup.defaultProps = {
  color: 'primary',
}

export default CheckboxGroup;
