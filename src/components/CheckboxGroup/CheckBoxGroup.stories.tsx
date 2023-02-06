import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from '../Form';
import Button from '../Button';
import Text from '../Text';
import Elevation from '../Elevation';
import CheckboxGroup, { TChildCheckbox } from './';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import toRem from '../../utils/toRem';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['onFocus', 'controlled', 'className', 'onChange']),
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [submittedData, setSubmittedData] = useState(null);
  const onSubmit = (v: any) => {
    setSubmittedData(v);
  };
  const displayValues = (values: string | number | TChildCheckbox[]): string => {
    let value = '';
    if (typeof values == 'string' || typeof values == 'number') {
      value = values.toString();
    }
    if (Array.isArray(values)) {
      value = values
        .reduce(
          (acc: string[], item: TChildCheckbox) => item.checked ? [...acc, item.label] : acc,
          []
        )
        .join(', ');
    }
    return value;
  };
  return (
    <>
      <Form
        initialValues={{ firstName: '', colors: [] }}
        onSubmit={onSubmit}
      >
        <CheckboxGroup {...args} />
        <Button
          disabled={args.disabled}
          color={args.color}
          type="submit"
          style={{ marginTop: toRem(24) }}
        >
          Submit
        </Button>
      </Form>
      <div style={{ height: toRem(48) }} />
      {
        submittedData && (
          <Elevation>
            <div style={{ padding: toRem(10),  }}>
              {Object.keys(submittedData).map((name) => {
                return (
                  <div key={name}>
                    <Text
                      variant="components2"
                      weight="bold"
                      style={{ marginRight: toRem(12) }}
                    >
                      {name}
                    </Text>
                    <Text
                      key={name}
                      variant="components2"
                    >
                      {displayValues(submittedData?.[name])}
                    </Text>
                  </div>
                )
              })}
            </div>
          </Elevation>
        )
      }
    </>
  );
}

const checkboxes = [
  { label: 'Orange', name: 'orange', checked: true },
  { label: 'Red', name: 'red' },
  { label: 'Yellow', name: 'yellow' },
  { label: 'Green', name: 'green', checked: true },
]

export const Default = Template.bind({});
Default.args = {
  label: 'Colors',
  name: 'colors',
  checkboxes: checkboxes.map((item, i) =>
    (i == 0 || i == 1) ? { ...item, disabled: true } : item
  ),
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Colors',
  name: 'colors',
  checkboxes: checkboxes.map((item, i: number) =>
    (i == 0) ? { ...item, disabled: true, hint: 'Hint text' } : { ...item, hint: 'Hint text', }),
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Colors',
  name: 'colors',
  error: 'Test error',
  checkboxes: checkboxes.map((item: TChildCheckbox, i: number) => ({
    ...(i == 0) ? { ...item, disabled: true, checked: false } : item,
    error: (i != 0) ? 'Test error' : '',
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
