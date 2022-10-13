import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useKeyPress, KEYS } from '../../hooks/useKeyPress';
import DialogTitle from './DialogTitle';
import DialogText from './DialogText';
import DialogActions from './DialogActions';
import DialogButton from './DialogButton';
import useStyles from './styles';


export interface IDialog extends React.HTMLAttributes<HTMLDivElement>{
  open: boolean;
  children: React.ReactNode;
  overlayClassName?: string;
  disableOutsideClick?: boolean;
  disableEscPress?: boolean;
  onClose?: () => void;
}

const Dialog = (props: IDialog) => {
  const {
    open,
    children,
    disableOutsideClick = false,
    disableEscPress = false,
    overlayClassName,
    onClose,
    ...rest
  } = props;
  if (!open) return null;
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  useEffect(() => { setDialogOpen(open) }, [open]);
  console.log('Dialog rendered!!!');
  const handleClose = () => {
    setDialogOpen(false);
    onClose?.();
  };
  !disableEscPress && useKeyPress(KEYS.esc, handleClose);
  return (
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
  );
}

Dialog.Title = DialogTitle;
Dialog.Text = DialogText;
Dialog.Actions = DialogActions;
Dialog.Button = DialogButton;

export default Dialog;
