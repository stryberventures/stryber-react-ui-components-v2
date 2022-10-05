import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './index'
import Placeholder from '../../storybook/icons/placeholder';

it('should be rendered', () => {
  const label = 'Test button'
  render(<Button>{label}</Button>)
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should be visible', () => {
  render(<Button>Button</Button>)
  const button = screen.getByRole('button');
  expect(button).toBeVisible();
});

it('should contain default classes', () => {
  render(<Button>Button</Button>)
  const button = screen.getByRole('button');
  expect(button.className).toMatch(/(contained)/i);
  expect(button.className).toMatch(/(medium)/i);
  expect(button.className).toMatch(/(round)/i);
});

it('should contain variant, size and shape classes', () => {
  render(<Button variant="outlined" size="small" shape="round">Button</Button>)
  const button = screen.getByRole('button');
  expect(button.className).toMatch(/(outlined)/i);
  expect(button.className).toMatch(/(small)/i);
  expect(button.className).toMatch(/(round)/i);
});

it('should call onClick handler', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Button</Button>)
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

it('should not call onClick handler when disabled', () => {
  const onClick = jest.fn();
  render(<Button disabled={true} onClick={onClick}>Button</Button>)
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(onClick).not.toHaveBeenCalled();
});

it('should contain left icon', () => {
  render(<Button iconLeft={Placeholder}>Button</Button>);
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeVisible();
});

it('should contain right icon', () => {
  render(<Button iconRight={Placeholder}>Button</Button>);
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeVisible();
});
