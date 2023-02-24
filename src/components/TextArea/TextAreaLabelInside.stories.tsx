import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/TextArea/LabelInside',
  component: TextArea,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['name', 'controlled', 'onChange', 'onBlur', 'maxLengthClassName']),
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Your message',
  placeholder: 'Your message',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Your message',
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'With value',
  value: '"And now I will show you what is really a very interesting study, Mr. Windibank," Holmes continued. "I think of writing another little monograph some of these days on the typewriter and its relation to crime.',
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'With hint message',
  hint: 'Hint message',
};

export const Error = Template.bind({});
Error.args = {
  label: 'With error',
  errorMessage: 'This is an error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  value: '"And now I will show you what is really a very interesting study, Mr. Windibank," Holmes continued. "I think of writing another little monograph some of these days on the typewriter and its relation to crime.',
  disabled: true,
};

export const WithLengthIndicator = Template.bind({});
WithLengthIndicator.args = {
  label: 'With length indicator',
  showLength: true,
  maxLength: 300,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width',
  hint: 'And now I will show you what is really a very interesting study, Mr. Windibank',
  fullWidth: true,
  showLength: true,
  maxLength: 300,
};
