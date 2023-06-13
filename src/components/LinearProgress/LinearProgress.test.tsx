import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import LinearProgress from './index';

it('should be rendered', () => {
  const testId = 'LinearProgress-test';
  render(<LinearProgress data-testid={testId} />);
  expect(screen.getByTestId(testId)).toBeInTheDocument();
});
