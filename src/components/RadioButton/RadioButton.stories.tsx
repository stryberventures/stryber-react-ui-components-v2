import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButton } from './index';
import pkg from './package.json';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

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

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  disabled: true,
  checked: true,
  label: 'Disabled',
};

export const Title = Template.bind({});
Title.args = {
  title: 'Remember me',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Remember me',
  errorMessage: 'This is a error message'
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
