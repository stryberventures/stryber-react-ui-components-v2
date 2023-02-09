import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['name', 'value', 'className', 'onFocus', 'onChange', 'controlled', 'size']),
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checked: true,
  title: 'Title',
  label: 'Primary',
  heading: 'Switches heading',
  hint: 'Write a switches sentence here',
};

export const Secondary = Template.bind({});
Secondary.args = {
  checked: true,
  color: 'secondary',
  label: 'Secondary',
  heading: 'Switches heading',
  hint: 'Write a switches sentence here',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  checked: false,
  label: 'Switches label Switches label Switches label',
  heading: 'Switches heading',
  hint: 'Write a switches sentence here Write a switches sentence here Write a switches sentence here',
};

MultiLine.decorators = [
  (Story) => (
    <div style={{ width: '250px' }}>
      <Story />
    </div>
  ),
];
export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  disabled: true,
  label: 'Disabled on',
  heading: 'Switches heading',
  hint: 'Write a switches sentence here',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: (
    <div>Check <a href="https://google.com">terms</a> and <a href="https://google.com">conditions</a></div>
  ),
};

export const Reverse = Template.bind({});
Reverse.args = {
  label: 'Reverse',
  reverse: true,
  heading: 'Switches heading',
  hint: 'Write a switches sentence here',
  fullWidth: true,
};

Reverse.decorators = [
  (Story) => (
    <div style={{ width: '400px' }}>
      <Story />
    </div>
  ),
];
export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width',
  fullWidth: true,
};

