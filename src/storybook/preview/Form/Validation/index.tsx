import React from 'react';
import Input from '../../../../components/Input';
import Form from '../../../../components/Form';
import * as yup from 'yup';
import { defaultTheme } from '../../../../components/Theme';
import InputPassword from '../../../../components/InputPassword';
import Select from '../../../../components/Select';
import Multiselect from '../../../../components/Multiselect';
import Combobox from '../../../../components/Combobox';
import Button from '../../../../components/Button';

const FormValidation = () => {
  return (
    <Form
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        select: yup.string().required(),
        combobox: yup.string().required(),
        multiselect: yup.array().required().min(1),
      })}
    >
      <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>Form with validation</h2>
      <Input label={'Email'} name="email" placeholder="some@mail.com"/>
      <h1> </h1>
      <InputPassword label={'Password'} name="password" placeholder="Password is required"/>
      <h1> </h1>
      <Select
        name="select"
        options={[{ label: 'One', value: '1' }, { label: 'Two', value: '2' }, { label: 'Three', value: '3' }]}
        label="Select"
        placeholder="Select a value"
      />
      <h1> </h1>
      <Multiselect
        name="multiselect"
        options={[{ label: 'One', value: '1' }, { label: 'Two', value: '2' }, { label: 'Three', value: '3' }]}
        label="Multiselect"
        placeholder="Select at least one value"
      />
      <h1> </h1>
      <Combobox
        name="combobox"
        options={[{ label: 'One', value: 1 }, { label: 'Two', value: 2 }, { label: 'Three', value: 3 }]}
        label="Combobox"
        placeholder="Select a value"
      />
      <h1> </h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button label="Submit" type="submit"/>
        <Button label="Reset" type="reset" variant="outlined"/>
      </div>
    </Form>
  )
};


export default FormValidation;

export const FormValidationCode = `<Form
  validationSchema={yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    select: yup.string().required(),
    combobox: yup.string().required(),
    multiselect: yup.array().required().min(1),
  })}
>
  <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>Form with validation</h2>
  <Input label={'Email'} name="email" placeholder="some@mail.com"/>
  <h1> </h1>
  <InputPassword label={'Password'} name="password" placeholder="Password is required"/>
  <h1> </h1>
  <Select
    name="select"
    options={['One', 'Two', 'Three']}
    label="Select"
    placeholder="Select a value"
  />
  <h1> </h1>
  <Multiselect
    name="multiselect"
    options={['One', 'Two', 'Three']}
    label="Multiselect"
    placeholder="Select at least one value"
  />
  <h1> </h1>
  <Combobox
    name="combobox"
    options={[{ label: 'One', value: 1 }, { label: 'Two', value: 2 }, { label: 'Three', value: 3 }]}
    label="Combobox"
    placeholder="Select a value"
  />
  <h1> </h1>
  <div style={{ display: 'flex', gap: 20 }}>
    <Button label="Submit" type="submit"/>
    <Button label="Reset" type="reset" variant="outlined"/>
  </div>
</Form>
`
