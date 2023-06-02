import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import file from '!!raw-loader!./index';
import pkg from './package.json';
import PhoneVerificationComponent from './index';
import { buildArgTypes, replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication/SignUp/PhoneVerification',
  component: PhoneVerificationComponent,
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
  argTypes: buildArgTypes(['className', 'requestCode']),
} as ComponentMeta<typeof PhoneVerificationComponent>;

const Template: ComponentStory<typeof PhoneVerificationComponent> = (...args) => {
  return <PhoneVerificationComponent {...args[0]} />;
}

export const PhoneVerification = Template.bind({});
PhoneVerification.args = {
  email: 'alina@stryber.com',
}
PhoneVerification.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      state: 'open',
    },
  },
};
