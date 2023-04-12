import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Table from './index';
import Text from '../Text';


export const testMetadata = [
  {
    id: 'id',
    label: 'ID',
    formatter: (value: string | number) => <Text># {value}</Text>,
  },
  {
    id: 'company',
    label: 'Company',
    formatter: (value: string | number) => <Text>{String(value).toUpperCase()}</Text>,
  },
  {
    id: 'status',
    label: 'Status',
    formatter: (value: string | number) => (
      <Text>
        {value == 'active' ? <span style={{ backgroundColor: 'green' }} /> : <span style={{ backgroundColor: 'red' }} /> }
        {value}
      </Text>
    ),
  },
  {
    id: 'employees',
    label: 'Employees',
    formatter: (value: string | number) => <Text>{value}</Text>,
  },
];

export const testData = [
  { id: 1, company: 'Stryber', status: 'disabled', employees: 10 },
  { id: 2, company: 'Parteon', status: 'active', employees: 20 },
  { id: 3, company: 'YouTube', status: 'active', employees: 30 },
  { id: 4, company: 'Apple', status: 'active', employees: 40 },
];

it('should be rendered', () => {
  render(<Table metadata={testMetadata} data={testData} />)
  expect(screen.queryByText(testMetadata[0].label)).toBeInTheDocument();
  expect(screen.queryByText(testMetadata[1].label)).toBeInTheDocument();
});

it('should be sorted by company name', () => {
  expect(true).toBeFalsy();
});

it('should show info', () => {
  expect(true).toBeFalsy();
});

