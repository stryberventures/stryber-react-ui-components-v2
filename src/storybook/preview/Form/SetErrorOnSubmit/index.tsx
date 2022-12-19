import React from 'react';
import Input from '../../../../components/Input';
import Form from '../../../../components/Form';
import { defaultTheme } from '../../../../components/Theme';
import InputPassword from '../../../../components/InputPassword';
import Button from '../../../../components/Button';

const FormSetErrorOnSubmit = () => {
  return (
    <Form
      onSubmit={(formData: any, { setErrors }) => {
        setErrors({ email: 'This email is already taken' });
      }}
    >
      <h2 style={{ fontFamily: 'Inter', color: defaultTheme.colors.primary.main500 }}>Set error from formActions</h2>
      <Input label={'Email'} name="email" placeholder="some@mail.com"/>
      <h1> </h1>
      <InputPassword label={'Password'} name="password" placeholder="Password is required"/>
      <h1> </h1>
      <Button type="submit">Submit</Button>
    </Form>
  )
};


export default FormSetErrorOnSubmit;

export const FormSetErrorOnSubmitCode = `
<Form
  onSubmit={(formData: any, { setErrors }) => {
    setErrors({ email: 'This email is already taken' });
  }}
>
  <h2 style={{ fontFamily: 'Inter', color: defaultTheme.colors.primary.main500 }}>Set error from formActions</h2>
  <Input label={'Email'} name="email" placeholder="some@mail.com"/>
  <h1> </h1>
  <InputPassword label={'Password'} name="password" placeholder="Password is required"/>
  <h1> </h1>
  <Button type="submit">Submit</Button>
</Form>
`
