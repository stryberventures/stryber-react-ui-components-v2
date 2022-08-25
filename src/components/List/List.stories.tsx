import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './index';
import pkg from './package.json';
import Switch from '../../components/Switch'

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'One-line Item',
};

export const WithLeftRightContent = Template.bind({});
WithLeftRightContent.args = {
  title: 'One-line Item',
  subtitle: 'Secondary Text',
  leftContent: <div style={{ width: '40px', height: '40px', backgroundColor: 'grey', borderRadius: '50%' }} />,
  rightContent: <Switch/>
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  title: 'One-line Item',
  subtitle: 'Secondary Text'
};
