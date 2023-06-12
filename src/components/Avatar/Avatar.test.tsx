import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './index';

it('should be rendered', () => {
  render(<Avatar />);
});

it('should render with status', () => {
  render(<Avatar status="online" />);
  expect(screen.getByTestId('gaia-avatar-status')).toBeVisible();
});
