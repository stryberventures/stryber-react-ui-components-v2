import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './index';
import Text from '../Text';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['visible']),
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const AlwaysVisible = Template.bind({});
AlwaysVisible.args = {
  version: 'light',
  position: 'top',
  children: 'Tooltip visible version with close option',
  title: 'Tooltip title',
  visible: true,
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
AlwaysVisible.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const Top = Template.bind({});
Top.args = {
  version: 'light',
  position: 'top',
  children: 'Tooltip top version',
  title: 'Tooltip title',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
Top.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const TopStart = Template.bind({});
TopStart.args = {
  version: 'light',
  position: 'topStart',
  children: 'Tooltip top start position',
  title: 'Top start Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
TopStart.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const TopEnd = Template.bind({});
TopEnd.args = {
  version: 'light',
  position: 'topEnd',
  children: 'Tooltip-top end position',
  title: 'Top-end Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
TopEnd.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const Bottom = Template.bind({});
Bottom.args = {
  version: 'light',
  position: 'bottom',
  children: 'Tooltip bottom position',
  title: 'Bottom Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
Bottom.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const BottomStart = Template.bind({});
BottomStart.args = {
  version: 'light',
  position: 'bottomStart',
  children: 'Tooltip bottom start position',
  title: 'Bottom start Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
BottomStart.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const BottomEnd = Template.bind({});
BottomEnd.args = {
  version: 'light',
  position: 'bottomEnd',
  children: 'Tooltip bottom-end position',
  title: 'Bottom-end Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
BottomEnd.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const Left = Template.bind({});
Left.args = {
  version: 'light',
  position: 'left',
  children: 'Tooltip left position',
  title: 'Left Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
Left.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const LeftStart = Template.bind({});
LeftStart.args = {
  version: 'light',
  position: 'leftStart',
  children: 'Tooltip left start position',
  title: 'Left start Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
LeftStart.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const LeftEnd = Template.bind({});
LeftEnd.args = {
  version: 'light',
  position: 'leftEnd',
  children: 'Tooltip left-end position',
  title: 'Left-end Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
LeftEnd.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const Right = Template.bind({});
Right.args = {
  version: 'light',
  position: 'right',
  children: 'Tooltip right position',
  title: 'Right Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
Right.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const RightStart = Template.bind({});
RightStart.args = {
  version: 'light',
  position: 'rightStart',
  children: 'Tooltip right start position',
  title: 'Right start Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
RightStart.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const RightEnd = Template.bind({});
RightEnd.args = {
  version: 'light',
  position: 'rightEnd',
  children: 'Tooltip right-end position',
  title: 'Right-end Position',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};
RightEnd.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];

export const CustomContent = Template.bind({});
CustomContent.args = {
  children: 'Tooltip right-end position',
  title: <Text variant="components2" weight="medium">Right start Position</Text>,
  text: (
    <>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p>It has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </>
  )
}
CustomContent.decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  ),
];
