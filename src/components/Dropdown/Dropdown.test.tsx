import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Dropdown from './index';

it('should be rendered with label', () => {
  const label = 'Label'
  render(<Dropdown label={label}>Content</Dropdown>)
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should not display the content', () => {
  const content = 'Content';
  render(<Dropdown label="Label">{content}</Dropdown>)
  expect(screen.queryByText(content)).not.toBeInTheDocument();
});

it('should display the placeholder', () => {
  render(<Dropdown label="Dropdown" placeholder="Placeholder">Content</Dropdown>);
  expect(screen.queryByPlaceholderText(/Placeholder/i)).toBeInTheDocument();
});

it('should display the error', () => {
  const errorMessage = 'Error message';
  render(<Dropdown label="Dropdown" error={errorMessage}>Content</Dropdown>);
  expect(screen.queryByText(errorMessage)).toBeInTheDocument();
});

it('should display the hint', () => {
  const hintMessage = 'Hint message';
  render(<Dropdown label="Dropdown" hint={hintMessage}>Content</Dropdown>);
  expect(screen.queryByText(hintMessage)).toBeInTheDocument();
});

it('should display the content after click', () => {
  const content = 'Content';
  const { getByRole } = render(<Dropdown label="Dropdown">{content}</Dropdown>);
  const dropdown = getByRole('textbox');
  fireEvent.click(dropdown);
  expect(screen.queryByText(content)).toBeInTheDocument();
});

it('should hide the content after second click', () => {
  const content = 'Content';
  const { getByRole } = render(<Dropdown label="Dropdown">{content}</Dropdown>);
  const dropdown = getByRole('textbox');
  fireEvent.click(dropdown);
  fireEvent.click(dropdown);
  expect(screen.queryByText(content)).not.toBeInTheDocument();
});
