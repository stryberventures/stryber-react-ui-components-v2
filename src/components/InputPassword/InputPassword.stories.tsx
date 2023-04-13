import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputPassword from './index';
import { buildExcludeArgTypes } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'Components/InputPassword',
  component: InputPassword,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    variant: 'labelOutside',
    disabled: false,
    fullWidth: false,
  },
  argTypes: buildExcludeArgTypes(['value', 'name', 'controlled', 'onChange', 'mask',
    'onBlur', 'onValidationChange', 'validationSchema', 'prefixClassName', 'errorClassName', 'hintClassName',
    'prefix', 'prefixClassName', 'postfix', 'postfixClassName', 'clearButton', 'leftIcon'
  ]),
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) =>
  <InputPassword {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Input password',
  placeholder: 'Enter password',
  value: 'Value',
};

export const Validation = Template.bind({});
Validation.args = {
  label: 'Input password',
  placeholder: 'Enter password',
  value: 'something',
  onValidationChange: (valid) => { console.log('valid', valid); },
  validationSchema: [{
    label: 'Number',
    rule: /(?=.*\d).{1,}/gm,
  },
  {
    label: 'Uppercase',
    rule: /(?=[A-Z]).{1,}$/gm,
  },
  {
    label: 'Lowercase',
    rule: /(?=[a-z]).{1,}$/gm,
  }]
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Input password',
  placeholder: 'Disabled',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Input password',
  placeholder: 'Enter password',
  errorMessage: 'Field is required'
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Input password',
  placeholder: 'Enter password',
  hint: 'This is a hint',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Input password',
  placeholder: 'Enter password',
  fullWidth: true,
};
