import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SearchInput from './index'

it('should be rendered without label', () => {
  render(<SearchInput label="label" />);
  const label = screen.queryByTestId('input-label')
  expect(label).not.toBeInTheDocument();
});

it('should have search icon', () => {
  render(<SearchInput />);
  const searchIcon = screen.getByTestId('search-icon');
  expect(searchIcon).toBeVisible();
});

it('should have clear icon', () => {
  const { getByPlaceholderText } = render(<SearchInput placeholder="search" />);
  const input = getByPlaceholderText('search') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'a' } });
  input.focus();
  const clearIcon = screen.getByTestId('clear-button');
  expect(clearIcon).toBeVisible();
});

it('should have value', () => {
  const { getByPlaceholderText } = render(<SearchInput placeholder="search" />);
  const input = getByPlaceholderText('search') as HTMLInputElement;
  const value = 'value';
  fireEvent.change(input, { target: { value } });
  expect(input.value).toBe(value);
});


