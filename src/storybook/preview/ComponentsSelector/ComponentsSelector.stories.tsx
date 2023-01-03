import React from 'react';
import ComponentsSelector from './index';
import { ComponentMeta } from '@storybook/react';


export default {
  title: 'Core/ComponentsSelector',
  component: ComponentsSelector,
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
      npm: { hidden: true }
    }
  },
} as ComponentMeta<typeof ComponentsSelector>;

export const Primary = () => <ComponentsSelector/>;
