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
  sliderVersion: 'basic'
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
