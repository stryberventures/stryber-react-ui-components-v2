import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioButton from './index';
import pkg from './package.json';
import Form from '../Form';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { toRem } from '../../components/Theme';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['name', 'className', 'value', 'onChange', 'onFocus']),
} as ComponentMeta<typeof RadioButton>;

const RadioGroup: ComponentStory<typeof RadioButton> = (args) => (
  <Form initialValues={{ radio: '1' }}>
    <RadioButton {...args} value="1" name="radio" label="Option 1" />
    <div style={{ marginTop: 10 }}/>
    <RadioButton {...args} value="2" name="radio" label="Option 2" />
  </Form>
);

const Radio: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Primary = RadioGroup.bind({});
Primary.args = {
  size: 'medium',
  label: 'Primary'
};

export const Secondary = RadioGroup.bind({});
Secondary.args = {
  size: 'medium',
  label: 'Secondary',
  color: 'secondary',
};

export const Small = RadioGroup.bind({});
Small.args = {
  size: 'small',
  label: 'Small'
};

export const Medium = RadioGroup.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium',
};

export const Disabled = RadioGroup.bind({});
Disabled.args = {
  size: 'medium',
  disabled: true,
  label: 'Disabled',
};

export const Title = Radio.bind({});
Title.args = {
  title: 'Remember me',
};

export const Error = Radio.bind({});
Error.args = {
  label: 'Remember me',
  errorMessage: 'This is a error message'
};

export const TitleAndLabel = Radio.bind({});
TitleAndLabel.args = {
  title: 'Remember me',
  label: 'Save my login details for next time',
};

export const CustomContent = Radio.bind({});
CustomContent.args = {
  label: (
    <div style={{ lineHeight: toRem(22) }}>Check <a href="https://google.com">terms</a> and <a href="https://google.com">conditions</a></div>
  ),
};

export const Reverse = RadioGroup.bind({});
Reverse.args = {
  size: 'medium',
  label: 'Reverse',
  reverse: true,
};

export const FullWidth = RadioGroup.bind({});
FullWidth.args = {
  size: 'medium',
  label: 'Full Width',
  fullWidth: true,
};
