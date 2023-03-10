import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    disabled: false,
    fullWidth: false,
  },
  argTypes: buildExcludeArgTypes(['name', 'value', 'className', 'onFocus', 'onChange', 'controlled', 'size', 'errorMessage', 'onBlur', 'prefix', 'prefixClassName', 'errorMessage', 'hintClassName', 'leftIcon', 'rightIcon', 'errorClassName', 'mask', 'label', 'variant']),
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  hint: 'Write a hint message here',
  clearButton: true,
};
