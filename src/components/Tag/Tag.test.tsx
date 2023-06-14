import '@testing-library/jest-dom';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Tag from './index';
import LeftArrow from '../../storybook/icons/leftArrow';
import RightArrow from '../../storybook/icons/rightArrow';

it('should be rendered', () => {
  const text = 'Tag';
  render(<Tag>{text}</Tag>);
  const tagElement = screen.getByText(text);
  expect(tagElement).toBeVisible();
});

it('should have left icon', () => {
  const testId = 'leftArrow';
  render(<Tag iconLeft={<LeftArrow />}>Tag</Tag>);
  const tagElement = screen.getByTestId(testId);
  expect(tagElement).toBeVisible();
});

it('should have right icon', () => {
  const testId = 'rightArrow';
  render(<Tag iconLeft={<RightArrow />}>Tag</Tag>);
  const tagElement = screen.getByTestId(testId);
  expect(tagElement).toBeVisible();
});

it('should call onSelect', () => {
  const testId = 'tag';
  const onSelect = jest.fn();
  render(
    <Tag testId={testId} onSelect={onSelect}>
      Tag
    </Tag>
  );
  const tag = screen.getByTestId(testId);
  fireEvent.click(tag);
  expect(onSelect).toHaveBeenCalled();
});

it('should call onRemove', () => {
  const testId = 'closeIconRound';
  const onRemove = jest.fn();
  render(<Tag onRemove={onRemove}>Tag</Tag>);
  const removeIcon = screen.getByTestId(testId);
  fireEvent.click(removeIcon);
  expect(onRemove).toHaveBeenCalled();
});

it('should not call onSelect when onRemove is called', () => {
  const testId = 'closeIconRound';
  const onSelect = jest.fn();
  const onRemove = jest.fn();
  render(
    <Tag onSelect={onSelect} onRemove={onRemove}>
      Tag
    </Tag>
  );
  const removeIcon = screen.getByTestId(testId);
  fireEvent.click(removeIcon);
  expect(onRemove).toHaveBeenCalled();
  expect(onSelect).not.toHaveBeenCalled();
});
