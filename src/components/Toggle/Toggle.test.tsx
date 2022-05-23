import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Toggle } from './index'

it('should be rendered', () => {
  const { getByRole } = render(<Toggle />);
  expect(getByRole('checkbox',{ hidden: true })).toBeInTheDocument();
});

it('should not be checked by default', () => {
  const { getByRole } = render(<Toggle />);
  const checkBox = getByRole('checkbox',{ hidden: true }) as HTMLInputElement;
  expect(checkBox.checked).toBe(false);
});

it('should be checked', () => {
  const { getByRole } = render(<Toggle checked={true} />);
  const checkBox = getByRole('checkbox',{ hidden: true }) as HTMLInputElement;
  expect(checkBox.checked).toBe(true);
});

it('should change checked state', () => {
  const { getByRole } = render(<Toggle />);
  const checkBox = getByRole('checkbox',{ hidden: true }) as HTMLInputElement;
  fireEvent.change(checkBox, { target: { checked: true } });
  expect(checkBox.checked).toBe(true);
});

it('should display the label', () => {
  const label = 'Test label';
  render(<Toggle label={label} />);
  expect(screen.queryByText(label)).toBeInTheDocument();
});
