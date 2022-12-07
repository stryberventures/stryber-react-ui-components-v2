import React from 'react';
import ComponentsSelector from './index';
import pkg from './package.json';
import { ComponentMeta } from '@storybook/react';


export default {
  title: 'Core/ComponentsSelector',
  component: ComponentsSelector,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof ComponentsSelector>;

export const Primary = () => <ComponentsSelector/>;
