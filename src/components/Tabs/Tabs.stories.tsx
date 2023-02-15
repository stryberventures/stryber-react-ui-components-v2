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
    active: true,
    disabled: false,
  },
  {
    id: 'profile',
    icon: <ProfileIcon />,
    label: 'Profile',
    active: false,
    disabled: false,
    removable: true,
  },
  {
    id: 'info',
    icon: <InfoIcon />,
    label: '',
    active: false,
    disabled: false,
  },
  {
    id: 'documents',
    icon: <DocumentIcon />,
    label: '',
    active: false,
    disabled: false,
  },
  {
    id: 'payment',
    icon: <CreditCardIcon />,
    label: 'Payment',
    active: false,
    disabled: true,
    removable: true,
  },
];

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    pkg,
  },
  args: {
    direction: 'vertical',
    color: 'primary',
    tabs: defaultTabs,
    size: 'large',
  },
  argTypes: buildExcludeArgTypes(['className', 'children', 'onChange', 'onRemove', 'tabs', 'size']),
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [tabs, setTabs] = useState(defaultTabs);
  const onChange = (tabId: ITab['id']) => {
    setTabs(tabs.map((tab) => ({ ...tab, active: tab.id == tabId })));
  };
  const onRemove = (tabId: ITab['id']) => {
    setTabs(tabs.filter(({ id }) => id != tabId));
  };
  return (
    <Tabs
      {...args}
      tabs={tabs}
      onChange={onChange}
      onRemove={onRemove}
    />
  );
}

export const Default = Template.bind({});

const TabsTemplate: ComponentStory<typeof Tabs> = (args) => {
  return (
    <Tabs
      {...args}
      tabs={defaultTabs}
      onChange={() => {}}
      onRemove={() => {}}
    />
  );
};

export const Small = TabsTemplate.bind({});
Small.args = {
  size: 'small',
}

export const Medium = TabsTemplate.bind({});
Medium.args = {
  size: 'medium',
}

export const Large = TabsTemplate.bind({});
Large.args = {
  size: 'large',
}
