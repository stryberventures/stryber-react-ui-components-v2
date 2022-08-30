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
  argTypes: buildExcludeArgTypes(['name', 'onChange', 'onBlur', 'controlled', 'prefixClassName',
    'errorClassName', 'hintClassName', 'endAdornment', 'mask']),
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => <NumberInput {...args} />;

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  label: 'Color primary',
  placeholder: 'Number',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  label: 'Color secondary',
  color: 'secondary',
  placeholder: 'Number',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full parent width',
  placeholder: 'Number',
  fullWidth: true,
};

export const PrefixWithClass = Template.bind({});
PrefixWithClass.args = {
  label: 'Min',
  placeholder: 'Number',
  prefix: '$',
  prefixClassName: 'prefix',
  fullWidth: true,
};

PrefixWithClass.decorators = [
  (Story) => (
    <div style={{ maxWidth: '102px' }}>
      <Story />
    </div>
  ),
];

export const QuantityCounter = Template.bind({});
QuantityCounter.args = {
  label: 'Quantity counter',
  placeholder: 'Number',
  quantityCounter: true,
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  label: 'Custom step',
  placeholder: 'Number',
  quantityCounter: true,
  step: 2
};
