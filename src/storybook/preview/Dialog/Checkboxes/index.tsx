import React, { useState } from 'react';
import { createStyles } from '../../../../components/Theme';
import Dialog from '../../../../components/Dialog';
import Button from '../../../../components/Button';
import Checkbox from '../../../../components/CheckBox';

const DialogCheckboxesExample = () => {
  const classes = useStyles();
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
        <Dialog.Title>Dialog Title</Dialog.Title>
        <div className={classes.content}>
          <Dialog.Text>
            Hello. This is subtext. It can be pretty long and more then 2
            sentences depending on the project.
          </Dialog.Text>
          <div className={classes.itemsList}>
            <div className={classes.item}>
              <Checkbox label="Venture Architect" />
            </div>
            <div className={classes.item}>
              <Checkbox label="Venture Architect" />
            </div>
            <div className={classes.item}>
              <Checkbox label="Venture Architect" />
            </div>
            <div className={classes.item}>
              <Checkbox label="Venture Architect" />
            </div>
            <div className={classes.item}>
              <Checkbox label="Venture Architect" />
            </div>
            <div className={classes.item}>
              <Checkbox label="Venture Architect" />
            </div>
            <div className={classes.item}>
              <Checkbox label="Venture Architect" />
            </div>
            <div className={classes.item}>
              <Checkbox label="Venture Architect" />
            </div>
          </div>
        </div>
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

const useStyles = createStyles(() => ({
  itemsList: {
    margin: [20, 0],
  },
  item: {
    margin: '4px 0',
  },
  content: {
    maxHeight: 300,
    overflow: 'auto',
  },
}));

export default DialogCheckboxesExample;

export const DialogCheckboxesExampleCode = `
<Dialog open={open}>
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
