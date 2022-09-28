import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Text from './'


it('should be rendered', () => {
  const variant = 'h1';
  render(<Text variant={variant}>Text element</Text>);
  const textElement = screen.getByTestId('test-text-element');
  expect(textElement).toBeVisible();
});

it('should contain text', () => {
  const text = 'Text element';
  render(<Text variant={'h1'}>{text}</Text>);
  const textElement = screen.getByText(text);
  expect(textElement).toBeVisible();
});



