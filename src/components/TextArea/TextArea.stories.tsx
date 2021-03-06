import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './index';
import pkg from './package.json';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your message',
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

export const MaxLength = Template.bind({});
MaxLength.args = {
  label: 'Your message',
  maxLength: 200,
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'With value',
  value: '"And now I will show you what is really a very interesting study, Mr. Windibank," Holmes continued. "I think of writing another little monograph some of these days on the typewriter and its relation to crime.',
};
