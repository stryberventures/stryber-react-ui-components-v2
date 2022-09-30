import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';
import Placeholder from '../../storybook/icons/placeholder';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['iconLeft', 'iconRight', 'className']),
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: 'Contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
};

export const Mini = Template.bind({});
Mini.args = {
  size: 'mini',
  children: 'Mini',
  shape: 'round',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small',
  shape: 'flat',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Medium',
  shape: 'flat',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large',
  shape: 'flat',
};

export const Round = Template.bind({});
Round.args = {
  children: 'Round',
  size: 'medium',
  shape: 'round',
};

export const Circle = Template.bind({});
Circle.args = {
  children: 'Circle',
  size: 'medium',
  shape: 'circle',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Left Icon',
  iconLeft: Placeholder,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: 'Right Icon',
  iconRight: Placeholder,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Full Width',
  fullWidth: true,
};

