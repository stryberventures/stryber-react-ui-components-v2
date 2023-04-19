import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from '../Form';
import CheckboxGroup, { TChildCheckbox } from './';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme/utils';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes(['onFocus', 'controlled', 'className', 'onChange', 'name', 'heading']),
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [, setSubmittedData] = useState(null);
  const onSubmit = (v: any) => {
    setSubmittedData(v);
  };
  return (
    <>
      <Form
        initialValues={{ firstName: '', colors: [] }}
        onSubmit={onSubmit}
      >
        <CheckboxGroup {...args} />
      </Form>
      <div style={{ height: toRem(48) }} />
    </>
  );
}

const checkboxes = [
  { label: 'Orange', name: 'orange', checked: true },
  { label: 'Red', name: 'red' },
  { label: 'Yellow', name: 'yellow' },
  { label: 'Green', name: 'green', checked: true },
]

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  label: 'Colors',
  name: 'colors',
  checkboxes: checkboxes.map((item, i) =>
    (i == 0 || i == 1) ? { ...item, disabled: true } : item
  ),
  color: 'primary',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  label: 'Colors',
  name: 'colors',
  checkboxes: checkboxes.map((item, i: number) =>
    (i == 0) ? { ...item, disabled: false, hint: 'Hint text' } : { ...item, hint: 'Hint text', }),
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Colors',
  name: 'colors',
  errorMessage: 'Error message',
  checkboxes: checkboxes.map((item: TChildCheckbox, i: number) => ({
    ...(i == 0) ? { ...item, disabled: false, checked: true } : item,
    errorMessage: 'Error message',
  })),
  color: 'error'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Colors',
  name: 'colors',
  disabled: true,
  checkboxes: checkboxes.map((item: TChildCheckbox) => ({
    ...item,
    disabled: true,
  })),
};
