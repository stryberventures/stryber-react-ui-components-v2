import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Divider from './index';

it('should be rendered', () => {
  const label = 'Divider'
  render(<Divider>{label}</Divider>)
  expect(screen.queryByText(label)).toBeInTheDocument();
});
