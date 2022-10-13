import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Dialog from './'


it('should be rendered', () => {
  render(<Dialog open>Modal</Dialog>);
  const dialogWindow = screen.getByTestId('test-dialog');
  expect(dialogWindow).toBeVisible();
});

it('should have text', () => {
  const text = 'Dialog text text text text text text text text text text';
  render(
    <Dialog open>
      {text}
    </Dialog>
  );
  expect(screen.getByText(text)).toBeInTheDocument();
});

it('should be closed', () => {
  const text = 'Dialog text text text text text text text text text text';
  render(
    <Dialog open={false}>
      {text}
    </Dialog>
  );
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});


it('should call onCancel handler', () => {
  const text = 'Dialog text';
  const onClose = jest.fn();
  render(
    <Dialog
      open
      onClose={onClose}
    >
      {text}
    </Dialog>
  );
  const overlay = screen.getByTestId('test-dialog-overlay');
  fireEvent.click(overlay);
  setTimeout(() => {
    expect(overlay).not.toBeInTheDocument();
  }, 200);
});

it('should not call onCancel handler on backdrop click', () => {
  const text = 'Dialog text';
  const onClose = jest.fn();
  render(
    <Dialog
      open
      disableOutsideClick
      onClose={onClose}
    >
      {text}
    </Dialog>
  );
  fireEvent.click(screen.getByTestId('test-dialog-overlay'));
  expect(onClose).not.toHaveBeenCalled();
});
