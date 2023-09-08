import '@testing-library/jest-dom';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NumberInput from './index';

it('should render label', () => {
  const label = 'label';
  const placeholder = 'placeholder';
  render(<NumberInput placeholder={placeholder} label={label} />);
  expect(screen.queryByText(label)).toBeInTheDocument();
  expect(screen.queryByPlaceholderText(placeholder)).toBeInTheDocument();
});

it('should show prefix', () => {
  const prefix = 'prefix';
  render(<NumberInput prefix={prefix} />);
  expect(screen.queryByText(prefix)).toBeInTheDocument();
});

it('should show postfix', () => {
  const postfix = 'postfix';
  render(<NumberInput postfix={postfix} />);
  expect(screen.queryByText(postfix)).toBeInTheDocument();
});

it('should show hint', () => {
  const hint = 'Hint message';
  render(<NumberInput hint={hint} />);
  expect(screen.queryByText(hint)).toBeInTheDocument();
});

it('should show error instead of hint', () => {
  const hint = 'Hint message';
  const errorMessage = 'Error message';
  render(<NumberInput hint={hint} errorMessage={errorMessage} />);
  expect(screen.queryByText(errorMessage)).toBeInTheDocument();
  expect(screen.queryByText(hint)).not.toBeInTheDocument();
});

it('should show value', () => {
  const value = 22;
  render(<NumberInput value={value} />);
  expect(screen.queryByDisplayValue(value)).toBeInTheDocument();
});

it('increase value on plus button', () => {
  const value = 22;
  render(<NumberInput quantityCounter={true} value={value} />);
  const plus = screen.getByTestId('testPlus');
  fireEvent.click(plus);
  expect(screen.queryByDisplayValue(value + 1)).toBeInTheDocument();
});

it('decrease value on minus button', () => {
  const value = 22;
  render(<NumberInput quantityCounter={true} value={value} />);
  const minus = screen.getByTestId('testMinus');
  fireEvent.click(minus);
  expect(screen.queryByDisplayValue(value - 1)).toBeInTheDocument();
});

it('should show counter buttons if in counter mod', () => {
  const quantityCounter = true;
  render(<NumberInput quantityCounter={quantityCounter} />);
  const btnsContainer = screen.getByTestId('testContainer');
  expect(btnsContainer).toBeInTheDocument();
});
