import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from './index';
import CarIcon from '../../stories/icons/Car';

export default {
  title: 'Components/Chip',
  component: Chip,
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
