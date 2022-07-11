import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NumberInput } from './index';
import pkg from './package.json';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Min',
  placeholder: '0',
  prefix: '$',
  fullWidth: true,
};
Default.decorators = [
  (Story) => (
    <div style={{ maxWidth: '102px' }}>
      <Story />
    </div>
  ),
];

export const QuantityCounter = Template.bind({});
QuantityCounter.args = {
  label: 'Quantity counter',
  placeholder: '0',
  quantityCounter: true
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  label: 'Custom step',
  placeholder: '0',
  quantityCounter: true,
  step: 2
};
