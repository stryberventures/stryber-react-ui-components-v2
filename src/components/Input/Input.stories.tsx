import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './index';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  placeholder: 'olivia@example.com',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'With value',
  placeholder: 'placeholder@example.com',
  value: 'olivia@example.com',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  placeholder: 'olivia@example.com',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'With error',
  placeholder: 'olivia@example.com',
  errorMessage: 'Error message',
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'With hint',
  placeholder: 'olivia@example.com',
  hint: 'Hint message',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Read only',
  placeholder: 'olivia@example.com',
  value: 'olivia@example.com',
  readOnly: true,
};


export const EndAdornment = Template.bind({});
EndAdornment.args = {
  label: 'End adornment',
  placeholder: 'placeholder@example.com',
  value: 'olivia@example.com',
  endAdornment: <div style={
    {
      width: 32,
      height: 32,
      backgroundColor: '#D0D5DD',
      borderRadius: 16,
      lineHeight: '32px',
      textAlign: 'center',
      color: 'white',
    }
  }>O</div>
};

export const Mask = Template.bind({});
Mask.args = {
  label: 'Digit mask',
  mask: '+X (XXX) XX-XX-XXX',
  placeholder: '+0 (000) 00-00-000',
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'Prefix',
  prefix: 'G-',
  mask: 'XXX-XXX',
  placeholder: 'XXX-XXX',
};
