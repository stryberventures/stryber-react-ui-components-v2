import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Snackbar, { SnackbarContent } from './index'

it('should be rendered with message', () => {
  const message = 'SnackbarContent message';
  render(<SnackbarContent message={message} />);
  expect(screen.getByText(message)).toBeInTheDocument();
});

it('should be rendered with description', () => {
  const description = 'SnackbarContent description';
  render(<SnackbarContent description={description} />);
  expect(screen.getByText(description)).toBeInTheDocument();
});

it('should contain icon', () => {
  render(<SnackbarContent variant="info" />);
  expect(screen.getByTestId('gaia-snackbar-icon')).toBeVisible();
});

it('should fire onClose', () => {
  const onClose = jest.fn();
  render(<Snackbar variant="info" onClose={onClose} open={true} />);
  const closeButton = screen.getByTestId('gaia-snackbar-close-button');
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});

it('should be at the top left of the screen', () => {
  render(<Snackbar variant="info" anchorOrigin={{ vertical: 'top', horizontal: 'left' }} open={true} />);
  const snackbar = screen.getByTestId('gaia-snackbar');
  expect(snackbar).toHaveAttribute('class', expect.stringContaining('top'));
  expect(snackbar).toHaveAttribute('class', expect.stringContaining('left'));
});
