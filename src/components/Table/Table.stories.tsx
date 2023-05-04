import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Table from './index';
import TableCheckboxSorting, { TableCheckboxSortingCode } from '../../storybook/preview/Table/TableCheckboxSorting';
import TableBasicExample, { TableBasicExampleCode } from '../../storybook/preview/Table/Basic';
import pkg from './package.json';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Table>;

export const BasicExample = () => <TableBasicExample/>;
BasicExample.parameters = {
  docs: {
    source: {
      code: TableBasicExampleCode
    }
  }
}

export const FullExample = () => <TableCheckboxSorting />;
FullExample.parameters = {
  docs: {
    source: {
      code: TableCheckboxSortingCode
    },
  },
};
