import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from './index';
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
  text: 'Contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Outlined',
  variant: 'outlined',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  text: 'Color secondary',
  color: 'secondary',
};

export const ColorDefault = Template.bind({});
ColorDefault.args = {
  text: 'Color default',
  color: 'default',
};

export const ColorSuccess = Template.bind({});
ColorSuccess.args = {
  text: 'Color success',
  color: 'success',
};

export const DisabledContained = Template.bind({});
DisabledContained.args = {
  text: 'Disabled',
  variant: 'contained',
  disabled: true,
};

export const DisabledOutlined = Template.bind({});
DisabledOutlined.args = {
  text: 'Disabled',
  variant: 'outlined',
  disabled: true,
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  text: 'Icon left',
  iconLeft: <CarIcon/>
};

export const IconRight = Template.bind({});
IconRight.args = {
  text: 'Icon right',
  iconRight: <CarIcon/>
};

export const IconLeftAndRight = Template.bind({});
IconLeftAndRight.args = {
  text: 'Icons',
  iconLeft: <CarIcon/>,
  iconRight: <CarIcon/>
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconRight: <CarIcon/>
};

