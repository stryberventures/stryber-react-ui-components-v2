import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Table, {
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TablePagination,
  TableRow,
  TableSection,
  TableSortButton,
  TableTooltipButton
} from '.';

it('should render table', () => {
  render(<Table data-testid="table" />);
  expect(screen.getByTestId('table')).toBeInTheDocument();
});

it('should render table section', () => {
  render(<TableSection data-testid="tableSection">Test content</TableSection>);
  expect(screen.getByTestId('tableSection')).toBeInTheDocument();
});

it('should render table container', () => {
  render(<TableContainer data-testid="tableContainer">Test content</TableContainer>);
  expect(screen.getByTestId('tableContainer')).toBeInTheDocument();
});


it('should render table head', () => {
  render(<TableHead data-testid="tableHead">Test content</TableHead>);
  expect(screen.getByTestId('tableHead')).toBeInTheDocument();
});

it('should render table body', () => {
  render(<TableBody data-testid="tableBody">Test content</TableBody>);
  expect(screen.getByTestId('tableBody')).toBeInTheDocument();
});

it('should render table row', () => {
  render(<TableRow data-testid="tableRow">Test content</TableRow>);
  expect(screen.getByTestId('tableRow')).toBeInTheDocument();
});

it('should render table cell', () => {
  render(<TableCell data-testid="tableCell">Test content</TableCell>);
  expect(screen.getByTestId('tableCell')).toBeInTheDocument();
});

it('should render table pagination', () => {
  render(<TablePagination count={5} onPageChange={() => {}} page={2} rowsPerPage={2} data-testid="tablePagination"/>);
  expect(screen.getByTestId('tablePagination')).toBeInTheDocument();
});

it('should render table sort button', () => {
  render(<TableSortButton data-testid="tableSortButton"/>);
  expect(screen.getByTestId('tableSortButton')).toBeInTheDocument();
});

it('should render table tooltip button', () => {
  render(<TableTooltipButton />);
  expect(screen.getByTestId('questionIcon')).toBeInTheDocument();
});

it('should show info', () => {
  render(<TableTooltipButton title="Test title" text="Test text" />);
  fireEvent.mouseOver(screen.getByTestId('questionIcon'));
  expect(screen.queryByText('Test title')).toBeInTheDocument();
  expect(screen.queryByText('Test text')).toBeInTheDocument();
});

it('should call onSort', () => {
  const onSort = jest.fn();
  render(<TableSortButton onClick={onSort} data-testid="tableSortButton"/>);
  const sortingIcon = screen.getByTestId('tableSortButton');
  fireEvent.click(sortingIcon);
  expect(onSort).toHaveBeenCalled();
});
