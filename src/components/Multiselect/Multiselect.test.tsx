import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Multiselect from './index'

const options = [{ name: 'One' }, { name: 'Two' }, { name: 'Three' }];

it('should be rendered with label', () => {
  const label = 'Label'
  render(<Multiselect label={label} options={options}/>)
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should not display the content', () => {
  render(<Multiselect label="Label" options={options}/>)
  expect(screen.queryByText(options[0].name)).not.toBeInTheDocument();
});

it('should display the placeholder', () => {
  render(<Multiselect label="Label" placeholder="Placeholder" options={options}/>);
  expect(screen.queryByPlaceholderText(/Placeholder/i)).toBeInTheDocument();
});

it('should display the error', () => {
  const errorMessage = 'Error message';
  render(<Multiselect label="Label" error={errorMessage} options={options}/>);
  expect(screen.queryByText(errorMessage)).toBeInTheDocument();
});

it('should display the hint', () => {
  const hintMessage = 'Hint message';
  render(<Multiselect label="Label" hint={hintMessage} options={options}/>);
  expect(screen.queryByText(hintMessage)).toBeInTheDocument();
});

it('should display the content after click', () => {
  const { getByRole } = render(<Multiselect label="Label" options={options}/>);
  const multiselect = getByRole('textbox');
  fireEvent.click(multiselect);
  expect(screen.queryByText(options[0].name)).toBeInTheDocument();
});

it('should hide the content after second click', () => {
  const { getByRole } = render(<Multiselect label="Label" options={options}/>);
  const multiselect = getByRole('textbox');
  fireEvent.click(multiselect);
  fireEvent.click(multiselect);
  expect(screen.queryByText(options[0].name)).not.toBeInTheDocument();
});
