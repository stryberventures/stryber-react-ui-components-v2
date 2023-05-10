import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Menu from './index';

it('should be rendered', () => {
  const title = 'List item';
  const listItems = new Array(1).fill({ title });
  render(<Menu menuItems={listItems}></Menu>)
  expect(screen.queryByText(title)).toBeInTheDocument();
});

it('should be visible', () => {
  const title = 'List item';
  const listItems = new Array(1).fill({ title });
  render(<Menu menuItems={listItems}></Menu>)
  const menu = screen.getByTestId('gaia-menu-test');
  expect(menu).toBeVisible();
});

it('should have search', () => {
  const title = 'List item';
  const listItems = new Array(1).fill({ title });
  render(<Menu menuItems={listItems} hasSearch={true}></Menu>)
  const search = screen.getByTestId('gaia-menu-search');
  expect(search).toBeVisible();
});

