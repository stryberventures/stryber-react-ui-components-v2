import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';
import Text from './';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes(['className']),
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text variant="h1" {...args}>
    {args.children}
  </Text>
);

export const TextElement = Template.bind({});
TextElement.args = {
  children:
    'Text element text element text element text element text element text element text element text element text element text element',
};
