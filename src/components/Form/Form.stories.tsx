import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from './index';
import { Input } from '../Input';
import { InputPassword } from '../InputPassword';
import * as yup from 'yup';
import { Button } from '../Button';
import { Multiselect } from '../Multiselect';
import { Select } from '../Select';

export default {
  title: 'Components/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  const { onValidate, onValidateAsync, ...props } = args;

  return <Form {...props} />;
};

const FormContent = () => (
  <>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Form with validation</h2>
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
    <div style={{ display: 'flex', gap: 20 }}>
      <Button label="Submit" type="submit"/>
      <Button label="Reset" type="reset" variant="outlined"/>
    </div>
  </>
);

export const Validation = Template.bind({});
Validation.args = {
  onSubmit: () => {
    alert('Submitted')
  },
  children: <FormContent />,
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    select: yup.string().required(),
    multiselect: yup.array().required().min(1),
  }),
};

export const InitialValues = Template.bind({});
InitialValues.args = {
  onSubmit: () => {
    alert('Submitted')
  },
  children: <FormContent />,
  initialValues: {
    email: 'somemail@mail.com',
    password: 'TGBwfe23',
    select: 'Two',
    multiselect: ['Two', 'Three'],
  }
};
