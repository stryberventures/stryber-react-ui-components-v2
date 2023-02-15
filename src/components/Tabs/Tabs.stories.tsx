import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from './index';
import Placeholder from '../../storybook/icons/placeholder';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Button',
  component: Tabs,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    size: 'medium',
    shape: 'round',
    variant: 'contained',
    disabled: false,
    fullWidth: false,
  },
  argTypes: buildExcludeArgTypes(['className', 'children']),
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
};
