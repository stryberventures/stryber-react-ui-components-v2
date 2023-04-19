import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from './index';
import Form from '../Form';
import Button from '../Button';
import Text from '../Text';
import TextLink from '../TextLink';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme';
import * as yup from 'yup';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    disabled: false,
    fullWidth: false,
    reverse: false,
    shape: 'square',
    alignControl: 'top',
    name: 'checkbox',
  },
  argTypes: buildArgTypes(['onFocus', 'controlled', 'className', 'onChange', 'value', 'title', 'heading', 'name']),
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  hint: 'Advocates for every stakeholder',
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
};

export const HintOnly = Template.bind({});
HintOnly.args = {
  hint: 'Advocates for every stakeholder',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Remember me',
  errorMessage: 'This is a error message',
  color: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
  checked: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width',
  fullWidth: true,
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
  label: 'Circle',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: (
    <div style={{ lineHeight: toRem(20) }}>Check <a href="https://google.com">terms</a> and <a href="https://google.com">conditions</a></div>
  ),
};

export const Reverse = Template.bind({});
Reverse.args = {
  label: 'Reverse',
  reverse: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  checked: true,
  label: 'Checkbox label Checkbox label Checkbox label Checkbox label Checkbox',
  hint: 'Write a check box sentence here Write a check box sentence here Write a check box sentence here',
};

Multiline.decorators = [
  (Story) => (
    <div style={{ width: '400px' }}>
      <Story />
    </div>
  ),
];

const validationSchema = yup.object({
  checkbox1: yup.bool().oneOf([true], 'Error message').required(),
  checkbox2: yup.bool().oneOf([true], 'Error message').required(),
})
const TemplateWithValidation: ComponentStory<typeof CheckBox> = (args) => {
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <Form
      validationSchema={validationSchema}
      onError={(errorData) => {
        setErrorMessage(errorData?.checkbox);
      }}
    >
      <CheckBox
        name="checkbox1"
        label="Checkbox with validation"
        color={errorMessage ? 'error' : 'primary'}
      />
      <CheckBox
        name="checkbox2"
        label={(
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: toRem(4) }} variant="components2">Custom label with </Text>
            <TextLink target="_blank" href={'#'} variant="body3">text link </TextLink>
          </div>
        )}
        color={errorMessage ? 'error' : 'primary'}
      />
      <Button
        style={{ marginTop: toRem(32) }}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export const WithValidation = TemplateWithValidation.bind({});
