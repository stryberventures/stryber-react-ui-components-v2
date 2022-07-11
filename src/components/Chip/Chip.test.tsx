import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Chip } from './index'
import LeftArrow from '../../storybook/icons/leftArrow';

it('should be rendered', () => {
  const label = 'Chip label';
  render(<Chip text={label}/>);
  expect(screen.getByText(label)).toBeInTheDocument();
});

it('should contain left icon', () => {
  render(<Chip text="Chip" iconLeft={<LeftArrow />} />);
  expect(screen.getByTestId('test-svg')).toBeVisible();
});

it('should contain right icon', () => {
  render(<Chip text="Chip" iconRight={<LeftArrow />} />);
  expect(screen.getByTestId('test-svg')).toBeVisible();
});
