import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Slider } from './index'

it('should render min ,max, sliderVersion, step', () => {
  const min = 30
  const max = 50
  render(<Slider thumbLabels='none' min={min} max={max}/>)
  expect(screen.queryByText(min)).toBeInTheDocument();
  expect(screen.queryByText(max)).toBeInTheDocument();
});

it('should show sideLabels', () => {
  const showSideLabels = true;
  render(<Slider showSideLabels={showSideLabels}/>);
  const label = screen.getByTestId('testLabelID');
  expect(label).toBeInTheDocument();
});

it('should show thumbLabels', () => {
  const thumbLabels = 'labels';
  render(<Slider thumbLabels={thumbLabels}/>);
  const label = screen.getByTestId('testThumbLabelID');
  expect(label).toBeInTheDocument();
});

it('should show thumbInputs', () => {
  const thumbLabels = 'inputs';
  render(<Slider thumbLabels={thumbLabels}/>);
  const label = screen.getByTestId('testThumbInputID');
  expect(label).toBeInTheDocument();
});

it('should show secondThumb', () => {
  const sliderVersion = 'range';
  render(<Slider sliderVersion={sliderVersion}/>);
  const range = screen.getByTestId('testSecondInputID');
  expect(range).toBeInTheDocument();
});

it('should show stepMarks', () => {
  const showStepMarks = true;
  const step = 2;
  render(<Slider step={step} showStepMarks={showStepMarks}/>);
  const stepMarks = screen.getByTestId('testStepMarksID');
  expect(stepMarks).toBeInTheDocument();
});

