import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './index';
import pkg from './package.json';
import { CreditCardIcon, InfoIcon } from '../Icons';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['name', 'controlled', 'onChange', 'rightIcon',
    'leftIcon', 'onBlur', 'prefixClassName', 'contentClassName', 'hintClassName', 'errorClassName']),
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
  fullWidth: true,
  label: 'Fits parent width',
  placeholder: 'olivia@example.com',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: 'Left icon',
  placeholder: 'placeholder@example.com',
  value: 'olivia@example.com',
  leftIcon: <CreditCardIcon style={{ marginRight: toRem(10) }} />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: 'End adornment',
  placeholder: 'placeholder@example.com',
  value: 'olivia@example.com',
  rightIcon: <InfoIcon style={{ marginLeft: toRem(10) }} />,
};

export const IconBothSides = Template.bind({});
IconBothSides.args = {
  label: 'End adornment',
  placeholder: 'placeholder@example.com',
  value: 'olivia@example.com',
  leftIcon: <CreditCardIcon style={{ marginRight: toRem(10) }} />,
  rightIcon: <InfoIcon style={{ marginLeft: toRem(10) }} />,
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

export const ClearButton = Template.bind({});
ClearButton.args = {
  label: 'Clear button',
  placeholder: 'olivia@example.com',
  value: 'olivia@example.com',
  variant: 'floatingLabel',
  clearButton: true,
};
