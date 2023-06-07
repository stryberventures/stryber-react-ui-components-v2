import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from './';
import { ProfileIcon } from '../Icons';
import Elevation from '../Elevation';
import Text from '../Text';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';
import { toRem, useDir } from '../Theme';


export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    pkg,
  },
  args: {},
  argTypes: buildArgTypes(['className']),
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => {
  return (
    <Divider {...args} />
  );
}

export const FullBleed = Template.bind({});
FullBleed.decorators = [
  (Story) => (
    <Elevation style={{ width: toRem(500), display: 'flex', flexDirection: 'column', }}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: `${toRem(12)} ${toRem(16)}`, }}>
        <Text weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
      </div>
      <Story />
      <div style={{ display: 'flex', flexDirection: 'column', padding: `${toRem(12)} ${toRem(16)}`, }}>
        <Text weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
      </div>
      <Story />
      <div style={{ display: 'flex', flexDirection: 'column', padding: `${toRem(12)} ${toRem(16)}`, }}>
        <Text weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
      </div>
    </Elevation>
  ),
];

export const Inset = Template.bind({});
Inset.decorators = [
  (Story) => {
    const dir = useDir();
    return (
      <Elevation>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: toRem(48),
            [dir === 'rtl' ? 'paddingRight' : 'paddingLeft']: toRem(16),
          }}>
            <ProfileIcon variant="filled" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Text style={{ padding: `${toRem(12)} 0` }}>Lorem ipsum dolor</Text>
            <Story />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: toRem(48),
            [dir === 'rtl' ? 'paddingRight' : 'paddingLeft']: toRem(16),
          }}>
            <ProfileIcon variant="filled" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Text style={{ padding: `${toRem(12)} 0` }}>Lorem ipsum dolor</Text>
            <Story />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: toRem(48),
            [dir === 'rtl' ? 'paddingRight' : 'paddingLeft']: toRem(16),
          }}>
            <ProfileIcon variant="filled" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Text style={{ padding: `${toRem(12)} 0` }}>Lorem ipsum dolor</Text>
          </div>
        </div>
      </Elevation>
    )
  }
]

export const Middle = Template.bind({});
Middle.decorators = [
  (Story) => (
    <Elevation>
      <div style={{ padding: '0 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',  gap: toRem(16)  }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <ProfileIcon variant="filled" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Text style={{ padding: `${toRem(12)} 0` }}>Lorem ipsum dolor</Text>
          </div>
        </div>
        <Story />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: toRem(16) }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <ProfileIcon variant="filled" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Text style={{ padding: `${toRem(12)} 0` }}>Lorem ipsum dolor</Text>
          </div>
        </div>
        <Story />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: toRem(16)  }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <ProfileIcon variant="filled" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Text style={{ padding: `${toRem(12)} 0` }}>Lorem ipsum dolor</Text>
          </div>
        </div>
      </div>
    </Elevation>
  )
];


