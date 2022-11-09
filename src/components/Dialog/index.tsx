import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useKeyPress, KEYS } from '../../hooks/useKeyPress';
import Portal, { TPortalContainer } from '../Portal';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';
import useStyles from './styles';


export interface IDialog extends React.HTMLAttributes<HTMLDivElement>{
  open: boolean;
  children: React.ReactNode;
  overlayClassName?: string;
  disableOutsideClick?: boolean;
  disableEscPress?: boolean;
  modalContainer?: TPortalContainer;
  onClose?: () => void;
}

const Dialog = (props: IDialog) => {
  const {
    open,
    children,
    disableOutsideClick = false,
    disableEscPress = false,
    overlayClassName,
    modalContainer,
    onClose,
    ...rest
  } = props;
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  useEffect(() => { setDialogOpen(open) }, [open]);
  const handleClose = () => {
    setDialogOpen(false);
    onClose?.();
  };
  !disableEscPress && useKeyPress(KEYS.esc, handleClose);
  if(!dialogOpen) return null;
  return dialogOpen ? (
    <Portal container={modalContainer}>
      <div
        className={classNames(classes.overlay, overlayClassName)}
        onClick={() => !disableOutsideClick && handleClose()}
        data-testid="test-dialog-overlay"
      >
        <div
          className={classes.dialog}
          onClick={(e) => e.stopPropagation()}
          data-testid="test-dialog"
          {...rest}
        >
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
}

Dialog.Title = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;

export default Dialog;
