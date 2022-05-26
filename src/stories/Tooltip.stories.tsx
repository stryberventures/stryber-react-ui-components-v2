import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '../components/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;
export const Top = Template.bind({});
Top.args = {
  version: 'dark',
  position: 'top',
  children: 'Tooltip top version',
  title: 'Tooltip title',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const TopStart = Template.bind({});
TopStart.args = {
  version: 'dark',
  position: 'topStart',
  children: 'Tooltip top start position',
  title: 'Top start Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const TopEnd = Template.bind({});
TopEnd.args = {
  version: 'dark',
  position: 'topEnd',
  children: 'Tooltip-top end position',
  title: 'Top-end Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const Bottom = Template.bind({});
Bottom.args = {
  version: 'dark',
  position: 'bottom',
  children: 'Tooltip bottom position',
  title: 'Bottom Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const BottomStart = Template.bind({});
BottomStart.args = {
  version: 'dark',
  position: 'bottomStart',
  children: 'Tooltip bottom start position',
  title: 'Bottom start Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const BottomEnd = Template.bind({});
BottomEnd.args = {
  version: 'dark',
  position: 'bottomEnd',
  children: 'Tooltip bottom-end position',
  title: 'Bottom-end Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const Left = Template.bind({});
Left.args = {
  version: 'dark',
  position: 'left',
  children: 'Tooltip left position',
  title: 'Left Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const LeftStart = Template.bind({});
LeftStart.args = {
  version: 'dark',
  position: 'leftStart',
  children: 'Tooltip left start position',
  title: 'Left start Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const LeftEnd = Template.bind({});
LeftEnd.args = {
  version: 'dark',
  position: 'leftEnd',
  children: 'Tooltip left-end position',
  title: 'Left-end Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const Right = Template.bind({});
Right.args = {
  version: 'dark',
  position: 'right',
  children: 'Tooltip right position',
  title: 'Right Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const RightStart = Template.bind({});
RightStart.args = {
  version: 'dark',
  position: 'rightStart',
  children: 'Tooltip right start position',
  title: 'Right start Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

export const RightEnd = Template.bind({});
RightEnd.args = {
  version: 'light',
  position: 'rightEnd',
  children: 'Tooltip right-end position',
  title: 'Right-end Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

