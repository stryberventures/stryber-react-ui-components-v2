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
    placeholder: 'Your message',
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
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Your message',
  color: 'secondary',
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
  disabled: true,
  value: 'Disabled text',
};

export const WithLengthIndicator = Template.bind({});
WithLengthIndicator.args = {
  label: 'With length indicator',
  disabled: true,
  showLength: true,
  maxLength: 300,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width',
  fullWidth: true,
  hint: 'And now I will show you what is really a very interesting study, Mr. Windibank',
};
