import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './index';
import pkg from './package.json';
import Switch from '../../components/Switch'
import { IListItem } from './ListItem';
import { buildArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme';

const title = 'One-line Item';
const subtitle = 'Secondary Text';
const leftContent = <div style={{ width: toRem(40), height: toRem(40), backgroundColor: 'grey', borderRadius: '50%' }} />;
const rightContent = <Switch/>;
const label = 'Label'
const hasDivider = true
const fixedSize = 'medium'
const sizes = ['small', 'medium', 'large']


const listItems: IListItem[] = new Array(4).fill({ title });

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes(['listClassName']),
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} ></List>;

export const Default = Template.bind({});
Default.args = {
  listItems: [...listItems]
};

export const WithSize = Template.bind({});
WithSize.args = {
  listItems: listItems.map((item, index) => ({ ...item, title: sizes[index] || 'large', fixedSize: sizes[index] || 'large' })),
};

export const WithSizeAndDividers = Template.bind({});
WithSizeAndDividers.args = {
  listItems: listItems.map((item, index) => ({ ...item, label: sizes[index] || 'large',  hasDivider, fixedSize: sizes[index] || 'large' })),
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
    label,
    hasDivider,
    fixedSize
  })),
};

