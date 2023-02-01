import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxGroup from './';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['onFocus', 'controlled', 'className', 'onChange']),
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Colors',
  name: 'colors',
  checkboxes: [
    { label: 'Orange', name: 'orange' },
    { label: 'Red', name: 'red' },
    { label: 'Yellow', name: 'yellow' },
    { label: 'Green', name: 'green' },
  ],
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Colors',
  name: 'colors',
  checkboxes: [
    { label: 'Orange', name: 'orange', checked: true },
    { label: 'Red', name: 'red' },
  ],
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Colors',
  name: 'colors',
  checkboxes: [
    { label: 'Orange', name: 'orange' },
    { label: 'Red', name: 'red' },
    { label: 'Yellow', name: 'yellow' },
    { label: 'Green', name: 'green' },
  ],
  color: 'error'
};
