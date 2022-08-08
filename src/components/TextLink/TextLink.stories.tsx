import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextLink from './index';
import LeftArrow from '../../storybook/icons/leftArrow';
import RightArrow from '../../storybook/icons/rightArrow';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/TextLink',
  component: TextLink,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['iconLeft', 'iconRight', 'className']),
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => <TextLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Text link',
  href: 'https://www.google.com',
  target: '_blank',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Text link',
  href: 'https://www.google.com',
  target: '_blank',
  color: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Text link',
  href: 'https://www.google.com',
  target: '_blank',
  disabled: true,
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  text: 'Text link',
  href: 'https://www.google.com',
  target: '_blank',
  iconLeft: <LeftArrow />
};

export const IconRight = Template.bind({});
IconRight.args = {
  text: 'Text link',
  iconRight: <RightArrow />
};
