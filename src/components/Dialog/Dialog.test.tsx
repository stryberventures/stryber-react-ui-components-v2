import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Dialog from './'
import LeftArrow from '../../storybook/icons/leftArrow';


it('should be rendered', () => {
  render(<Dialog open />);
  const dialogWindow = screen.getByTestId('test-dialog');
  expect(dialogWindow).toBeVisible();
});

it('should have title', () => {
  const title = 'Dialog title';
  render(
    <Dialog
      open
      title={title}
    />
  );
  expect(screen.getByText(title)).toBeInTheDocument();
});

it('should have text', () => {
  const text = 'Dialog text text text text text text text text text text';
  render(
    <Dialog
      open
      text={text}
    />
  );
  expect(screen.getByText(text)).toBeInTheDocument();
});

it('should be closed', () => {
  const text = 'Dialog text text text text text text text text text text';
  render(
    <Dialog
      open={false}
      cancelOnOutsidePress
      text={text}
    />
  );
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

it('should call onConfirm handler', () => {
  const text = 'Dialog text';
  const confirm = jest.fn();
  const confirmButtonText = 'Confirm';
  render(
    <Dialog
      open
      cancelOnOutsidePress
      text={text}
      onConfirm={confirm}
      confirmButtonText={confirmButtonText}
    />
  );
  fireEvent.click(screen.getByText(confirmButtonText));
  expect(confirm).toHaveBeenCalled();
});

it('should call onCancel handler', () => {
  const text = 'Dialog text';
  const cancel = jest.fn();
  const cancelButtonText = 'Cancel';
  render(
    <Dialog
      open
      cancelOnOutsidePress
      text={text}
      onCancel={cancel}
      cancelButtonText={cancelButtonText}
    />
  );
  fireEvent.click(screen.getByText(cancelButtonText));
  expect(cancel).toHaveBeenCalled();
});

it('cancel button should contain left icon', () => {
  render(
    <Dialog
      open
      cancelButtonIconLeft={<LeftArrow />}
    />
  );
  expect(screen.getByTestId('test-svg')).toBeVisible();
});

it('should contain right icon', () => {
  render(
    <Dialog
      open
      cancelButtonIconRight={<LeftArrow />}
    />
  );
  expect(screen.getByTestId('test-svg')).toBeVisible();
});
