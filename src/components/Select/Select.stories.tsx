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

const Template: ComponentStory<typeof Select> = (args) =>
  <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select',
  placeholder: 'Select an option',
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Select',
  placeholder: 'Select an option',
  color: 'secondary',
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select',
  placeholder: 'Disabled',
  disabled: true,
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};

export const Error = Template.bind({});
Error.args = {
  label: 'Select',
  placeholder: 'with an error',
  error: 'Error message',
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Select',
  placeholder: 'Disabled',
  hint: 'Hint message',
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};
