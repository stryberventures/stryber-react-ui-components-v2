import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chip from './index';
import CarIcon from '../../storybook/icons/Car';
import pkg from './package.json';

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    pkg,
  },
  argTypes: {
    iconLeft: {
      table: {
        disable: true,
      },
    },
    iconRight: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: 'Contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const ColorDefault = Template.bind({});
ColorDefault.args = {
  children: 'Default',
  color: 'default',
};

export const ColorSuccess = Template.bind({});
ColorSuccess.args = {
  children: 'Color success',
  color: 'success',
};

export const DisabledContained = Template.bind({});
DisabledContained.args = {
  children: 'Disabled',
  variant: 'contained',
  disabled: true,
};

export const DisabledOutlined = Template.bind({});
DisabledOutlined.args = {
  children: 'Disabled',
  variant: 'outlined',
  disabled: true,
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  children: 'Icon left',
  iconLeft: <CarIcon/>
};

export const IconRight = Template.bind({});
IconRight.args = {
  children: 'Icon right',
  iconRight: <CarIcon/>
};

export const IconLeftAndRight = Template.bind({});
IconLeftAndRight.args = {
  children: 'Icons',
  iconLeft: <CarIcon/>,
  iconRight: <CarIcon/>
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconRight: <CarIcon/>,
};

