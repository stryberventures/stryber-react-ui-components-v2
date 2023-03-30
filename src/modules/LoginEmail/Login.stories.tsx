import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import EmailComponent from './index';
import file from '!!raw-loader!./index';
import { replacePaths } from '../../storybook/utils';
import { FullViewportDecorator } from '../../storybook/preview/FullViewportDecorator';

const sourceToDisplay = replacePaths(file);

export default {
  title: 'Modules/Authentication/Login/Email',
  component: EmailComponent,
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
} as ComponentMeta<typeof EmailComponent>;

const Template: ComponentStory<typeof EmailComponent> = () => <EmailComponent />;

export const Email = Template.bind({});
Email.parameters = {
  docs: {
    source: {
      code: sourceToDisplay,
      state: 'open',
    },
  },
};
