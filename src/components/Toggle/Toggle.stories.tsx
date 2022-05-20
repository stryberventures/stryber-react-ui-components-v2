import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from './index';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

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
  label: 'Disabled',
};

