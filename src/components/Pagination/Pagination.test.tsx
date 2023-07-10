import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './index';

it('should be rendered', () => {
  const label = '1';
  render(<Pagination currentPage={1} totalPages={30} onChange={() => {}} />);
  expect(screen.queryByText(label)).toBeInTheDocument();
});

it('should run onChange handler', () => {
  const onChange = jest.fn();
  render(<Pagination currentPage={1} totalPages={30} onChange={onChange} />);
  const button = screen.getByText('2');
  fireEvent.click(button);
  expect(onChange).toHaveBeenCalled();
});
