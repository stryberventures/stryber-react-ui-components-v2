import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import file from '!!raw-loader!./index';
import pkg from './package.json';
import PhoneNumberComponent from './index';
import { replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication/SignUp/PhoneNumber',
  component: PhoneNumberComponent,
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
} as ComponentMeta<typeof PhoneNumberComponent>;

const Template: ComponentStory<typeof PhoneNumberComponent> = () => (
  <PhoneNumberComponent />
);

export const PhoneNumber = Template.bind({});
PhoneNumber.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      state: 'open',
    },
  },
};
