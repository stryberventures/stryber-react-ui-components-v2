import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './index';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    pkg,
  },
  args: {
    label: 'Dropdown',
    placeholder: 'with custom content',
    color: 'primary',
    inputVariant: 'labelOutside',
    children: (
      <div style={{ padding: 8 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    ),
    fullWidth: false,
    disabled: false,
  },
  argTypes: buildArgTypes(['name', 'onToggle', 'className', 'onOutsideClick',
    'inputReadOnly', 'onInputChange', 'contentClassName', 'children', 'value', 'rightIcon']),
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  onToggle: (open) => { console.log('onToggle', open) },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'Hint message',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};
