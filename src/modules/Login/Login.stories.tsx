import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import LoginComponent from './index';
import file from '!!raw-loader!./index';
import { replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication/Login',
  component: LoginComponent,
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
} as ComponentMeta<typeof LoginComponent>;

const Template: ComponentStory<typeof LoginComponent> = () => <LoginComponent />;

export const Login = Template.bind({});
Login.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      state: 'open',
    },
  },
};
