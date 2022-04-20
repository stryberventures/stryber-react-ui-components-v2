import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';
import Placeholder from './icons/placeholder';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: 'Contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  type: 'outlined',
};

export const Mini = Template.bind({});
Mini.args = {
  size: 'mini',
  label: 'Mini',
  shape: 'round',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
  shape: 'flat',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium',
  shape: 'flat',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
  shape: 'flat',
};

export const Round = Template.bind({});
Round.args = {
  label: 'Round',
  size: 'medium',
  shape: 'round',
};

export const Circle = Template.bind({});
Circle.args = {
  label: 'Circle',
  size: 'medium',
  shape: 'circle',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'With Icon',
  icon: Placeholder,
};

