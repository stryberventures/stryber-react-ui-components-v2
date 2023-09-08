import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NumberInput from './index';
import Text from '../Text';
import { toRem } from '../Theme/utils';
import { defaultTheme } from '../Theme/defaultTheme';
import pkg from './package.json';
import './style.css';
import { buildArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    quantityCounter: false,
    controlled: false,
    min: 0,
    max: 100,
    variant: 'labelOutside',
    disabled: false,
    fullWidth: false,
    clearButton: false,
  },
  argTypes: buildArgTypes([
    'name',
    'onChange',
    'onBlur',
    'controlled',
    'prefixClassName',
    'postfixClassName',
    'errorClassName',
    'hintClassName',
    'leftIcon',
    'rightIcon',
    'mask',
    'value',
    'clearButton',
  ]),
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  placeholder: 'Number',
};

export const QuantityCounter = Template.bind({});
QuantityCounter.args = {
  label: 'Quantity counter',
  placeholder: 'Number',
  quantityCounter: true,
  leftIcon: (props) => (
    <Text
      variant="components1"
      style={{
        [props.dir === 'rtl' ? 'marginLeft' : 'marginRight']: toRem(10),
        color: defaultTheme.colors.text.secondary,
      }}
    >
      ₴
    </Text>
  ),
  postfix: 'UAH',
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'Min',
  placeholder: 'Number',
  prefix: '$',
};

Prefix.decorators = [
  (Story) => (
    <div style={{ maxWidth: '102px' }}>
      <Story />
    </div>
  ),
];

export const CustomStep = Template.bind({});
CustomStep.args = {
  label: 'Custom step',
  placeholder: 'Number',
  quantityCounter: true,
  step: 2,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full parent width',
  placeholder: 'Number',
  fullWidth: true,
};

export const Controlled = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (value: number) => {
    if (value > 100) return setValue(100);
    setValue(value);
  };

  return (
    <NumberInput
      controlled
      onChange={handleChange}
      value={value}
      label="Controlled"
      hint="Will not accept values greater than 100"
    />
  );
};
