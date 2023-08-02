import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List, { ListItem, ListItemText } from './index';
import pkg from './package.json';
import Switch from '../Switch';
import Avatar from '../Avatar';
import { IListItem } from './ListItem';
import { buildArgTypes } from '../../storybook/utils';

const leftContent = <Avatar />;
const rightContent = <Switch />;

const listItems: IListItem[] = new Array(4).fill({});

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes(['listClassName', 'dir', 'children']),
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <List>
    {listItems.map((item, index) => (
      <ListItem key={index} {...item} {...args}>
        {args.children}
      </ListItem>
    ))}
  </List>
);

export const Default = Template.bind({});
Default.args = {
  children: <ListItemText primary="List primary text" />,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: <ListItemText primary="List primary text" />,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: <ListItemText primary="List primary text" />,
};

export const WithDividers = Template.bind({});
WithDividers.args = {
  divider: true,
  children: <ListItemText primary="List primary text" />,
};

export const WithLeftRightContent = Template.bind({});
WithLeftRightContent.args = {
  leftContent,
  rightContent,
  children: <ListItemText primary="List primary text" />,
};

export const WithLabelAndSecondaryText = Template.bind({});
WithLabelAndSecondaryText.args = {
  children: (
    <ListItemText
      primary="List primary text"
      label="List label"
      secondary="List secondary"
    />
  ),
};
