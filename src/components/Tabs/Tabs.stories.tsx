import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import Tabs from './index';
import { CreditCardIcon, DocumentIcon, HomeIcon, InfoIcon, ProfileIcon } from '../Icons';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { ITab } from './Tab';

const defaultTabs: ITab[] = [
  {
    id: 'home',
    icon: <HomeIcon />,
    label: 'Home',
    active: false,
    disabled: false,
  },
  {
    id: 'profile',
    icon: <ProfileIcon />,
    label: 'Profile',
    active: true,
    disabled: true,
  },
  {
    id: 'info',
    icon: <InfoIcon />,
    label: 'Info',
    active: false,
    disabled: false,
  },
  {
    id: 'documents',
    icon: <DocumentIcon />,
    label: 'Documents',
    active: false,
    disabled: false,
  },
];

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    pkg,
  },
  args: {
    direction: 'horizontal',
    color: 'primary',
    tabs: defaultTabs,
    size: 'small',
    variant: 'default',
  },
  argTypes: buildExcludeArgTypes(['className', 'children', 'onChange', 'tabs']),
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [tabs, setTabs] = useState(args.tabs);
  const onChange = (tabId: ITab['id']) => {
    setTabs(tabs.map((tab) => ({ ...tab, active: tab.id == tabId })));
  };
  return (
    <Tabs
      {...args}
      tabs={tabs}
      onChange={onChange}
    />
  );
}

export const Default = Template.bind({});

export const Fitted = Template.bind({});
Fitted.args = {
  variant: 'fitted',
}

export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  variant: 'default',
  tabs: defaultTabs.map((tab) => ({
    ...tab,
    icon: null,
  })),
}
