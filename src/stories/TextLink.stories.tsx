import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextLink } from '../components/TextLink';
import LeftArrow from './icons/leftArrow';
import RightArrow from './icons/rightArrow';

export default {
  title: 'Components/TextLink',
  component: TextLink,
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
