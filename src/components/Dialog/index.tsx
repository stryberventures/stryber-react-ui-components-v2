import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useKeyPress, KEYS } from '../../hooks/useKeyPress';
import Portal, { TPortalContainer } from '../Portal';
import DialogTitle from './DialogTitle';
import DialogText from './DialogText';
import DialogActions from './DialogActions';
import DialogImage from './DialogImage';
import { useDir } from '../Theme';
import useStyles from './styles';

export interface IDialog extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  children: React.ReactNode;
  overlayClassName?: string;
  disableOutsideClick?: boolean;
  disableEscPress?: boolean;
  modalContainer?: TPortalContainer;
  onClose?: () => void;
  className?: string;
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
    className,
    dir = useDir(props.dir),
    ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  useEffect(() => {
    setDialogOpen(open);
  }, [open]);
  const handleClose = () => {
    setDialogOpen(false);
    onClose?.();
  };
  !disableEscPress && useKeyPress(KEYS.esc, handleClose);
  if (!dialogOpen) return null;
  return dialogOpen ? (
    <Portal container={modalContainer}>
      <div
        className={classNames(classes.overlay, overlayClassName)}
        onClick={() => !disableOutsideClick && handleClose()}
        data-testid="test-dialog-overlay"
      >
        <div
          className={classNames(classes.dialog, className)}
          onClick={(e) => e.stopPropagation()}
          data-testid="test-dialog"
          {...rest}
        >
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

Dialog.Title = DialogTitle;
Dialog.Text = DialogText;
Dialog.Actions = DialogActions;
Dialog.Image = DialogImage;

export default Dialog;
