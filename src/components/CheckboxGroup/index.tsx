import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import Checkbox, { ICheckBox } from '../CheckBox';
import { useFormContext } from '../Form';
import { useDir } from '../Theme';
import useStyles from './styles';


export type TChildCheckbox = {
  name: string;
  label: string;
  checked?: boolean;
  errorMessage?: string;
  hint?: string;
  disabled?: boolean;
};

export interface ICheckboxGroupProps
  extends Omit<ICheckBox, 'value' | 'onChange'> {
  name?: string;
  errorMessage?: string,
  checkboxes: TChildCheckbox[];
  onChange?: (e: BaseSyntheticEvent) => void;
  dir?: string;
}

interface IChildCheckboxesState {
  [key: string]: TChildCheckbox;
}

const CheckboxGroup: React.FC<ICheckboxGroupProps> = (props) => {
  const {
    name = '',
    checkboxes,
    disabled,
    errorMessage,
    ...rest
  } = props;
  const dir = useDir(props.dir);
  const classes = useStyles()({
    ...props,
    dir
  });
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
        errorMessage={errorMessage}
        color={rest.color}
        dir={dir}
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
                errorMessage={props.errorMessage}
                {...props}
                dir={dir}
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
