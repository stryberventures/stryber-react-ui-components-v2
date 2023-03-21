import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import file from '!!raw-loader!./index';
import pkg from './package.json';
import SignUpEmailComponent from './index';
import { replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication/SignUpEmail',
  component: SignUpEmailComponent,
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
} as ComponentMeta<typeof SignUpEmailComponent>;

const Template: ComponentStory<typeof SignUpEmailComponent> = () => <SignUpEmailComponent />;

export const SignUpEmail = Template.bind({});
SignUpEmail.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      state: 'open',
    },
  },
};