import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './index'
import LeftArrow from '../../stories/icons/leftArrow';

it('should be rendered with label', () => {
  const label = 'Test input'
  render(<Input label={label}/>)
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should display the placeholder', () => {
  render(<Input label="Input" placeholder="Placeholder"/>);
  expect(screen.queryByPlaceholderText(/Placeholder/i)).toBeInTheDocument();
});

it('should render the value', () => {
  const { getByRole } = render(<Input label="Input" value="Value"/>);
  const input = getByRole('textbox') as HTMLInputElement;
  expect(input.value).toBe('Value');
});

it('should handle onChange with value', () => {
  const { getByRole } = render(<Input label="Input"/>);
  const input = getByRole('textbox') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'some value' } });
  expect(input.value).toBe('some value')
});

it('should not handle onChange when disabled', () => {
  const { getByRole } = render(<Input label="Input" disabled/>);
  const input = getByRole('textbox') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'some value' } });
  expect(input.value).toBe('')
});

it('should display the error', () => {
  const errorMessage = 'Error message';
  render(<Input label="Input" errorMessage={errorMessage} />);
  expect(screen.queryByText(errorMessage)).toBeInTheDocument();
});

it('should display the hint', () => {
  const hintMessage = 'Hint message';
  render(<Input label="Input" errorMessage={hintMessage} />);
  expect(screen.queryByText(hintMessage)).toBeInTheDocument();
});

it('should render the adornment', () => {
  render(<Input label="Input" endAdornment={<LeftArrow />} />);
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeVisible();
});

it('should use the mask', () => {
  const { getByRole } = render(<Input label="Input" mask="+XX-XX X"/>);
  const input = getByRole('textbox') as HTMLInputElement;
  fireEvent.change(input, { target: { value: '12345' } });
  expect(input.value).toBe('+12-34 5')
});

it('should display the prefix', () => {
  const prefix = '+380';
  render(<Input label="Input" prefix={prefix}/>);
  expect(screen.queryByText(prefix)).toBeInTheDocument();
});
