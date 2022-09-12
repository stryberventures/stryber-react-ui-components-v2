import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Multiselect from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Multiselect',
  component: Multiselect,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['name', 'onChange', 'className', 'onToggle']),
} as ComponentMeta<typeof Multiselect>;

const options = [
  { value: 1, label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: '5', label: 'Five' },
  { value: '6', label: 'Six' },
  { value: '7', label: 'Seven' },
];

const Template: ComponentStory<typeof Multiselect> = (args) =>
  <Multiselect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Multiselect',
  placeholder: 'Select an option',
  options,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Multiselect',
  placeholder: 'Select an option',
  color: 'secondary',
  options
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Multiselect',
  placeholder: 'Disabled',
  disabled: true,
  options
};

export const Error = Template.bind({});
Error.args = {
  label: 'Multiselect',
  placeholder: 'with an error',
  error: 'Error message',
  options
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Multiselect',
  placeholder: 'Disabled',
  hint: 'Hint message',
  options
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Multiselect',
  placeholder: 'Full Width',
  options,
  fullWidth: true,
};
