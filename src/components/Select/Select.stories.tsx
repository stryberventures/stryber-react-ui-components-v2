import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './index';
import { buildExcludeArgTypes } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['name', 'onChange', 'onToggle', 'className', 'value']),
} as ComponentMeta<typeof Select>;

const options = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: '5', label: 'Five' },
  { value: '6', label: 'Six' },
  { value: '7', label: 'Seven' },
];

const Template: ComponentStory<typeof Select> = (args) =>
  <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select',
  placeholder: 'Select an option',
  options,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Select',
  placeholder: 'Select an option',
  color: 'secondary',
  options
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select',
  placeholder: 'Disabled',
  disabled: true,
  options
};

export const Error = Template.bind({});
Error.args = {
  label: 'Select',
  placeholder: 'with an error',
  error: 'Error message',
  options
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Select',
  placeholder: 'Disabled',
  hint: 'Hint message',
  options
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Select',
  placeholder: 'Full Width',
  options,
  fullWidth: true,
};
