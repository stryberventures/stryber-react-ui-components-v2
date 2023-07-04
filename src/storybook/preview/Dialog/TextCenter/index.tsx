import React, { useState } from 'react';
import Dialog from '../../../../components/Dialog';
import Button from '../../../../components/Button';

const DialogTextCenterExample = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
  };
  const confirm = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Dialog open={open} onClose={closeModal}>
        <Dialog.Title align="center">Dialog Title</Dialog.Title>
        <Dialog.Text align="center">
          Hello. This is subtext. It can be pretty long and more then 2
          sentences depending on the project.
        </Dialog.Text>
        <Dialog.Actions>
          <Button onClick={confirm} variant="outlined" size="small">
            Cancel
          </Button>
          <Button onClick={closeModal} variant="contained" size="small">
            Confirm
          </Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};

export default DialogTextCenterExample;

export const DialogTextCenterExampleCode = `
<Dialog open={open}>
  <Dialog.Title align="center">
    Dialog Title
  </Dialog.Title>
  <Dialog.Text align="center">
    Hello. This is subtext. It can be pretty long and more then 2 sentences depending on the project.
  </Dialog.Text>
  <Dialog.Actions>
    <Button variant="outlined" size="small">
      Cancel
    </Button>
    <Button variant="contained" size="small">
      Confirm
    </Button>
  </Dialog.Actions>
</Dialog>
`;
