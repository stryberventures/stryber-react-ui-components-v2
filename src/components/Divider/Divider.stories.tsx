import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from './';
import { ProfileIcon } from '../Icons';
import Text from '../Text';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme';


export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    pkg,
  },
  args: {
    variant: 'fullBleed',
    component: 'div',
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => {
  return (
    <div style={{ width: 500, border: '1px solid #D0D5DD', borderRadius: 6 }}>
      <Divider {...args}>
        <ProfileIcon variant="filled" />
        <Text>Lorem ipsum dolor</Text>
      </Divider>
      <Divider {...args}>
        <div style={{ alignSelf: 'flex-start', minWidth: 16, paddingTop: toRem(3) }}>
          <ProfileIcon variant="filled" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',  }}>
          <Text weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
          <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </div>
      </Divider>
      <Divider {...args} />
    </div>
  );
}

export const FullBleed = Template.bind({});
FullBleed.args = {
  variant: 'fullBleed',
  children: (
    <Text>Lorem ipsum dolor</Text>
  ),
};

export const Inset = Template.bind({});
Inset.args = {
  variant: 'inset',
  children: (
    <>
      <ProfileIcon variant="filled" />
      <Text>Lorem ipsum dolor</Text>
    </>
  ),
};

export const Middle = Template.bind({});
Middle.args = {
  variant: 'middle',
  children: (
    <Text>Lorem ipsum dolor</Text>
  ),
};


