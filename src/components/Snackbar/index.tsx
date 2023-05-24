import React, { FC, useEffect, useState } from 'react';
import useStyles from './styles';
import classNames from 'classnames';
import SnackbarContent, { ISnackbarContentProps } from './SnackbarContent';

export interface ISnackbarProps extends Omit<ISnackbarContentProps, 'handleClose'> {
  open?: boolean;
  onClose?: () => void;
  autoHideDuration?: number;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  className?: string;
}

const Snackbar: FC<ISnackbarProps> = (props) => {
  const {
    open = false,
    autoHideDuration = 5000,
    anchorOrigin,
    onClose,
    className,
    ...rest
  } = props;
  const [showSnackbar, setShowSnackbar] = useState(open);
  const classes = useStyles()(props);

  const handleClose = () => {
    setShowSnackbar(false);
    onClose && onClose();
  }

  useEffect(() => {
    setShowSnackbar(open);
    if (open) {
      setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }
  }, [open]);

  return (
    <div
      className={classNames(
        classes.snackbar,
        { [classes.visible]: showSnackbar },
        classes[anchorOrigin!.horizontal],
        classes[anchorOrigin!.vertical],
        className,
      )}
      data-testid="gaia-snackbar"
    >
      <SnackbarContent handleClose={handleClose} {...rest} />
    </div>
  );
};

Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  withCloseButton: true,
};

export { SnackbarContent };

export default Snackbar;
