import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Chip from './index';
import LeftArrow from '../../storybook/icons/leftArrow';

it('should be rendered', () => {
  const label = 'Chip label';
  render(<Chip>{label}</Chip>);
  expect(screen.getByText(label)).toBeInTheDocument();
});

it('should contain left icon', () => {
  render(<Chip iconLeft={<LeftArrow />}>Chip</Chip>);
  expect(screen.getByTestId('leftArrow')).toBeVisible();
});

it('should contain right icon', () => {
  render(<Chip iconRight={<LeftArrow />}>Chip</Chip>);
  expect(screen.getByTestId('leftArrow')).toBeVisible();
});
