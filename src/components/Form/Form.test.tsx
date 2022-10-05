import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, act } from '@testing-library/react';
import Form from './index';
import Input from '../Input';
import Button from '../Button';
import { IFormProps } from './types';
import { unmountComponentAtNode, render as ReactDomRender } from 'react-dom';
import * as yup from 'yup';

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
      {type === 'submit' && <Button type="submit">Submit</Button>}
      {type === 'reset' && <Button type="reset">Reset</Button>}
    </Form>
  )
};

let container: Element | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
  container = null;
});

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

it('should display error on submit', async () => {
  const promise = Promise.resolve();
  act(() => {
    ReactDomRender(
      <FormTemplate
        type="submit"
        validationSchema= {yup.object({
          email: yup.string().email().required(),
        })}
      />,
      container
    );
  });
  const button = container?.querySelector('button');
  await act(() => promise);
  act(() => {
    button?.dispatchEvent(new MouseEvent('click'));
  });
  expect(screen.queryByText('email is a required field')).toBeInTheDocument();
});
