import React, { useState } from 'react';
import { createStyles } from '../Theme/index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import Button from '../Button';
import Dialog from './';
import Text from '../Text';
import { CloseIcon } from '../Icons';
import { ITheme } from '../Theme/types';


export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    pkg,
  },
  argTypes: {},
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => {
    args.onClose?.();
    setOpen(false);
  };
  const confirm = () => {
    setOpen(false);
  };
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Button onClick={openModal}>Open modal</Button>
      <Dialog
        {...args}
        open={open}
        onClose={closeModal}
      >
        <Dialog.Title className={classes.dialogTitle}>
          <Text
            variant="subline"
            className={classes.dialogText}
          >
            Dialog Title
          </Text>
          <CloseIcon
            className={classes.closeIcon}
            onClick={closeModal}
          />
        </Dialog.Title>
        <Dialog.Content>
          <Text variant="body">
            Dialog content
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onClick={confirm}
            variant="outlined"
            size="small"
          >
            Cancel
          </Button>
          <Button
            onClick={closeModal}
            variant="contained"
            size="small"
          >
            Confirm
          </Button>
        </Dialog.Actions>
      </Dialog>
    </div>
  );
}

const useStyles = createStyles((theme: ITheme) => ({
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dialogText: {
    color: theme.colors.text.headline,
  },
  closeIcon: {
    width: 16,
    height: 16,
    cursor: 'pointer',
  },
}))

export const DialogueWindow = Template.bind({});
DialogueWindow.args = {
};

