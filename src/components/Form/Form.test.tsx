import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from './index';
import { Input } from '../Input';
import { Button } from '../Button';
import { IFormProps } from './types';

interface IProps extends Omit<IFormProps, 'children'> {
  type?: 'submit' | 'reset';
}

const FormTemplate = (props: IProps) => {
  const { type, ...rest } = props;

  return (
    <Form
      {...rest}
    >
      <Input label={'Email'} name="email"/>
      <Input label={'Password'} name="password"/>
      {type === 'submit' && <Button type="submit" label="Submit"/>}
      {type === 'reset' && <Button type="reset" label="Reset"/>}
    </Form>
  )
};

it('should render children', () => {
  render(<FormTemplate/>);
  expect(screen.queryByText('Email')).toBeInTheDocument();
  expect(screen.queryByText('Password')).toBeInTheDocument();
});

it('should render values in inputs', () => {
  const initialValues = {
    email: 'some@mail.com',
    password: 'somePass',
  };
  render(<FormTemplate initialValues={initialValues}/>);
  const [email, password] = screen.queryAllByRole('textbox') as [HTMLInputElement, HTMLInputElement];
  expect(email.value).toBe(initialValues.email);
  expect(password.value).toBe(initialValues.password);
});

it('should fire onSubmit', () => {
  const onSubmit = jest.fn();
  render(<FormTemplate onSubmit={onSubmit} type="submit"/>);
  fireEvent.click(screen.getByRole('button'));
  expect(onSubmit).toHaveBeenCalled();
});

it('should fire onReset', () => {
  const onReset = jest.fn();
  render(<FormTemplate onReset={onReset} type="reset"/>);
  fireEvent.click(screen.getByRole('button'));
  expect(onReset).toHaveBeenCalled();
});
