import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './index';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';
import { IListItem } from '../List/ListItem';
import { toRem } from '../Theme/utils';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    pkg,
  },
  args: {
    size: 'medium',
  },
  argTypes: buildArgTypes(['icon', 'iconLeft', 'iconRight', 'className', 'children']),
} as ComponentMeta<typeof Menu>;

const title = 'List item';
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;
const listItems: IListItem[] = new Array(6).fill({ title });
const leftContent = <div style={{ width: toRem(20), height: toRem(20), backgroundColor: 'grey', borderRadius: '50%' }} />;



export const Default = Template.bind({});
Default.args = {
  menuItems: listItems,
  size: 'large'
};

export const withSearch = Template.bind({});
withSearch.args = {
  hasSearch: true,
  menuItems: listItems
};
export const withIcons = Template.bind({});
withIcons.args = {
  hasSearch: true,
  menuItems: listItems.map(e => {return { ...e, leftContent }})
};

export const smallList = Template.bind({});
smallList.args = {
  hasSearch: true,
  menuItems: listItems.map(e => {return { ...e, leftContent, fixedSize: 'small' }})
};
export const mediumList = Template.bind({});
mediumList.args = {
  hasSearch: true,
  menuItems: listItems.map(e => {return { ...e, leftContent, fixedSize: 'medium' }})
};
export const largeList = Template.bind({});
largeList.args = {
  hasSearch: true,
  menuItems: listItems.map(e => {return { ...e, leftContent, fixedSize: 'large' }})
};

