import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { CheckBox } from './index'

it('should be rendered', () => {
  const { getByRole } = render(<CheckBox />);
  expect(getByRole('checkbox',{ hidden: true })).toBeInTheDocument();
});

it('should not be checked by default', () => {
  const { getByRole } = render(<CheckBox />);
  const checkBox = getByRole('checkbox',{ hidden: true }) as HTMLInputElement;
  expect(checkBox.checked).toBe(false);
});

it('should be checked', () => {
  const { getByRole } = render(<CheckBox checked={true} />);
  const checkBox = getByRole('checkbox',{ hidden: true }) as HTMLInputElement;
  expect(checkBox.checked).toBe(true);
});

it('should change checked state', () => {
  const { getByRole } = render(<CheckBox />);
  const checkBox = getByRole('checkbox',{ hidden: true }) as HTMLInputElement;
  fireEvent.change(checkBox, { target: { checked: true } });
  expect(checkBox.checked).toBe(true);
});

it('should display the label', () => {
  const label = 'Test label';
  render(<CheckBox label={label} />);
  expect(screen.queryByText(label)).toBeInTheDocument();
});
