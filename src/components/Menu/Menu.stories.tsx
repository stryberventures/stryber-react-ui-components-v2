import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu, { MenuItem, MenuItemText, MenuSearch } from './index';
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
  argTypes: buildArgTypes([
    'icon',
    'iconLeft',
    'iconRight',
    'className',
    'children',
    'dir',
    'leftContent',
  ]),
} as ComponentMeta<typeof Menu>;

const menuItems: IListItem[] = new Array(6).fill({});
const Template: ComponentStory<typeof Menu & typeof MenuItem> = ({
  leftContent,
  ...rest
}) => (
  <Menu {...rest}>
    {menuItems.map((item, index) => (
      <MenuItem leftContent={leftContent} key={index} {...item}>
        <MenuItemText primary="Menu item" />
      </MenuItem>
    ))}
  </Menu>
);
const leftContent = (
  <div
    style={{
      width: toRem(18),
      height: toRem(18),
      backgroundColor: 'grey',
      borderRadius: '50%',
    }}
  />
);

export const Default = Template.bind({});
Default.args = {
  size: 'large',
};

export const WithSearch = () => {
  const [search, setSearch] = React.useState('');
  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Philadelphia',
  ];
  const filteredItems = cities.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Menu>
      <MenuSearch onChange={(e) => setSearch(e.target.value)} />
      {filteredItems.map((item, index) => (
        <MenuItem key={index}>
          <MenuItemText primary={item} />
        </MenuItem>
      ))}
    </Menu>
  );
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  leftContent,
};

export const SmallList = Template.bind({});
SmallList.args = {
  size: 'small',
};

export const MediumList = Template.bind({});
MediumList.args = {
  size: 'medium',
};

export const LargeList = Template.bind({});
LargeList.args = {
  size: 'large',
};
