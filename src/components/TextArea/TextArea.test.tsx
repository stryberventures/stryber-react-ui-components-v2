import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from './index';

it('should be rendered with label', () => {
  const label = 'Test text area';
  render(<TextArea id="id" label={label} />);
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should be rendered with hint', () => {
  const hint = 'hint';
  render(<TextArea id="id" hint={hint} />);
  expect(screen.queryByText(hint)).toBeInTheDocument();
});

it('should render the value', () => {
  const { getByRole } = render(
    <TextArea id="id" label="TextArea" value="Value" />
  );
  const textArea = getByRole('textbox') as HTMLTextAreaElement;
  expect(textArea.value).toBe('Value');
});

it('should handle onChange with value', () => {
  const { getByRole } = render(<TextArea id="id" label="Input" />);
  const textArea = getByRole('textbox') as HTMLTextAreaElement;
  fireEvent.change(textArea, { target: { value: 'some value' } });
  expect(textArea.value).toBe('some value');
});

it('should not handle onChange when disabled', () => {
  const { getByRole } = render(<TextArea id="id" label="Input" disabled />);
  const textArea = getByRole('textbox') as HTMLTextAreaElement;
  fireEvent.change(textArea, { target: { value: 'some value' } });
  expect(textArea.value).toBe('');
});

it('should display the error', () => {
  const errorMessage = 'Error message';
  render(<TextArea id="id" label="TextArea" errorMessage={errorMessage} />);
  expect(screen.queryByText(errorMessage)).toBeInTheDocument();
});
