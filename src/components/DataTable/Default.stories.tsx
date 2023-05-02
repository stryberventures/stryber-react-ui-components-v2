import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DataTable from './index';
import TextLink from '../TextLink';
import Text from '../Text';
import pkg from './package.json';
import { TableCode } from '../../storybook/preview/Table/Default';
import { buildArgTypes } from '../../storybook/utils';
import { IData, ITableSorting, SortingDirection, TSortingDirection } from './types';



export default {
  title: 'Components/DataTable/Default',
  component: DataTable,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    variant: 'default',
  },
  argTypes: buildArgTypes(['selectedItems', 'onSelect', 'onSort', 'className', 'sorting']),
} as ComponentMeta<typeof Table>;

const metadata = [
  {
    id: 'id',
    label: 'ID',
    width: '12%',
    minWidth: 100,
    sortable: true,
  },
  {
    id: 'company',
    label: 'Company',
    formatter: (value: string | number, data: any) => (
      <TextLink
        href={'#'}
        variant="body3"
        target="_blank"
        disabled={data?.disabled}
        onClick={(e) => {e.stopPropagation()}}
      >
        {String(value)}
      </TextLink>
    ),
    width: '30%',
    minWidth: 250,
    sortable: true,
  },
  {
    id: 'status',
    label: 'Status',
    formatter: (value: string | number, data: any) => (
      <Text variant="components2" weight="regular" style={{ display: 'flex', alignItems: 'center', gap: 8, }}>
        {data?.disabled && <span style={{ display: 'flex', width: 10, height: 10, backgroundColor: '#D0D5DD', borderRadius: 10 }} />}
        {!data?.disabled && value == 'active' && <span style={{ display: 'flex', width: 10, height: 10, backgroundColor: 'green', borderRadius: 10 }} />}
        {!data?.disabled && value != 'active' && <span style={{ display: 'flex', width: 10, height: 10, backgroundColor: 'red', borderRadius: 10 }} /> }
        {value}
      </Text>
    ),
    width: '30%',
    minWidth: 140,
    info: {
      title: 'This is a tooltip',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nisl elit. Maecenas eu ornare augue.',
    },
    sortable: true,
  },
  {
    id: 'employees',
    label: 'Employees',
    formatter: (value: string | number) => <Text variant="components2" weight="regular">{value}</Text>,
    width: '28%',
    minWidth: 100,
    sortable: true,
  },
];

const data = [
  { id: 1, company: 'Stryber', status: 'disabled', employees: 10, disabled: true },
  { id: 2, company: 'Patreon', status: 'disabled', employees: 20 },
  { id: 3, company: 'YouTube', status: 'active', employees: 30 },
  { id: 4, company: 'Apple', status: 'active', employees: 40 },
];

const sorting = {
  orderBy: 'company',
  orderDirection: SortingDirection.asc,
};

const Template: ComponentStory<typeof DataTable> = (args) => {
  const [sorting, setSorting] = useState<ITableSorting>({
    orderBy: 'id',
    orderDirection: 'desc',
  });
  const [sortedData, setSortedData] = useState<IData[]>(data);
  useEffect(
    () => {
      setSortedData(
        [...sortedData.sort((a: IData, b: IData) => {
          if (a[sorting.orderBy] >= b[sorting.orderBy]) {
            return sorting.orderDirection == 'asc' ? 1 : -1;
          }
          if (a[sorting.orderBy] <= b[sorting.orderBy]) {
            return sorting.orderDirection == 'asc' ? -1 : 1;
          }
          return 0;
        })]
      );
    },
    [sorting]
  );
  function onSort (orderBy: string, orderDirection: TSortingDirection) {
    setSorting({ orderBy, orderDirection });
  }
  return (
    <DataTable
      {...args}
      data={sortedData}
      sorting={sorting}
      onSort={onSort}
      onSelect={undefined}
    />
  );
}

export const Default = Template.bind({});
Default.args = {
  metadata,
  data,
  sorting,
  tableName: 'Table Name'
};

Default.parameters = {
  docs: {
    source: {
      code: TableCode,
    },
  },
};
