import React from 'react';
import Selector from './index';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Core/ComponentsSelector',
  component: Selector,
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
      npm: { hidden: true }
    }
  },
} as ComponentMeta<typeof Selector>;

export const ComponentsSelector = () => <Selector/>;
