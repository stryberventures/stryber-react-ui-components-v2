import React, { FC, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useStyles from './styles';
import classNames from 'classnames';
import SnackbarContent, { ISnackbarContentProps } from './SnackbarContent';

export interface ISnackbarProps
  extends Omit<ISnackbarContentProps, 'handleClose'> {
  open?: boolean;
  onClose?: () => void;
  autoHideDuration?: number;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  className?: string;
  dir?: string;
}

const Snackbar: FC<ISnackbarProps> = (props) => {
  const {
    open = false,
    autoHideDuration = 3000,
    anchorOrigin,
    onClose,
    className,
    ...rest
  } = props;
  const snackbarRef = useRef(null);
  const timerAutoHide = React.useRef<ReturnType<typeof setTimeout>>();
  const classes = useStyles()(props);

  const handleClose = () => {
    onClose && onClose();
    clearTimeout(timerAutoHide.current!);
  };

  useEffect(() => {
    if (open) {
      timerAutoHide.current = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }
    return () => {
      clearTimeout(timerAutoHide.current!);
    };
  }, [open]);

  return (
    <CSSTransition
      nodeRef={snackbarRef}
      in={open}
      timeout={300}
      classNames={{
        enter: classes.animatedEnter,
        enterActive: classes.animatedEnterActive,
        exit: classes.animatedExit,
        exitActive: classes.animatedExitActive,
      }}
      unmountOnExit
    >
      <div
        className={classNames(
          classes.snackbar,
          classes[anchorOrigin!.horizontal],
          classes[anchorOrigin!.vertical],
          className
        )}
        ref={snackbarRef}
        data-testid="gaia-snackbar"
      >
        <SnackbarContent onClose={handleClose} {...rest} />
      </div>
    </CSSTransition>
  );
};

Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
};

export { SnackbarContent };

export default Snackbar;
