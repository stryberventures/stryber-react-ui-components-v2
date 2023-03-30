import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SearchBar from './index'

it('should be rendered', () => {
  const { getByRole } = render(<SearchBar />);
});

