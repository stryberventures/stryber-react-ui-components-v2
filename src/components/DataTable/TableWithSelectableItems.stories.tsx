import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DataTable from './index';
import Text from '../Text';
import pkg from './package.json';
import { TableCode } from '../../storybook/preview/Table/Selectable';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { ITableSorting, SortingDirection, TSortingDirection } from './types';



export default {
  title: 'Components/DataTable/TableWithSelectableItems',
  component: DataTable,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    variant: 'default',
  },
  argTypes: buildExcludeArgTypes(['selectedItems', 'onSelect', 'onSort', 'className', 'sorting']),
} as ComponentMeta<typeof DataTable>;

const metadata = [
  {
    id: 'id',
    label: 'ID',
    width: '12%',
    minWidth: 100,
  },
  {
    id: 'company',
    label: 'Company',
    width: '30%',
    minWidth: 250,
    sortable: true,
  },
  {
    id: 'status',
    label: 'Status',
    formatter: (value: string | number, data: any) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, }}>
        {data?.disabled && <span style={{ display: 'flex', width: 10, height: 10, backgroundColor: '#D0D5DD', borderRadius: 10 }} />}
        {!data?.disabled && value == 'active' && <span style={{ display: 'flex', width: 10, height: 10, backgroundColor: 'green', borderRadius: 10 }} />}
        {!data?.disabled && value != 'active' && <span style={{ display: 'flex', width: 10, height: 10, backgroundColor: 'red', borderRadius: 10 }} /> }
        <Text variant="components2" weight="regular">
          {value}
        </Text>
      </div>

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
  { id: 1, company: 'YouTube', status: 'active', employees: 10 },
  { id: 2, company: 'Apple', status: 'active', employees: 20 },
  { id: 3, company: 'Patreon', status: 'disabled', employees: 30 },
  { id: 4, company: 'Stryber', status: 'disabled', employees: 40, disabled: true },
];

const sorting = {
  orderBy: 'company',
  orderDirection: SortingDirection.asc,
}

const Template: ComponentStory<typeof DataTable> = (args) => {
  const [sorting, setSorting] = useState<ITableSorting>({
    orderBy: 'company',
    orderDirection: 'desc',
  });
  function onSort (orderBy: string, orderDirection: TSortingDirection) {
    setSorting({ orderBy, orderDirection });
  }
  const [selectedItems, setSelectedItems] = useState<(string | number)[]>([1, 2]);
  function handleOnSelect (itemId: string | number) {
    const newSelectedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((id) => id != itemId)
      : [...selectedItems, itemId];
    setSelectedItems(newSelectedItems);
  }
  return (
    <DataTable
      {...args}
      selectedItems={selectedItems}
      onSelect={handleOnSelect}
      sorting={sorting}
      onSort={onSort}
    />
  );
}

export const TableWithSelectableItems = Template.bind({});
TableWithSelectableItems.args = {
  metadata,
  data,
  sorting,
  tableName: 'Table Name'
};

TableWithSelectableItems.parameters = {
  docs: {
    source: {
      code: TableCode,
    },
  }
}
