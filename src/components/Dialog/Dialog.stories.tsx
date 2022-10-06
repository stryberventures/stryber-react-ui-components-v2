import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import Button from '../Button';
import Dialog from './';
import CarIcon from '../../storybook/icons/Car';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    pkg,
  },
  argTypes: {},
} as ComponentMeta<typeof Dialog>;

function onConfirm () { console.log('Confirmed'); }

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => {
    args.onCancel?.();
    setOpen(false);
  };
  const confirm = () => {
    args.onConfirm?.();
    setOpen(false);
  };
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Button onClick={openModal}>Open modal</Button>
      <Dialog
        {...args}
        open={open}
        cancelOnOutsidePress={true}
        onCancel={closeModal}
        onConfirm={confirm}
      />
    </div>
  );
}

export const DialogueWindow = Template.bind({});
DialogueWindow.args = {
  title: 'Dialog title',
  text: 'Dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text',
  onConfirm,
};

export const DialogueNoTitle = Template.bind({});
DialogueNoTitle.args = {
  text: 'Dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text',
  cancelButtonText: 'Back',
  onConfirm,
};

export const DialogueNoText = Template.bind({});
DialogueNoText.args = {
  title: 'Dialog title',
  onConfirm,
};

export const DialogueCustomTextComponent = Template.bind({});
DialogueCustomTextComponent.args = {
  title: 'Dialog title',
  text: (
    <>
      <p style={{ margin: '0 0 12px 0', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p style={{ margin: '0 0 12px 0', }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p style={{ margin: '0 0 0 0', }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </>
  ),
  onConfirm,
};

export const DialogueCancelButtonLeft = Template.bind({});
DialogueCancelButtonLeft.args = {
  title: 'Dialog title',
  text: 'Dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text',
  cancelButtonIconLeft: <CarIcon />,
  onConfirm,
};

export const DialogueCancelButtonRight = Template.bind({});
DialogueCancelButtonRight.args = {
  title: 'Dialog title',
  text: 'Dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text dialog text',
  cancelButtonIconRight: <CarIcon />,
  onConfirm,
};
