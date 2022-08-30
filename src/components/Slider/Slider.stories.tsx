import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from '../Form';
import Input from '../Input';
import Slider from './index';
import Button from '../Button';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['onChange', 'name']),
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

const TemplateOutsideInput: ComponentStory<typeof Slider> = (args) => {
  const [value, setValue] = useState([0]);
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = (e: React.SyntheticEvent) => {
    setValue([Number(e.target.value)]);
  };
  useEffect(
    () => {
      if (value[0] <= args.max) {
        setErrorMessage('');
      } else {
        setErrorMessage('max value exceeded');
      }
    },
    [value]
  );
  return (
    <Form>
      <Input
        name="test"
        controlled
        type="text"
        value={value}
        errorMessage={errorMessage}
        onChange={onChange}
      />
      <Slider
        name="test"
        {...args}
        values={value}
        controlled
        onChange={(val) => { setValue([Number(val)]); }}
      />
      <Button
        type="submit"
        label={'Submit'}
      />
    </Form>
  );
}

const TemplateRangeOutsideInput: ComponentStory<typeof Slider> = (args) => {
  const [values, setValue] = useState<number[]>([args.min, args.max]);
  const onMinChange = (e) => {
    const value = e.target.value;
    value <= values[1] && setValue([Number(value), values[1]]);
  };
  const onMaxChange = (e) => setValue([values[0], Number(e.target.value)]);
  return (
    <Form>
      <Input
        name="test"
        label="min"
        controlled
        type="text"
        value={values[0]}
        onChange={onMinChange}
      />
      <Input
        name="test"
        label="max"
        controlled
        type="text"
        value={values[1]}
        errorMessage={values[1] > args.max && 'max value exceeded'}
        onChange={onMaxChange}
      />
      <Slider
        name="test"
        {...args}
        values={values}
        controlled
        onChange={setValue}
      />
      <Button
        type="submit"
        label={'Submit'}
      />
    </Form>
  );
}

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 10,
  thumbLabels: 'tooltip'
};
Default.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const DefaultInputs = Template.bind({});
DefaultInputs.args = {
  min: 0,
  max: 10,
  thumbLabels: 'input'
};

export const OutsideInput = TemplateOutsideInput.bind({});
OutsideInput.args = {
  min: 0,
  max: 100,
  thumbLabels: 'tooltip',
  onChange: () => undefined,
};

export const RangeOutsideInput = TemplateRangeOutsideInput.bind({});
RangeOutsideInput.args = {
  min: 0,
  max: 1000,
  thumbLabels: 'tooltip',
  rangeSlider: true,
  onChange: () => undefined,
};

DefaultInputs.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const Range = Template.bind({});
Range.args = {
  rangeSlider: true,
  thumbLabels: 'tooltip'
};
Range.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const CustomStep = Template.bind({});
CustomStep.args = {
  step: 2,
  showStepMarks: true,
  thumbLabels: 'tooltip'
};
CustomStep.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const RangeInputs = Template.bind({});
RangeInputs.args = {
  rangeSlider: true,
  step: 2,
  thumbLabels: 'input'
};
RangeInputs.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];
export const RangeMinDistance = Template.bind({});
RangeMinDistance.args = {
  minValue: 6,
  maxValue: 10,
  rangeSlider: true,
  minDistance: 2,
  thumbLabels: 'tooltip'
};
RangeMinDistance.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const StepDotsIndicator = Template.bind({});
StepDotsIndicator.args = {
  min: 0,
  max: 10,
  showStepMarks: true,
  thumbLabels: 'tooltip'
};
StepDotsIndicator.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];
