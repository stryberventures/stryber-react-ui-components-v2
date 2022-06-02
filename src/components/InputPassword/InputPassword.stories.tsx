import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputPassword } from './index';

export default {
  title: 'Components/InputPassword',
  component: InputPassword,
  argTypes: {
    validationScheme: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    controlled: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
  },
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
  validationScheme: [{
    id: 'numbers',
    label: 'Number',
    rule: /(?=.*\d).{1,}/gm,
  },
  {
    id: 'uppercase',
    label: 'Uppercase',
    rule: /(?=[A-Z]).{1,}$/gm,
  },
  {
    id: 'lowercase',
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
