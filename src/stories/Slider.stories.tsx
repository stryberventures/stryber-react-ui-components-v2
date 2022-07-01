import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from '../components/Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  controlled: true,
};
Default.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const Range = Template.bind({});
Range.args = {
  controlled: true,
  sliderVersion: 'range'
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
  controlled: true,
  step: 2,
  showStepMarks: true,
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
  controlled: true,
  sliderVersion: 'range',
  step: 2,
  thumbLabels: 'inputs'
};
RangeInputs.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];
