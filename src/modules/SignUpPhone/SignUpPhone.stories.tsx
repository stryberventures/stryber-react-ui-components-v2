import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import file from '!!raw-loader!./index';
import pkg from './package.json';
import SignUpPhoneComponent from './index';
import { replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication/SignUpPhone',
  component: SignUpPhoneComponent,
  parameters: {
    pkg,
  },
  decorators: [
    (Story, ctx) => {
      // decorator only for Canvas tab
      if (ctx.viewMode === 'story') {
        return  (
          <FullViewportDecorator>
            <Story />
          </FullViewportDecorator>
        )
      }
      return <Story/>
    },
  ],
} as ComponentMeta<typeof SignUpPhoneComponent>;

const Template: ComponentStory<typeof SignUpPhoneComponent> = () => <SignUpPhoneComponent />;

export const SignUpPhone = Template.bind({});
SignUpPhone.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      state: 'open',
    },
  },
};
