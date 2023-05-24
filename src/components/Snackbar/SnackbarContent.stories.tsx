import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SnackbarContent } from './index';
import { buildArgTypes } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'Components/Snackbar/SnackbarContent',
  component: SnackbarContent,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes(['iconLeft', 'iconRight']),
} as ComponentMeta<typeof SnackbarContent>;

const snackbarContentVariants = ['basic', 'success', 'warning', 'error', 'info'] as const;

const Template: ComponentStory<typeof SnackbarContent> = (args) => (
  <>
    {snackbarContentVariants.map((variant) => (
      <>
        <SnackbarContent key={variant} {...args} variant={variant}/>
        <br/>
      </>
    ))}
  </>);

export const AllVariants = Template.bind({});
AllVariants.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
};
