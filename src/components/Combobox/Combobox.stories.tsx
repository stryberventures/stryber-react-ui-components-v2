import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Combobox from './index';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Combobox',
  component: Combobox,
  args: {
    label: 'Combobox',
    placeholder: 'Start typing...',
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
    noOptionsFoundText: 'No options found',
    disabled: false,
    fullWidth: false,
  },
  argTypes: buildArgTypes(['name', 'onChange', 'onToggle', 'className', 'value',
    'rightIcon', 'onOutsideClick', 'inputReadOnly', 'onInputChange', 'contentClassName']),
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args) => <Combobox {...args} />;

export const Default = Template.bind({});
Default.args = {
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
