import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Elevation from './index';

it('should be rendered', () => {
  const label = 'Elevation'
  render(<Elevation>{label}</Elevation>)
  expect(screen.queryByText(label)).toBeInTheDocument();
});
