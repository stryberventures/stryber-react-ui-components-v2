import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Combobox from './index';

const options = [
  { value: '1', label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 312, label: 'Five' },
  { value: 'str', label: 'Six' },
  { value: 'val', label: 'Seven' },
];
const optionOneLabel = options[0].label;
const optionSevenLabel = options[6].label;
const label = 'Combobox label';

it('should be rendered with label', () => {
  render(<Combobox label={label} options={options} />);
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should display the placeholder', () => {
  render(
    <Combobox
      placeholder="Placeholder text"
      label="Combobox"
      options={options}
    />
  );
  expect(
    screen.queryByPlaceholderText(/Placeholder text/i)
  ).toBeInTheDocument();
});

it('should not display the content', () => {
  render(<Combobox label={label} options={options} />);
  expect(screen.queryByText('One')).not.toBeInTheDocument();
});

it('should display the error', () => {
  const errorMessage = 'Error message';
  render(<Combobox label={label} error={errorMessage} options={options} />);
  expect(screen.queryByText(errorMessage)).toBeInTheDocument();
});

it('should display the hint', () => {
  const hintMessage = 'Hint message';
  render(<Combobox label={label} hint={hintMessage} options={options} />);
  expect(screen.queryByText(hintMessage)).toBeInTheDocument();
});

it('should display the content after click', () => {
  render(<Combobox label={label} options={options} />);
  const combobox = screen.getByRole('textbox');
  fireEvent.click(combobox);
  expect(screen.queryByText(optionOneLabel)).toBeInTheDocument();
  expect(screen.queryByText(optionSevenLabel)).toBeInTheDocument();
});

it('should hide the content after second click', () => {
  render(<Combobox label={label} options={options} />);
  const combobox = screen.getByRole('textbox');
  fireEvent.click(combobox);
  fireEvent.click(combobox);
  expect(screen.queryByText(optionOneLabel)).not.toBeInTheDocument();
  expect(screen.queryByText(optionSevenLabel)).not.toBeInTheDocument();
});

it('should display selected option', () => {
  render(<Combobox label={label} options={options} />);
  const combobox = screen.getByRole('textbox') as HTMLInputElement;
  fireEvent.click(combobox);
  const item = screen.getByText(optionOneLabel);
  fireEvent.click(item);
  expect(combobox.value).toBe(optionOneLabel);
});

it('should display filtered options only', () => {
  render(<Combobox label={label} options={options} />);
  const combobox = screen.getByRole('textbox') as HTMLInputElement;
  fireEvent.click(combobox);
  fireEvent.change(combobox, { target: { value: optionOneLabel } });
  expect(screen.queryByText(optionOneLabel)).toBeInTheDocument();
  expect(screen.queryByText(optionSevenLabel)).not.toBeInTheDocument();
});
