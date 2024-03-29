import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';
import Placeholder from '../../storybook/icons/placeholder';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    size: 'medium',
    shape: 'round',
    variant: 'contained',
    disabled: false,
    fullWidth: false,
  },
  argTypes: buildArgTypes([
    'icon',
    'iconLeft',
    'iconRight',
    'className',
    'children',
  ]),
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  iconRight: ({ classIcon }) => <Placeholder className={classIcon} />,
};

export const Contained = Template.bind({});
Contained.args = {
  children: 'Contained',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost',
  variant: 'ghost',
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
  shape: 'square',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Medium',
  shape: 'square',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large',
  shape: 'square',
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

export const IconMini = Template.bind({});
IconMini.args = {
  icon: ({ classIcon }) => <Placeholder className={classIcon} />,
  shape: 'circle',
  size: 'mini',
};

export const IconSmallOutlined = Template.bind({});
IconSmallOutlined.args = {
  icon: ({ classIcon }) => <Placeholder className={classIcon} />,
  shape: 'circle',
  variant: 'outlined',
  size: 'small',
};

export const IconSmallGhost = Template.bind({});
IconSmallGhost.args = {
  icon: ({ classIcon }) => <Placeholder className={classIcon} />,
  shape: 'circle',
  variant: 'ghost',
  size: 'small',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Left Icon',
  iconLeft: ({ classIcon }) => <Placeholder className={classIcon} />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: 'Right Icon',
  iconRight: ({ classIcon }) => <Placeholder className={classIcon} />,
};

export const LeftRightIcon = Template.bind({});
LeftRightIcon.args = {
  children: 'Right Icon',
  iconLeft: ({ classIcon }) => <Placeholder className={classIcon} />,
  iconRight: ({ classIcon }) => <Placeholder className={classIcon} />,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  children: 'Error State',
  color: 'error',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Full Width',
  fullWidth: true,
};
