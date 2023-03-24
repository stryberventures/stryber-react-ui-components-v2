import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import file from '!!raw-loader!./index';
import pkg from './package.json';
import EmailVerificationComponent from './index';
import { buildExcludeArgTypes, replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication/SignUp/EmailVerification',
  component: EmailVerificationComponent,
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
  argTypes: buildExcludeArgTypes(['className', 'requestCode']),
} as ComponentMeta<typeof EmailVerificationComponent>;

const Template: ComponentStory<typeof EmailVerificationComponent> = (...args) => {
  return <EmailVerificationComponent {...args[0]} />;
}

export const EmailVerification = Template.bind({});
EmailVerification.args = {
  email: 'alina@stryber.com',
}
EmailVerification.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      state: 'open',
    },
  },
};
