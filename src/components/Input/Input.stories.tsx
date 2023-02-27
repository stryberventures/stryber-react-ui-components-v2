import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['name', 'controlled', 'onChange', 'endAdornment',
    'onBlur', 'prefixClassName', 'contentClassName', 'hintClassName', 'errorClassName']),
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  label: 'Color primary',
  placeholder: 'olivia@example.com',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  label: 'Color secondary',
  color: 'secondary',
  placeholder: 'olivia@example.com',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'With value',
  placeholder: 'placeholder@example.com',
  value: 'olivia@example.com',
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  label: 'Highlighted',
  placeholder: 'placeholder@example.com',
  value: 'olivia@example.com',
  highlighted: true,
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

export const NoLabel = Template.bind({});
NoLabel.args = {
  placeholder: 'olivia@example.com',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Fits parent width',
  placeholder: 'olivia@example.com',
  fullWidth: true,
};

export const BeginAdornment = Template.bind({});
BeginAdornment.args = {
  label: 'Begin adornment',
  placeholder: 'placeholder@example.com',
  value: 'olivia@example.com',
  beginAdornment: <div style={
    {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      width: toRem(32),
      height: toRem(32),
      marginRight: toRem(10),
      backgroundColor: '#D0D5DD',
      borderRadius: toRem(16),
      lineHeight: toRem(32),
      textAlign: 'center',
      color: 'white',
    }
  }>O</div>
};

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  label: 'End adornment',
  placeholder: 'placeholder@example.com',
  value: 'olivia@example.com',
  endAdornment: <div style={
    {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      width: toRem(32),
      height: toRem(32),
      marginLeft: toRem(10),
      backgroundColor: '#D0D5DD',
      borderRadius: toRem(16),
      lineHeight: toRem(32),
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
