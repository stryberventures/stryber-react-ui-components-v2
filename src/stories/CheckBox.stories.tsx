import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CheckBox} from '../components/CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'CheckBox',
  type: 'checkbox',
};

export const Radio = Template.bind({});
Radio.args = {
  label: 'Radio',
  type: 'radio',
  shape: 'circle',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium',
  size: 'medium',
};

export const Circle = Template.bind({});
Circle.args = {
  label: 'Circle',
  shape: 'circle',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

