import React, { ReactElement } from 'react';
import classNames from 'classnames';
import Text from '../Text';
import DialogButton from './DialogButton';
import useStyles from './styles';


export interface IDialog extends React.HTMLAttributes<HTMLDivElement>{
  open: boolean;
  title?: string;
  text?: string | ReactElement;
  cancelButtonText?: string;
  cancelButtonIconLeft?: React.ReactElement;
  cancelButtonIconRight?: React.ReactElement;
  confirmButtonText?: string;
  overlayClassName?: string;
  cancelOnOutsidePress?: boolean
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Dialog = (props: IDialog) => {
  const {
    open,
    title = '',
    text,
    cancelButtonText = 'Cancel',
    cancelButtonIconLeft,
    cancelButtonIconRight,
    confirmButtonText = 'Confirm',
    overlayClassName,
    cancelOnOutsidePress = true,
    onConfirm,
    onCancel,
    ...rest
  } = props;
  const classes = useStyles();
  return open
    ? (
      <div
        className={classNames(classes.overlay, overlayClassName)}
        onClick={() => (cancelOnOutsidePress && onCancel) && onCancel?.()}
        data-testid="test-dialog-overlay"
      >
        <div
          className={classes.dialog}
          onClick={(e) => e.stopPropagation()}
          data-testid="test-dialog"
          {...rest}
        >
          {title && (
            <Text
              variant="subline"
              className={classes.title}
            >
              {title}
            </Text>
          )}
          {text && (typeof text === 'string')
            ? (
              <Text
                className={classes.text}
                component="p"
                variant="body"
              >
                {text}
              </Text>
            )
            : text
          }
          <div className={classes.buttonsContainer}>
            <DialogButton
              iconLeft={cancelButtonIconLeft}
              iconRight={cancelButtonIconRight}
              onClick={onCancel}
            >
              {cancelButtonText}
            </DialogButton>
            <DialogButton
              onClick={onConfirm}
            >
              {confirmButtonText}
            </DialogButton>
          </div>
        </div>
      </div>
    )
    : null;
}

export default Dialog;
