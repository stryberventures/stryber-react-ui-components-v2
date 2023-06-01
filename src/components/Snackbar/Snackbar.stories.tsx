import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Snackbar from './index';
import { buildArgTypes } from '../../storybook/utils';
import pkg from './package.json';
import Button from '../Button';

export default {
  title: 'Components/Snackbar/Snackbar',
  component: Snackbar,
  parameters: {
    pkg,
  },
  argTypes: {
    autoHideDuration: { name: 'autoHideDuration (ms)' },
    ...buildArgTypes(['dir', 'anchorOrigin', 'open', 'className', 'style'])
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = ({
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show snackbar</Button>
      <Snackbar open={open} {...rest} onClose={handleClose} />
    </>
  )
};

export const Default = Template.bind({});
Default.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'error',
};

export const Success = Template.bind({});
Success.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'success',
};

export const TopCenter = Template.bind({});
TopCenter.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'info',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'info',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  }
};

export const TopRight = Template.bind({});
TopRight.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'info',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  }
};

export const BottomCenter = Template.bind({});
BottomCenter.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'info',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  }
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'info',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  }
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'info',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  }
};
