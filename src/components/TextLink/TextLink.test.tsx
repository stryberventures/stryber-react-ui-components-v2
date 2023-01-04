import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import TextLink from './index'
import LeftArrow from '../../storybook/icons/leftArrow';

const link = 'https:www.google.com';

it('should be rendered', () => {
  const { getByRole } = render(<TextLink href={link} >Text link</TextLink>);
  expect(getByRole('link')).toBeInTheDocument();
});

it('should contain a link', () => {
  const { getByRole } = render(<TextLink href={link}>Text link</TextLink>);
  expect(getByRole('link')).toHaveAttribute('href', link);
});

it('should contain left icon', () => {
  render(<TextLink href={link} iconLeft={<LeftArrow />}>Text link</TextLink>);
  const icon = screen.getByTestId('leftArrow');
  expect(icon).toBeVisible();
});

it('should contain right icon', () => {
  render(<TextLink href={link} iconRight={<LeftArrow />}>Text link</TextLink>);
  const icon = screen.getByTestId('leftArrow');
  expect(icon).toBeVisible();
});
