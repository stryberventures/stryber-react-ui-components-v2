import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import Button from '../Button';
import Dialog from './';
import Text from '../Text';
import CarIcon from '../../storybook/icons/Car';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    pkg,
  },
  argTypes: {},
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
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
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Text>
          <Text variant="body">
            Dialog text dialog text dialog text dialog text dialog text dialog text dialog text
            dialog text dialog text dialog text dialog text dialog text dialog text dialog
            text dialog text dialog text dialog text
          </Text>
        </Dialog.Text>
        <Dialog.Actions>
          <Dialog.Button
            iconLeft={<CarIcon />}
            onClick={confirm}
          >
            Cancel
          </Dialog.Button>
          <Dialog.Button onClick={closeModal}>Confirm</Dialog.Button>
        </Dialog.Actions>
      </Dialog>
    </div>
  );
}

export const DialogueWindow = Template.bind({});
DialogueWindow.args = {
};

