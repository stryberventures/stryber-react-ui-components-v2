import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchInput from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    placeholder: 'Search',
    size: 'medium',
    disabled: false,
    fullWidth: false,
  },
  argTypes: buildExcludeArgTypes(['name', 'value', 'className', 'onFocus', 'onChange', 'controlled', 'errorMessage', 'onBlur', 'prefix', 'prefixClassName', 'errorMessage', 'hintClassName', 'leftIcon', 'rightIcon', 'errorClassName', 'mask', 'label', 'variant', 'postfix', 'postfixClassName', 'clearButton']),
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Hint = Template.bind({});
Hint.args = {
  value: 'Violet bananas',
  hint: 'No option found',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

