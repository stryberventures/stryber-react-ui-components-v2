import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NumberInput from './index';
import pkg from './package.json';
import './style.css';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    quantityCounter: false,
    max: 1000000,
    variant: 'labelOutside',
  },
  argTypes: buildExcludeArgTypes(['name', 'onChange', 'onBlur', 'controlled', 'prefixClassName', 'postfixClassName',
    'errorClassName', 'hintClassName', 'rightIcon', 'mask']),
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  placeholder: 'Number',
};

export const QuantityCounter = Template.bind({});
QuantityCounter.args = {
  label: 'Quantity counter',
  placeholder: 'Number',
  quantityCounter: true,
  prefix: '₴',
  postfix: 'UAH'
};

export const PrefixWithClass = Template.bind({});
PrefixWithClass.args = {
  label: 'Min',
  placeholder: 'Number',
  prefix: '$',
  prefixClassName: 'prefix',
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  label: 'Custom step',
  placeholder: 'Number',
  quantityCounter: true,
  step: 2
};

PrefixWithClass.decorators = [
  (Story) => (
    <div style={{ maxWidth: '102px' }}>
      <Story />
    </div>
  ),
];

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full parent width',
  placeholder: 'Number',
  fullWidth: true,
};
