import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Tooltip from './index'

it('should be rendered with title', () => {
  const children = 'Tooltip target';
  render(<Tooltip title="title">{children}</Tooltip>);
  expect(screen.queryByText(children)).toBeInTheDocument();
});

it('should not display the content', () => {
  const title = 'Tooltip title';
  const text = 'Tooltip text';
  render(<Tooltip title={title} text={text}>Tooltip target</Tooltip>);
  expect(screen.queryByText(title)).not.toBeInTheDocument();
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

it('should display the text content after hover', () => {
  const title = 'Tooltip title';
  const text = 'Tooltip text';
  render(<Tooltip title={title} text={text}>Tooltip target</Tooltip>);
  fireEvent.mouseOver(screen.getByText(/Tooltip target/i));
  expect(screen.queryByText(title)).toBeInTheDocument();
  expect(screen.queryByText(text)).toBeInTheDocument();
});

it('should display the content after hover', () => {
  const title = 'Tooltip title';
  const titleTestId = 'test-title-component';
  const titleComponent = <span data-testid={titleTestId}>{title}</span>
  const text = 'Tooltip text';
  const textTestId = 'test-text-component';
  const textComponent = <span data-testid={textTestId}>{text}</span>
  render(<Tooltip title={titleComponent} text={textComponent}>Tooltip target</Tooltip>);
  fireEvent.mouseOver(screen.getByText(/Tooltip target/i));
  expect(screen.queryByTestId(titleTestId)).toBeInTheDocument();
  expect(screen.queryByTestId(textTestId)).toBeInTheDocument();
});

it('should not display the content after not hover', () => {
  const title = 'Tooltip title';
  render(<Tooltip title={title}>Tooltip target</Tooltip>);
  fireEvent.mouseLeave(screen.getByText(/Tooltip target/i));
  expect(screen.queryByText(title)).not.toBeInTheDocument();
});

it('should contain version and position classes', () => {
  render(<Tooltip title="title" version="light" position="top">Tooltip target</Tooltip>);
  fireEvent.mouseOver(screen.getByText(/Tooltip target/i));
  const tooltipContainer = screen.getByRole('tooltip');
  expect(tooltipContainer.className).toMatch('light');
  expect(tooltipContainer.className).toMatch('top');
});

it('should show close button if in visible mod', () => {
  const visible = true;
  render(<Tooltip title="title" visible={visible}>Tooltip target</Tooltip>);
  const closeBtn = screen.getByTestId('testCloseBtn');
  expect(closeBtn).toBeInTheDocument();
});

it('should hide tooltip on close button click', () => {
  render(<Tooltip title="title" visible={true}>Tooltip target</Tooltip>);
  const closeBtn = screen.getByTestId('testCloseBtn');
  const tooltip = screen.getByRole('tooltip');
  fireEvent.click(closeBtn);
  expect(tooltip).not.toBeInTheDocument();
});
