import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import PhoneComponent from './index';
import file from '!!raw-loader!./index';
import { replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication/Login/Phone',
  component: PhoneComponent,
  parameters: {
    pkg,
  },
  decorators: [
    (Story, ctx) => {
      // decorator only for Canvas tab
      if (ctx.viewMode === 'story') {
        return (
          <FullViewportDecorator>
            <Story />
          </FullViewportDecorator>
        );
      }
      return <Story />;
    },
  ],
} as ComponentMeta<typeof PhoneComponent>;

const Template: ComponentStory<typeof PhoneComponent> = () => (
  <PhoneComponent />
);

export const Phone = Template.bind({});
Phone.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      state: 'open',
    },
  },
};
