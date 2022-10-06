import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Dialog from './index'
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

it('should have title', () => {
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
