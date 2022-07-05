import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NumberInput } from '../components/NumberInput';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Min',
  placeholder: '0',
  prefix: '$',
  prefixSpace: 5,
};
Default.decorators = [
  (Story) => (
    <div style={{ maxWidth: '102px' }}>
      <Story />
    </div>
  ),
];

export const QuantituCounter = Template.bind({});
QuantituCounter.args = {
  label: 'Guest count',
  placeholder: '0',
  quantityCounter: true
};
QuantituCounter.decorators = [
  (Story) => (
    <div style={{ maxWidth: '320px' }}>
      <Story />
    </div>
  ),
];

export const CustomStep = Template.bind({});
CustomStep.args = {
  label: 'Guest count',
  placeholder: '0',
  quantityCounter: true,
  step: 2
};
CustomStep.decorators = [
  (Story) => (
    <div style={{ maxWidth: '320px' }}>
      <Story />
    </div>
  ),
];
