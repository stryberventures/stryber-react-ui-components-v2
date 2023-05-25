export const SnackbarWithNotionstackCode = `
import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

declare module 'notistack' {
  interface VariantOverrides {
    default: {
      description?: string
    };
    warning: {
      description?: string
    }
    info: {
      description?: string
    }
    success: {
      description?: string
    }
    error: {
      description?: string
    }
  }
}

const App = () => {
  const classes = useStyles()();
  return (
    <SnackbarProvider Components={{
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
      <ChildComponent />
    </SnackbarProvider>
  )
}

const ChildComponent = () => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Button onClick={() => enqueueSnackbar(
      'This is a snackbar',
      { variant: 'default', description: 'This is a description' })
    }>
        Show snackbar
    </Button>
  )
}

const useStyles = () => createStyles(() => ({
  container: {
    width: '90vw',
    maxWidth: 400,
    '& > div': {
      width: '100%',
    }
  }
}),{ internalUsage: true });
`
