import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { SnackbarContent } from './index';
import { buildArgTypes } from '../../storybook/utils';
import pkg from './package.json';
import Button from '../Button';
import { createStyles } from '../Theme';
import { SnackbarWithNotionstackCode } from '../../storybook/preview/Snackbar/WithNotionstack';

declare module 'notistack' {
  interface VariantOverrides {
    default: {
      description?: string;
    };
    warning: {
      description?: string;
    };
    info: {
      description?: string;
    };
    success: {
      description?: string;
    };
    error: {
      description?: string;
    };
  }
}

export default {
  title: 'Components/Snackbar/SnackbarWithNotionstack',
  component: SnackbarContent,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes(['dir', 'className', 'style', 'onClose']),
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
    (Story) => {
      const classes = useStyles()();
      return (
        <SnackbarProvider
          Components={{
            default: SnackbarContent,
            success: SnackbarContent,
            error: SnackbarContent,
            info: SnackbarContent,
            warning: SnackbarContent,
          }}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          classes={{
            containerRoot: classes.container,
          }}
        >
          <Story />
        </SnackbarProvider>
      );
    },
  ],
} as ComponentMeta<typeof SnackbarContent>;

const Template: ComponentStory<typeof SnackbarContent> = ({
  message,
  variant,
  description,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Button onClick={() => enqueueSnackbar(message, { variant, description })}>
      Show snackbar
    </Button>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
};
Default.parameters = {
  docs: {
    source: {
      code: SnackbarWithNotionstackCode,
    },
  },
};

const useStyles = () =>
  createStyles(
    () => ({
      container: {
        width: '90vw',
        maxWidth: 400,
        '& > div': {
          width: '100%',
        },
      },
    }),
    { internalUsage: true }
  );
