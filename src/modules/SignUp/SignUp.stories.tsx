import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import SignUpComponent from './index';
import file from '!!raw-loader!./index';
import { replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication/SingUp',
  component: SignUpComponent,
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
} as ComponentMeta<typeof SignUpComponent>;

const Template: ComponentStory<typeof SignUpComponent> = () => <SignUpComponent />;

export const SignUp = Template.bind({});
SignUp.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      open: true,
    },
  },
};
