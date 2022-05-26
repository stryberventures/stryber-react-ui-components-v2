import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from './index';

export default {
  title: 'Components/Switch',
  component: Switch,
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

