import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './index';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    checked: false,
    disabled: false,
    reverse: false,
    fullWidth: false,
    alignControl: 'top',
  },
  argTypes: buildArgTypes([
    'name',
    'value',
    'className',
    'onFocus',
    'onChange',
    'controlled',
    'size',
    'errorMessage',
  ]),
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  label: 'Primary',
  heading: 'Switches heading',
  hint: 'Write a switches sentence here',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
  heading: 'Switches heading',
  hint: 'Write a switches sentence here',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  alignControl: 'middle',
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
  disabled: true,
  label: 'Disabled on',
  heading: 'Switches heading',
  hint: 'Write a switches sentence here',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: (
    <div>
      Check <a href="https://google.com">terms</a> and{' '}
      <a href="https://google.com">conditions</a>
    </div>
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
