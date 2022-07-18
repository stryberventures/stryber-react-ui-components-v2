import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './index';
import pkg from './package.json';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checked: true,
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  checked: true,
  color: 'secondary',
  label: 'Secondary',
};

export const DisabledOn = Template.bind({});
DisabledOn.args = {
  checked: true,
  disabled: true,
  label: 'Disabled on',
};

export const DisabledOff = Template.bind({});
DisabledOff.args = {
  checked: false,
  disabled: true,
  label: 'Disabled off',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  children: (
    <div>Check <a href="https://google.com">terms</a> and <a href="https://google.com">conditions</a></div>
  ),
};

