import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from '../Form';
import RadioButton from './index';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';
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
  argTypes: buildArgTypes([
    'name',
    'className',
    'value',
    'onChange',
    'onFocus',
    'errorMessage',
    'heading',
    'label',
    'size',
    'title',
  ]),
} as ComponentMeta<typeof RadioButton>;

const radioButtons = [
  {
    value: '1',
    name: 'radio',
    label: 'Option 1',
  },
  {
    value: '2',
    name: 'radio',
    label: 'Option 2',
  },
];
const Radio: ComponentStory<typeof RadioButton> = (args) => {
  return (
    <Form>
      {radioButtons.map((radioButton) => {
        return (
          <RadioButton key={radioButton.value} {...radioButton} {...args} />
        );
      })}
    </Form>
  );
};

export const Primary = Radio.bind({});
Primary.args = {
  hint: 'Advocates for every stakeholder',
};

export const Secondary = Radio.bind({});
Secondary.args = {
  color: 'secondary',
};

export const HintOnly = Radio.bind({});
HintOnly.args = {
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
  fullWidth: true,
};

export const CustomContent = Radio.bind({});
CustomContent.args = {
  label: (
    <div style={{ lineHeight: toRem(22) }}>
      Check <a href="https://google.com">terms</a> and{' '}
      <a href="https://google.com">conditions</a>
    </div>
  ),
};

export const Reverse = Radio.bind({});
Reverse.args = {
  reverse: true,
  fullWidth: true,
};
