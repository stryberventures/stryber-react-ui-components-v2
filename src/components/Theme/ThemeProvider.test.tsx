import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './index';
import Button from '../Button';
import { defaultTheme } from './defaultTheme';

it('should render the child', () => {
  const label = 'Button';
  render(
    <ThemeProvider theme={defaultTheme}>
      <Button>{label}</Button>
    </ThemeProvider>
  );
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should apply theme colors', () => {
  const label = 'Button';
  const red = 'rgb(255, 0, 0)';
  const contrast = 'rgb(0, 0, 0)';
  render(
    <ThemeProvider
      theme={{
        colors: {
          primary: { main500: red, light100: red, dark600: red },
          contrast: { white: contrast },
        },
      }}
    >
      <Button>{label}</Button>
    </ThemeProvider>
  );
  const button = screen.getByRole('button');
  const buttonStyles = getComputedStyle(button);
  expect(buttonStyles.backgroundColor).toMatch(red);
  expect(buttonStyles.color).toMatch(contrast);
});
