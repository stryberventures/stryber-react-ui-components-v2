import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Menu, { MenuSearch, MenuItem, MenuItemText } from './index';

const title = 'Menu item';

const ComponentWithMenu = () => (
  <Menu>
    <MenuSearch />
    <MenuItem>
      <MenuItemText primary={title} />
    </MenuItem>
  </Menu>
);

it('should be rendered', () => {
  render(<ComponentWithMenu />);
  expect(screen.queryByText(title)).toBeInTheDocument();
});

it('should be visible', () => {
  render(<ComponentWithMenu />);
  const menu = screen.getByTestId('gaia-menu-test');
  expect(menu).toBeVisible();
});

it('should have search', () => {
  render(<ComponentWithMenu />);
  const search = screen.getByTestId('gaia-menu-search');
  expect(search).toBeVisible();
});
