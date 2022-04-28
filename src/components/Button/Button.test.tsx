import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './index'
import Placeholder from '../../stories/icons/placeholder';

it('should be rendered', () => {
  const label = 'Test button'
  render(<Button label={label}/>)
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should be visible', () => {
  render(<Button label="Button"/>)
  const button = screen.getByRole('button');
  expect(button).toBeVisible();
});

it('should contain default classes', () => {
  render(<Button label="Button"/>)
  const button = screen.getByRole('button');
  expect(button.className).toMatch(/(contained)/i);
  expect(button.className).toMatch(/(medium)/i);
  expect(button.className).toMatch(/(round)/i);
});

it('should contain variant, size and shape classes', () => {
  render(<Button label="Button" variant="outlined" size="small" shape="round" />)
  const button = screen.getByRole('button');
  expect(button.className).toMatch(/(outlined)/i);
  expect(button.className).toMatch(/(small)/i);
  expect(button.className).toMatch(/(round)/i);
});

it('should call onClick handler', () => {
  const onClick = jest.fn();
  render(<Button label="Button" onClick={onClick} />)
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

it('should not call onClick handler when disabled', () => {
  const onClick = jest.fn();
  render(<Button label="Button" disabled={true} onClick={onClick} />)
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(onClick).not.toHaveBeenCalled();
});

it('should contain the icon', () => {
  render(<Button label="Button" iconRight={Placeholder} />);
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeVisible();
});
