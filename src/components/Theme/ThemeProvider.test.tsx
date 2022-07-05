import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from './index'
import { Button } from '../Button';
import { defaultTheme } from './defaultTheme';

it('should render the child', () => {
  const label = 'Button';
  render(
    <ThemeProvider theme={defaultTheme}>
      <Button label={label}/>
    </ThemeProvider>
  );
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should apply theme colors', () => {
  const label = 'Button';
  const red = 'rgb(255, 0, 0)';
  const black = 'rgb(0, 0, 0)';
  render(
    <ThemeProvider theme={{ primary: { main: red, contrast: black, light: red, dark: red } }}>
      <Button label={label}/>
    </ThemeProvider>
  );
  const button = screen.getByRole('button');
  const buttonStyles = getComputedStyle(button);
  expect(buttonStyles.backgroundColor).toMatch(red);
  expect(buttonStyles.color).toMatch(black);
});
