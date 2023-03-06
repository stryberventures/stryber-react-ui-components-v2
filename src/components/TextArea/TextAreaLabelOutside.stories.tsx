import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/TextArea/LabelOutside',
  component: TextArea,
  parameters: {
    pkg,
  },
  args: {
    variant: 'labelOutside',
    color: 'primary',
    disabled: false,
    showLength: false,
    fullWidth: false,
  },
  argTypes: buildExcludeArgTypes(['name', 'controlled', 'onChange', 'onBlur', 'maxLengthClassName', 'id']),
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Your message',
  placeholder: 'Your message',
  id: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Your message',
  color: 'secondary',
  id: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  id: 'withValue',
  label: 'With value',
  value: '"And now I will show you what is really a very interesting study, Mr. Windibank," Holmes continued. "I think of writing another little monograph some of these days on the typewriter and its relation to crime.',
};

export const Hint = Template.bind({});
Hint.args = {
  id: 'withHintMessage',
  label: 'With hint message',
  hint: 'Hint message',
};

export const Error = Template.bind({});
Error.args = {
  id: 'withError',
  label: 'With error',
  errorMessage: 'This is an error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled',
  label: 'Disabled',
  disabled: true,
  value: 'Disabled text',
};

export const WithLengthIndicator = Template.bind({});
WithLengthIndicator.args = {
  id: 'withLengthIndicator',
  label: 'With length indicator',
  disabled: true,
  showLength: true,
  maxLength: 300,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  id: 'fullWidth',
  label: 'Full Width',
  fullWidth: true,
  hint: 'And now I will show you what is really a very interesting study, Mr. Windibank',
};
