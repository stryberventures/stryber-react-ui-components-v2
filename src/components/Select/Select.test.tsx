import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Select } from './index'

const options = ['One', 'Two', 'Three'];

it('should be rendered with label', () => {
  const label = 'Label'
  render(<Select label={label} options={options}/>)
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should not display the content', () => {
  render(<Select label="Label" options={options}/>)
  expect(screen.queryByText(options[0])).not.toBeInTheDocument();
});

it('should display the placeholder', () => {
  render(<Select label="Label" placeholder="Placeholder" options={options}/>);
  expect(screen.queryByPlaceholderText(/Placeholder/i)).toBeInTheDocument();
});

it('should display the error', () => {
  const errorMessage = 'Error message';
  render(<Select label="Label" error={errorMessage} options={options}/>);
  expect(screen.queryByText(errorMessage)).toBeInTheDocument();
});

it('should display the hint', () => {
  const hintMessage = 'Hint message';
  render(<Select label="Label" hint={hintMessage} options={options}/>);
  expect(screen.queryByText(hintMessage)).toBeInTheDocument();
});

it('should display the content after click', () => {
  const { getByRole } = render(<Select label="Label" options={options}/>);
  const select = getByRole('textbox');
  fireEvent.click(select);
  expect(screen.queryByText(options[0])).toBeInTheDocument();
});

it('should hide the content after second click', () => {
  const { getByRole } = render(<Select label="Label" options={options}/>);
  const select = getByRole('textbox');
  fireEvent.click(select);
  fireEvent.click(select);
  expect(screen.queryByText(options[0])).not.toBeInTheDocument();
});
