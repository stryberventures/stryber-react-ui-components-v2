import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBox } from '../components/CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  size: 'medium',
  checked: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Circle = Template.bind({});
Circle.args = {
  size: 'medium',
  shape: 'circle',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  disabled: true,
  checked: true,
};
