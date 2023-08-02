import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Multiselect from './index';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';
import { QuestionIcon } from '../Icons';

const icon = <QuestionIcon />;

const options = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 5, label: 'Five' },
  { value: 6, label: 'Six' },
  { value: 7, label: 'Seven' },
];

export default {
  title: 'Components/Multiselect',
  component: Multiselect,
  parameters: {
    pkg,
  },
  args: {
    label: 'Multiselect',
    placeholder: 'Select an option',
    options,
    color: 'primary',
    inputVariant: 'labelOutside',
    disabled: false,
    fullWidth: false,
  },
  argTypes: buildArgTypes([
    'name',
    'onChange',
    'className',
    'onToggle',
    'value',
  ]),
} as ComponentMeta<typeof Multiselect>;

const Template: ComponentStory<typeof Multiselect> = (args) => (
  <Multiselect {...args} />
);

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
  placeholder: 'Full Width',
  fullWidth: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'With Icon',
  options: options.map((option) => ({ ...option, icon })),
};
