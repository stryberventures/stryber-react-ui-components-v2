import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBox } from './index';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    onFocus: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  size: 'medium',
  checked: true,
  label: 'Checked'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium',
};

export const Circle = Template.bind({});
Circle.args = {
  size: 'medium',
  shape: 'circle',
  label: 'Circle',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
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
  children: (
    <div>Check <a href="https://google.com">terms</a> and <a href="https://google.com">conditions</a></div>
  ),
};
