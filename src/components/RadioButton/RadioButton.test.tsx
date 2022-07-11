import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { RadioButton } from './index'
import LeftArrow from '../../storybook/icons/leftArrow';

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

it('should display the label', () => {
  const label = 'Test label';
  render(<RadioButton label={label} />);
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should display the title', () => {
  const title = 'Test title';
  render(<RadioButton title={title} />);
  expect(screen.queryByText(title)).toBeInTheDocument();
});

it('should display the error', () => {
  const errorMessage = 'Test error';
  render(<RadioButton errorMessage={errorMessage} />);
  expect(screen.queryByText(errorMessage)).toBeInTheDocument();
});

it('should display the custom content', () => {
  render(<RadioButton>Message <LeftArrow /></RadioButton>);
  expect(screen.getByTestId('test-svg')).toBeVisible();
  expect(screen.queryByText('Message')).toBeVisible();
});
