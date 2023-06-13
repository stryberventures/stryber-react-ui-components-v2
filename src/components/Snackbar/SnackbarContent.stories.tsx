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
  argTypes: buildArgTypes([
    'iconLeft',
    'iconRight',
    'className',
    'dir',
    'style',
    'onClose',
  ]),
} as ComponentMeta<typeof SnackbarContent>;

const snackbarContentVariants = [
  'default',
  'success',
  'warning',
  'error',
  'info',
] as const;

const Template: ComponentStory<typeof SnackbarContent> = ({
  onClose: _,
  ...rest
}) => (
  <>
    {snackbarContentVariants.map((variant) => (
      <>
        <SnackbarContent key={variant} {...rest} variant={variant} />
        <br />
      </>
    ))}
  </>
);

export const AllVariants = Template.bind({});
AllVariants.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
};
