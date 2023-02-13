import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import Divider from './index';

it('should be rendered', () => {
  const { getByTestId } = render(<Divider data-testid="divider" />);
  getByTestId('divider');
});
