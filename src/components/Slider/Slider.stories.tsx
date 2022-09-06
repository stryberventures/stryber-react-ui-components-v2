import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
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

const TemplateDefault: ComponentStory<typeof Slider> = (args) => (
  <Form>
    <Slider {...args} />
    <Button type="submit" label="Submit" />
  </Form>
);

const TemplateOutsideInput: ComponentStory<typeof Slider> = (args) => {
  const [value, setValue] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = (e: BaseSyntheticEvent) => {
    setValue(Number(e.target.value));
  };
  const max = args?.max || 100;
  useEffect(
    () => {
      if (value <= max) {
        setErrorMessage('');
      } else {
        setErrorMessage('max value exceeded');
      }
    },
    [value]
  );
  return (
    <Form onSubmit={(values) => console.log('values', values)}>
      <Input
        name="test"
        controlled
        type="text"
        value={value.toString()}
        errorMessage={errorMessage}
        onChange={onChange}
      />
      <Slider
        name="test"
        {...args}
        value={value}
        controlled
        onChange={(val) => { setValue(Number(val)); }}
      />
      <Button
        disabled={value > max}
        type="submit"
        label={'Submit'}
      />
    </Form>
  );
}

const TemplateRangeOutsideInput: ComponentStory<typeof Slider> = (args) => {
  const minValue = args?.minValue || 0;
  const maxValue = args?.maxValue || 100;
  const max = args?.max || 100;
  const [minVal, setMinVal] = useState<number>(minValue);
  const [maxVal, setMaxVal] = useState<number>(maxValue);
  const [value, setValue] = useState<number | number[]>([minValue, maxValue]);
  const applyChanges = () => {
    setValue([minVal, maxVal]);
  };
  return (
    <Form>
      <div style={{ display: 'flex', marginBottom: 20, }}>
        <Input
          name="test"
          label="min"
          controlled
          type="text"
          value={minVal.toString()}
          errorMessage={minVal > max ? 'min value cannot be higher than max' : undefined}
          onChange={(e) => setMinVal(Number(e.target.value))}
        />
        <Input
          name="test"
          label="max"
          controlled
          type="text"
          value={maxVal.toString()}
          errorMessage={(maxVal > max ? 'max value exceeded' : undefined) || (maxVal < minVal ? 'max value cannot be lower than min' : undefined)}
          onChange={(e: BaseSyntheticEvent) => setMaxVal(Number(e.target.value))}
        />
        <Button
          type="button"
          size="small"
          disabled={(minVal > maxVal) || (maxVal > max)}
          onClick={applyChanges}
          label="Apply"
        />
      </div>
      <Slider
        name="test"
        {...args}
        value={value}
        controlled
        onChange={(_value: number | number[]) => {
          if (Array.isArray(_value)) {
            setMinVal(_value[0]);
            setMaxVal(_value[1]);
          } else {
            setMinVal(_value);
          }
          setValue(_value);
        }}
      />
      <Button
        type="submit"
        label={'Submit'}
      />
    </Form>
  );
}

export const Default = TemplateDefault.bind({});
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
};

export const RangeOutsideInput = TemplateRangeOutsideInput.bind({});
RangeOutsideInput.args = {
  min: 0,
  max: 1000,
  thumbLabels: 'tooltip',
  rangeSlider: true,
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
