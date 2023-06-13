import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InputPassword from './index';

it('should be rendered with label', () => {
  const label = 'Test input password';
  render(<InputPassword label={label} />);
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should display the placeholder', () => {
  render(<InputPassword label="Input" placeholder="Placeholder" />);
  expect(screen.queryByPlaceholderText(/Placeholder/i)).toBeInTheDocument();
});

it('should display the password when icon is clicked', () => {
  render(<InputPassword label="Label" />);
  const eyeIcon = screen.getByTestId('password-icon');
  fireEvent.click(eyeIcon);
  expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
});

it('should display the error', () => {
  const errorMessage = 'Error message';
  render(<InputPassword label="Input" errorMessage={errorMessage} />);
  expect(screen.queryByText(errorMessage)).toBeInTheDocument();
});

it('should display the hint', () => {
  const hintMessage = 'Hint message';
  render(<InputPassword label="Input" hint={hintMessage} />);
  expect(screen.queryByText(hintMessage)).toBeInTheDocument();
});

it('should display validation Chips', () => {
  render(
    <InputPassword
      label="Input"
      validationSchema={[
        {
          label: 'Number',
          rule: /(?=.*\d).{1,}/gm,
        },
        {
          label: 'Uppercase',
          rule: /(?=[A-Z]).{1,}$/gm,
        },
        {
          label: 'Lowercase',
          rule: /(?=[a-z]).{1,}$/gm,
        },
      ]}
    />
  );
  expect(screen.queryByText('Number')).toBeInTheDocument();
  expect(screen.queryByText('Uppercase')).toBeInTheDocument();
  expect(screen.queryByText('Lowercase')).toBeInTheDocument();
});
