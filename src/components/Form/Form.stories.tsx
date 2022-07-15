import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from './index';
import { Input } from '../Input';
import { InputPassword } from '../InputPassword';
import * as yup from 'yup';
import { Button } from '../Button';
import { Multiselect } from '../Multiselect';
import { Select } from '../Select';
import { defaultTheme } from '../Theme';
import pkg from './package.json';
import FormDisabledSubmitButton from '../../storybook/preview/FormDisabledSubmitButton';
import ExternalFormControl from '../../storybook/preview/ExternalFormControl';

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  const { onValidate, onValidateAsync, ...props } = args;

  return <Form {...props} />;
};

const FormContent = ({ title, text, showSelects = true }: {title: string, showSelects?: boolean, text?: string}) => (
  <>
    <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>{title}</h2>
    {text && <h4 style={{ fontFamily: 'Inter', color: defaultTheme.text.hint, fontWeight: 500 }}>{text}</h4>}
    <Input label={'Email'} name="email" placeholder="some@mail.com"/>
    <h1> </h1>
    <InputPassword label={'Password'} name="password" placeholder="Password is required"/>
    <h1> </h1>
    {showSelects && (
      <>
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
      </>
    )}
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
  children: <FormContent title="Form with validation" />,
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
  children: <FormContent title="Form with initial values" />,
  initialValues: {
    email: 'somemail@mail.com',
    password: 'TGBwfe23',
    select: 'Two',
    multiselect: ['Two', 'Three'],
  }
};

export const ErrorOnSubmit = Template.bind({});
ErrorOnSubmit.args = {
  onSubmit: (formData: any, { setError }) => {
    setError({ email: 'This email is already taken' });
  },
  children: <FormContent title="Form error after submit" showSelects={false}
    text="setError Form action is used instead of validation"/>,
};

export const DisabledSubmitButton = FormDisabledSubmitButton;

export const ExternalControl = ExternalFormControl;
