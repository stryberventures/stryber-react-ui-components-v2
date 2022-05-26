import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputPassword } from './index';

export default {
  title: 'Components/InputPassword',
  component: InputPassword,
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) =>
  <InputPassword {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Input password',
  placeholder: 'Enter password',
  value: 'Value',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Input password',
  placeholder: 'Disabled',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Input password',
  placeholder: 'Enter password',
  errorMessage: 'Field is required'
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Input password',
  placeholder: 'Enter password',
  hint: 'This is a hint',
};
