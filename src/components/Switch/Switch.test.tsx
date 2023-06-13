import '@testing-library/jest-dom';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Switch from './index';
import LeftArrow from '../../storybook/icons/leftArrow';

it('should be rendered', () => {
  const { getByRole } = render(<Switch />);
  expect(getByRole('checkbox', { hidden: true })).toBeInTheDocument();
});

it('should not be checked by default', () => {
  const { getByRole } = render(<Switch />);
  const checkBox = getByRole('checkbox', { hidden: true }) as HTMLInputElement;
  expect(checkBox.checked).toBe(false);
});

it('should be checked', () => {
  const { getByRole } = render(<Switch checked={true} />);
  const checkBox = getByRole('checkbox', { hidden: true }) as HTMLInputElement;
  expect(checkBox.checked).toBe(true);
});

it('should change checked state', () => {
  const { getByRole } = render(<Switch />);
  const checkBox = getByRole('checkbox', { hidden: true }) as HTMLInputElement;
  fireEvent.change(checkBox, { target: { checked: true } });
  expect(checkBox.checked).toBe(true);
});

it('should display the label', () => {
  const label = 'Test label';
  render(<Switch label={label} />);
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should display the custom content', () => {
  render(
    <Switch
      label={
        <>
          Message <LeftArrow />
        </>
      }
    />
  );
  expect(screen.getByTestId('leftArrow')).toBeVisible();
  expect(screen.queryByText('Message')).toBeVisible();
});
