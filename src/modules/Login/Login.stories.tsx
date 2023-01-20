import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';
import pkg from './package.json';
import LoginComponent from './index';
import file from '!!raw-loader!./index';
import { replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

// TODO - write script which deploys all components (which were updated)

// TODO Dependencies - peer dependencies of dependencies are not in the list (the issue is not only about the module)
const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication',
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof LoginComponent> = () => <LoginComponent />;

export const Login = Template.bind({});
Login.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      open: true,
    },
  },
};
