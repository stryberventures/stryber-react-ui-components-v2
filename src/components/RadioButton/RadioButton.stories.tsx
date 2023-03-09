import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from '../Form';
import RadioButton from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
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
  argTypes: buildExcludeArgTypes(['name', 'className', 'value', 'onChange', 'onFocus', 'errorMessage', 'heading', 'label', 'size', 'title',]),
} as ComponentMeta<typeof RadioButton>;

const radioButton = {
  value: '1',
  name: 'radio',
  label: 'Option 1',
};
const Radio: ComponentStory<typeof RadioButton> = (args) => {
  return (
    <Form>
      <RadioButton {...args} />
    </Form>
  );
};

export const Primary = Radio.bind({});
Primary.args = {
  ...radioButton,
  hint: 'Advocates for every stakeholder',
};

export const Secondary = Radio.bind({});
Secondary.args = {
  color: 'secondary',
  ...radioButton,
};

export const HintOnly = Radio.bind({});
HintOnly.args = {
  ...radioButton,
  label: '',
  hint: 'Advocates for every stakeholder',
};

export const Error = Radio.bind({});
Error.args = {
  label: 'Error',
  errorMessage: 'This is a error message',
  color: 'error',
};

export const Disabled = Radio.bind({});
Disabled.args = {
  disabled: true,
  hint: 'Advocates for every stakeholder',
};

export const FullWidth = Radio.bind({});
FullWidth.args = {
  ...radioButton,
  fullWidth: true,
};

export const CustomContent = Radio.bind({});
CustomContent.args = {
  ...radioButton,
  label: (
    <div style={{ lineHeight: toRem(22) }}>Check <a href="https://google.com">terms</a> and <a href="https://google.com">conditions</a></div>
  ),
};

export const Reverse = Radio.bind({});
Reverse.args = {
  ...radioButton,
  reverse: true,
  fullWidth: true,
};
