import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Form } from './index';
import { Input } from '../Input';

const getForm = () => (
  <Form
    initialValues={{
      email: 'some@mail.com',
      password: 'somePass',
    }}
  >
    <Input label={'Email'} name="email"/>
    <Input label={'Password'} name="password"/>
  </Form>
)

it('should render children', () => {
  render(getForm());
  expect(screen.queryByText('Email')).toBeInTheDocument();
  expect(screen.queryByText('Password')).toBeInTheDocument();
});

it('should render values in inputs', () => {
  render(getForm());
  const [email, password] = screen.queryAllByRole('textbox') as [HTMLInputElement, HTMLInputElement];
  expect(email.value).toBe('some@mail.com');
  expect(password.value).toBe('somePass');
});
