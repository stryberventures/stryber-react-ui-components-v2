import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CircularProgress from './index';

it('should be rendered', () => {
  const testId = 'CircularProgress-test';
  render(<CircularProgress data-testid={testId} />);
  expect(screen.getByTestId(testId)).toBeInTheDocument();
});
