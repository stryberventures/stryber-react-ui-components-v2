import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './index';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const children = (
  <div style={{ padding: 8 }}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children,
  label: 'Dropdown',
  placeholder: 'with custom content',
  onToggle: (open) => { console.log('onToggle', open) },
};

export const Disabled = Template.bind({});
Disabled.args = {
  children,
  label: 'Dropdown',
  placeholder: 'which is disabled',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  children,
  label: 'Dropdown',
  placeholder: 'with an error',
  error: 'Error message',
};

export const Hint = Template.bind({});
Hint.args = {
  children,
  label: 'Dropdown',
  placeholder: 'with a hint',
  hint: 'Hint message',
};
