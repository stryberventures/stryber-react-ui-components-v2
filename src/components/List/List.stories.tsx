import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './index';
import pkg from './package.json';
import Switch from '../../components/Switch'
import { IListItem } from './ListItem';
import { buildExcludeArgTypes } from '../../storybook/utils';
import toRem from '../../utils/toRem';

const title = 'One-line Item';
const subtitle = 'Secondary Text';
const leftContent = <div style={{ width: toRem(40), height: toRem(40), backgroundColor: 'grey', borderRadius: '50%' }} />;
const rightContent = <Switch/>;

const listItems: IListItem[] = new Array(4).fill({ title });

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['listClassName']),
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  listItems
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  listItems: listItems.map(item => ({ ...item, subtitle })),
};

export const WithLeftRightContent = Template.bind({});
WithLeftRightContent.args = {
  listItems: listItems.map(item => ({
    ...item,
    subtitle,
    leftContent,
    rightContent,
  })),
};

