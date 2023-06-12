import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSection,
} from '../../../../components/Table';
import Text from '../../../../components/Text';

const data = [
  { id: 1, company: 'Stryber', status: 'disabled', employees: 10 },
  { id: 2, company: 'Patreon', status: 'disabled', employees: 20 },
  { id: 3, company: 'YouTube', status: 'active', employees: 30 },
  { id: 4, company: 'Apple', status: 'active', employees: 40 },
  { id: 5, company: 'Meta', status: 'active', employees: 50 },
];

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'company', label: 'Company' },
  { id: 'status', label: 'Status' },
  { id: 'employees', label: 'Employees' },
];

const TableBasicExample = () => {
  return (
    <TableContainer>
      <TableSection>
        <Text variant="body1">Table Name</Text>
      </TableSection>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id}>
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const selected = row.id === 4;
            const disabled = row.id === 1 || row.id === 2;
            return (<TableRow disabled={disabled} selected={selected} key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.employees}</TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default TableBasicExample;

export const TableBasicExampleCode = `
const data = [
  { id: 1, company: 'Stryber', status: 'disabled', employees: 10 },
  { id: 2, company: 'Patreon', status: 'disabled', employees: 20 },
  { id: 3, company: 'YouTube', status: 'active', employees: 30 },
  { id: 4, company: 'Apple', status: 'active', employees: 40 }
];

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'company', label: 'Company' },
  { id: 'status', label: 'Status' },
  { id: 'employees', label: 'Employees' }
];

const TableBasicExample = () => {
  return (
    <TableContainer>
      <TableSection>
        <Text variant="body1">Table Name</Text>
      </TableSection>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id}>
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const selected = row.id === 4;
            const disabled = row.id === 1 || row.id === 2;
            return (<TableRow disabled={disabled} selected={selected} key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.employees}</TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
};
`
