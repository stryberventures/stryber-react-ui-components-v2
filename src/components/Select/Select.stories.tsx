import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './index';
import { buildArgTypes } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    pkg,
  },
  args: {
    label: 'Select',
    placeholder: 'Select an option',
    options: [
      { value: 1, label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
      { value: '4', label: 'Four' },
      { value: '5', label: 'Five' },
      { value: '6', label: 'Six' },
      { value: '7', label: 'Seven' },
    ],
    color: 'primary',
    inputVariant: 'labelOutside',
    disabled: false,
    fullWidth: false,
  },
  argTypes: buildArgTypes([
    'name',
    'onChange',
    'onToggle',
    'className',
    'value',
  ]),
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'Hint message',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};
