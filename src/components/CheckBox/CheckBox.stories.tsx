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
  argTypes: buildExcludeArgTypes(['onFocus', 'controlled', 'className', 'onChange']),
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  hint: 'Advocates for every stakeholder',
  size: 'medium',
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
  label: 'Circle',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
  checked: true,
};

export const Title = Template.bind({});
Title.args = {
  title: 'Remember me',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Remember me',
  errorMessage: 'This is a error message',
};

export const TitleAndLabel = Template.bind({});
TitleAndLabel.args = {
  title: 'Remember me',
  label: 'Save my login details for next time',
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

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width',
  fullWidth: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  checked: true,
  label: 'Checkbox label Checkbox label Checkbox label Checkbox label Checkbox',
  hint: 'Write a check box sentence here Write a check box sentence here Write a check box sentence here',
  controlCentered: true,
};

Multiline.decorators = [
  (Story) => (
    <div style={{ width: '400px' }}>
      <Story />
    </div>
  ),
];
