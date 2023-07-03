import React, { useState } from 'react';
import Dialog from '../../../../components/Dialog';
import Button from '../../../../components/Button';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('./dialogImage.png');

const DialogImageExample = () => {
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
        <Dialog.Image src={img} />
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Text>
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

export default DialogImageExample;

export const DialogImageExampleCode = `
<Dialog open={open}>
  <Dialog.Image src={img} />
  <Dialog.Title>
    Dialog Title
  </Dialog.Title>
  <Dialog.Text>
    Dialog content
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
