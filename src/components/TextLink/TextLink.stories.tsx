import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextLink from './index';
import { LoadIcon, HomeIcon, CalendarIcon } from '../Icons';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/TextLink',
  component: TextLink,
  parameters: {
    pkg,
  },
  args: {
    color: 'primary',
    variant: 'body2',
    weight: 'regular',
    disabled: false,
  },
  argTypes: buildArgTypes(['iconLeft', 'iconRight', 'className']),
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => <TextLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text link',
  href: 'https://www.google.com',
  target: '_blank',
  iconLeft: <HomeIcon />
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text link',
  href: 'https://www.yahoo.com',
  target: '_blank',
  color: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text link',
  href: 'https://www.facebook.com',
  target: '_blank',
  disabled: true,
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  children: 'Text link',
  href: 'https://www.bbc.com',
  target: '_blank',
  iconLeft: <LoadIcon />
};

export const IconRight = Template.bind({});
IconRight.args = {
  children: 'Text link',
  href: 'https://www.cnn.com/d',
  target: '_blank',
  iconRight: <CalendarIcon variant={'filled'} />
};
