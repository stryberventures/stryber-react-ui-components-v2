import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Multiselect } from './index';

export default {
  title: 'Components/Multiselect',
  component: Multiselect,
} as ComponentMeta<typeof Multiselect>;

const Template: ComponentStory<typeof Multiselect> = (args) =>
  <Multiselect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Multiselect',
  placeholder: 'Select an option',
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Multiselect',
  placeholder: 'Select an option',
  color: 'secondary',
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Multiselect',
  placeholder: 'Disabled',
  disabled: true,
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};

export const Error = Template.bind({});
Error.args = {
  label: 'Multiselect',
  placeholder: 'with an error',
  error: 'Error message',
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Multiselect',
  placeholder: 'Disabled',
  hint: 'Hint message',
  options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
};
