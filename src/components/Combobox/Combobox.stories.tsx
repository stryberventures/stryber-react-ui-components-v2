import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Combobox from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Combobox',
  component: Combobox,
  argTypes: buildExcludeArgTypes(['name', 'onChange', 'onToggle', 'className', 'value',
    'inputReadOnly', 'onInputChange', 'contentClassName']),
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args) => <Combobox {...args} />;

const options = [
  { value: '1', label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 312, label: 'Five' },
  { value: 'str', label: 'Six' },
  { value: 'val', label: 'Seven' },
];

export const Default = Template.bind({});
Default.args = {
  options,
  label: 'Combobox',
  placeholder: 'Placeholder'
};

export const Disabled = Template.bind({});
Disabled.args = {
  options,
  label: 'Combobox',
  placeholder: 'Disabled',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  options,
  label: 'Combobox',
  placeholder: 'Placeholder',
  error: 'Error message',
};

export const Hint = Template.bind({});
Hint.args = {
  options,
  label: 'Combobox',
  placeholder: 'Placeholder',
  hint: 'Hint message',
};

export const NoOptionsFoundText = Template.bind({});
NoOptionsFoundText.args = {
  options,
  label: 'Combobox',
  placeholder: 'Placeholder',
  noOptionsFoundText: 'Your custom message',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  options,
  label: 'Combobox',
  placeholder: 'Placeholder',
  fullWidth: true,
};
