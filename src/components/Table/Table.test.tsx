import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Table from './index';
import Text from '../Text';


export const testMetadata = [
  {
    id: 'id',
    label: 'ID',
    formatter: (value: string | number) => <Text>{value}</Text>,
    sortable: true,
  },
  {
    id: 'company',
    label: 'Company',
    formatter: (value: string | number) => <Text>{String(value)}</Text>,
    info: {
      title: 'Info Title',
      text: 'Info text'
    }
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
];

it('should render columns', () => {
  render(<Table metadata={testMetadata} data={testData} />);
  expect(screen.queryByText(testMetadata[0].label)).toBeInTheDocument();
  expect(screen.queryByText(testMetadata[1].label)).toBeInTheDocument();
  expect(screen.queryByText(testMetadata[2].label)).toBeInTheDocument();
  expect(screen.queryByText(testMetadata[3].label)).toBeInTheDocument();
});

it('should render rows', () => {
  render(<Table metadata={testMetadata} data={testData} />);
  expect(screen.queryByText(testData[0].id)).toBeInTheDocument();
  expect(screen.getByText(testData[0].company)).toBeInTheDocument();
  expect(screen.queryByText(testData[0].status)).toBeInTheDocument();
  expect(screen.queryByText(testData[0].employees)).toBeInTheDocument();
  expect(screen.queryByText(testData[1].id)).toBeInTheDocument();
  expect(screen.queryByText(testData[1].company)).toBeInTheDocument();
  expect(screen.queryByText(testData[1].status)).toBeInTheDocument();
  expect(screen.queryByText(testData[1].employees)).toBeInTheDocument();
});

it('should call onSort', () => {
  const onSort = jest.fn();
  render(<Table metadata={testMetadata} data={testData} onSort={onSort} />);
  const sortingIcon = screen.getByTestId('sortingIcon');
  fireEvent.click(sortingIcon);
  expect(onSort).toHaveBeenCalled();
});

it('should show info', () => {
  render(<Table metadata={testMetadata} data={testData} />);
  fireEvent.mouseOver(screen.getByTestId('questionIcon'));
  expect(screen.queryByText('Info Title')).toBeInTheDocument();
  expect(screen.queryByText('Info text')).toBeInTheDocument();
});

