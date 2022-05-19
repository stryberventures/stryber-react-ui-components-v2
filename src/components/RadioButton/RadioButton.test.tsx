import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { RadioButton } from './index'

it('should be rendered', () => {
  const { getByRole } = render(<RadioButton />);
  expect(getByRole('radio', { hidden: true })).toBeInTheDocument();
});

it('should not be checked by default', () => {
  const { getByRole } = render(<RadioButton />);
  const radioButton = getByRole('radio',{ hidden: true }) as HTMLInputElement;
  expect(radioButton.checked).toBe(false);
});

it('should be checked', () => {
  const { getByRole } = render(<RadioButton checked={true} />);
  const radioButton = getByRole('radio',{ hidden: true }) as HTMLInputElement;
  expect(radioButton.checked).toBe(true);
});

it('should change checked state', () => {
  const { getByRole } = render(<RadioButton />);
  const checkBox = getByRole('radio',{ hidden: true }) as HTMLInputElement;
  fireEvent.change(checkBox, { target: { checked: true } });
  expect(checkBox.checked).toBe(true);
});
