import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    disabled: false,
    fullWidth: false,
    reverse: false,
    shape: 'square',
    alignControl: 'top',
  },
  argTypes: buildExcludeArgTypes(['onFocus', 'controlled', 'className', 'onChange', 'value', 'title', 'heading', 'name']),
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  hint: 'Advocates for every stakeholder',
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
};

export const HintOnly = Template.bind({});
HintOnly.args = {
  hint: 'Advocates for every stakeholder',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Remember me',
  errorMessage: 'This is a error message',
  color: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
  checked: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width',
  fullWidth: true,
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
  label: 'Circle',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: (
    <div style={{ lineHeight: toRem(20) }}>Check <a href="https://google.com">terms</a> and <a href="https://google.com">conditions</a></div>
  ),
};

export const Reverse = Template.bind({});
Reverse.args = {
  label: 'Reverse',
  reverse: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  checked: true,
  label: 'Checkbox label Checkbox label Checkbox label Checkbox label Checkbox',
  hint: 'Write a check box sentence here Write a check box sentence here Write a check box sentence here',
};

Multiline.decorators = [
  (Story) => (
    <div style={{ width: '400px' }}>
      <Story />
    </div>
  ),
];
