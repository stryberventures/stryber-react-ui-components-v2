import React, { useState } from 'react';
import Checkbox, { ICheckBox } from '../CheckBox';
import useStyles from './styles';
import Form, { useFormContext } from '../Form';


type TChildCheckbox = {
  name: string;
  label: string;
  checked?: boolean;
  error?: string;
  hint?: string;
};

export interface ICheckboxGroupProps
  extends Omit<ICheckBox, 'value' | 'onChange'> {
  name: string;
  checkboxes: TChildCheckbox[];
  error: string;
  onChange?: (selectedCheckboxes: string[]) => void;
}

interface IChildCheckboxesState {
  [key: string]: boolean;
}

const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  name,
  color,
  checkboxes,
  error,
  onChange,
  ...rest
}) => {
  const classes = useStyles();
  const {
    fieldError,
    formValues,
    unsetFormValue,
    updateFormValue,
    updateFormTouched,
  } = useFormContext(name);
  const errorMessage = fieldError || error;
  const [childCheckboxes, setChildCheckboxes] = useState<IChildCheckboxesState>(
    checkboxes.reduce(
      (obj, { name: childName, checked }) => {
        return ({
          ...obj,
          [childName]: formValues?.[name]
            ? true
            : formValues?.[name] || checked,
        });
      },
      {},
    ),
  );
  const checkChildValues = (
    checkboxChildObj: IChildCheckboxesState,
    type: 'some' | 'all',
  ) => {
    const checkboxValArr = Object.values(checkboxChildObj);
    if (type === 'some') {
      return checkboxValArr.some(val => val);
    }
    return checkboxValArr.every(val => val);
  };
  const getSelectedCheckboxesArr = (obj: IChildCheckboxesState) =>
    [
      ...(checkChildValues(obj, 'all') ? [name] : []),
      ...Object.entries(obj).map(childVal => {
        if (childVal[1]) {
          return childVal[0];
        }
        return;
      }),
    ].filter(Boolean);
  const onChangeWrapper = (newState: IChildCheckboxesState) => {
    const newArrState = getSelectedCheckboxesArr(newState);
    setChildCheckboxes(newState);
    onChange && onChange(newArrState as string[]);
  };
  const handleChildCheckboxForm = (newFormData: IChildCheckboxesState) => {
    onChangeWrapper({ ...childCheckboxes, ...newFormData });
  };
  const setAllChildVal = (val: boolean) =>
    Object.keys(childCheckboxes).reduce(
      (obj, childName) => ({ ...obj, [childName]: val }),
      {},
    );
  const handleParentCheckboxChange = () =>
    onChangeWrapper(setAllChildVal(!checkChildValues(childCheckboxes, 'all')));
  return (
    <div className={classes.checkboxGroup}>
      {/* TODO handle errors in every checkbox */}
      {/* TODO remove sizes from checkbox and radio button */}
      {/* TODO handle onKeyDown */}
      {/* TODO call onBlur after onKeyDown */}
      {/* TODO check styles for focused state */}
      {/* TODO fix bad setState() error */}
      <Checkbox
        name={name}
        controlled
        indeterminate={
          checkChildValues(childCheckboxes, 'some') &&
          !checkChildValues(childCheckboxes, 'all')
        }
        color={color}
        onChange={handleParentCheckboxChange}
        checked={checkChildValues(childCheckboxes, 'all')}
        errorMessage={errorMessage}
        {...rest}
      />
      <Form
        initialValues={childCheckboxes}
        onChange={handleChildCheckboxForm}
        className={classes.form}
      >
        {checkboxes
          .reduce((acc: React.ReactElement[], props: TChildCheckbox) => {
            return [...acc, <Checkbox
              {...props}
              checked={formValues?.[props.name]}
              key={props.name}
              className={classes.childCheckbox}
              color={color}
            />];
          }, [])
        }
      </Form>
    </div>
  );
};

export default CheckboxGroup;
