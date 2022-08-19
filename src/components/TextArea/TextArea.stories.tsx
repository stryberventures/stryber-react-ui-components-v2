import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['value', 'name', 'controlled', 'onChange', 'maxLengthClassName']),
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your message',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Your message',
  color: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'With error',
  errorMessage: 'This is an error message',
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'With hint message',
  hint: 'Hint message',
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  label: 'Your message',
  showLength: true,
  maxLength: 200,
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'With value',
  value: '"And now I will show you what is really a very interesting study, Mr. Windibank," Holmes continued. "I think of writing another little monograph some of these days on the typewriter and its relation to crime.',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width',
  value: '"And now I will show you what is really a very interesting study, Mr. Windibank," Holmes continued. "I think of writing another little monograph some of these days on the typewriter and its relation to crime.',
  fullWidth: true,
};
