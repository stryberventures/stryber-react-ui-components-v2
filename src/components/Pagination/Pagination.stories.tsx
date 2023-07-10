import React, { useMemo, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table, {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '../Table';
import data from '../../storybook/preview/Pagination/data.json';
import Pagination from './index';
import pkg from './package.json';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    pkg,
    controls: {
      exclude: ['className', 'onChange', 'totalPages', 'currentPage'],
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  totalPages: 50,
};

export const Secondary = Template.bind({});
Secondary.args = {
  totalPages: 50,
  color: 'secondary',
};

export const CustomSiblings = Template.bind({});
CustomSiblings.args = {
  totalPages: 50,
  color: 'secondary',
  siblingCount: 3,
};

export const WithContentAndPageSize = () => {
  const PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>FIRST NAME</TableCell>
              <TableCell>LAST NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>PHONE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTableData.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.first_name}</TableCell>
                  <TableCell>{item.last_name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={data.length}
        pageSize={PageSize}
        onChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};
