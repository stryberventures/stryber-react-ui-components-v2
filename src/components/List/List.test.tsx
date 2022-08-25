import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import List from './index'

it('should be rendered with title and subtitle', () => {
  const title = 'title'
  const subtitle = 'subtitle'
  render(<List title={title} subtitle={subtitle}/>)
  expect(screen.queryByText(title)).toBeInTheDocument();
  expect(screen.queryByText(subtitle)).toBeInTheDocument();
});

it('should be rendered with leftContent and rightContent', () => {
  const leftContent = 'leftContent'
  const rightContent = 'rightContent'
  render(<List leftContent={leftContent} rightContent={rightContent}/>)
  expect(screen.queryByText(leftContent)).toBeInTheDocument();
  expect(screen.queryByText(rightContent)).toBeInTheDocument();
});

it('fires onClick', () => {
  const onClick = jest.fn();
  render(<List onClick={onClick} />);
  const listItem = screen.getByTestId('listItemTestID');
  fireEvent.click(listItem);
  expect(onClick).toHaveBeenCalled();
});
