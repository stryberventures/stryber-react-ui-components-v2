import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Tag from './index'
// import LeftArrow from '../../storybook/icons/leftArrow';


it('should be rendered', () => {
  const { getByRole } = render(<Tag>Tag</Tag>);
  expect(getByRole('link')).toBeInTheDocument();
});
