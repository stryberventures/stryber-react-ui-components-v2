import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import TextLink from './index'
import LeftArrow from '../../storybook/icons/leftArrow';

const link = 'https:www.google.com';

it('should be rendered', () => {
  const { getByRole } = render(<TextLink text="Text link" href={link} />);
  expect(getByRole('link')).toBeInTheDocument();
});

it('should contain a link', () => {
  const { getByRole } = render(<TextLink text="Text link" href={link}/>);
  expect(getByRole('link')).toHaveAttribute('href', link);
});

it('should contain left icon', () => {
  render(<TextLink text="Text link" href={link} iconLeft={<LeftArrow />} />);
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeVisible();
});

it('should contain right icon', () => {
  render(<TextLink text="Text link" href={link} iconRight={<LeftArrow />} />);
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeVisible();
});
