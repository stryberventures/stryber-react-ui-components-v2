import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from '../Form';
import { Input } from '../Input';
import * as yup from 'yup';
import { Button } from '../Button';

export default {
  title: 'Components/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  const { onValidate, onValidateAsync, ...props } = args;

  return <Form {...props} />;
};

export const Submit = Template.bind({});
Submit.args = {
  onSubmit: () => {
    alert('Submitted')
  },
  children: (
    <>
      <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Form with validation</h2>
      <Input label={'Email'} name="email" placeholder="some@mail.com"/>
      <h1> </h1>
      <Input label={'Password'} name="password" placeholder="Password is required"/>
      <h1> </h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button label="Submit" type="submit"/>
        <Button label="Reset" type="reset" variant="outlined"/>
      </div>
    </>
  ),
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }),
};
