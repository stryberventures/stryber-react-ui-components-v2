import '@testing-library/jest-dom';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from './index';
import { ITab } from './Tab';

const defaultTabs: ITab[] = [
  {
    id: 'home',
    label: 'Home',
    active: true,
    disabled: false,
  },
  {
    id: 'profile',
    label: 'Profile',
    active: false,
    disabled: false,
  },
  {
    id: 'payment',
    label: 'Payment',
    active: false,
    disabled: true,
  },
];

it('should render all tabs', () => {
  render(<Tabs tabs={defaultTabs} onChange={() => {}} />);
  expect(screen.queryByText('Home')).toBeInTheDocument();
  expect(screen.queryByText('Profile')).toBeInTheDocument();
  expect(screen.queryByText('Payment')).toBeInTheDocument();
});

it('should not click disabled tab', () => {
  const onClick = jest.fn();
  render(<Tabs tabs={[defaultTabs[2]]} onChange={onClick} />);
  const tab = screen.getByRole('button');
  fireEvent.click(tab);
  expect(onClick).not.toHaveBeenCalled();
});
