import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './index';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes(['className', 'dir']),
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Medium = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
};

export const Online = Template.bind({});
Online.args = {
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  status: 'offline',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://avatars.githubusercontent.com/u/3702041?v=4',
};

export const WithImageAndStatus = Template.bind({});
WithImageAndStatus.args = {
  src: 'https://avatars.githubusercontent.com/u/3702041?v=4',
  status: 'online',
};
