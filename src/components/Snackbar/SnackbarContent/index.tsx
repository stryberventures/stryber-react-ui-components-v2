import React from 'react';
import useStyles from './styles';
import Text from '../../Text';
import * as Icons from '../../Icons';
import { useDir, useTheme } from '../../Theme';
import classNames from 'classnames';

export interface ISnackbarContentProps {
  message?: string;
  description?: string;
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
  onClose?: () => void;
  withIcon?: boolean;
  className?: string;
  dir?: string;
  style?: React.CSSProperties;
}

const SnackbarContent = React.forwardRef<HTMLDivElement, ISnackbarContentProps>((props, ref) => {
  const {
    variant,
    message,
    description,
    withIcon = true,
    onClose,
    className,
    dir = useDir(props.dir),
    style,
  } = props;
  const { theme } = useTheme();

  const variantToColor = () => {
    switch (variant) {
      case 'success':
      case 'error':
      case 'warning':
        return variant;
      case 'info':
        return 'primary';
      default:
        return null;
    }
  }

  const classes = useStyles()({
    ...props,
    color: variantToColor(),
    dir
  });

  const renderIcon = () => {
    const iconProps = {
      variant: 'filled' as const,
      className: classes.icon,
      fill: theme.colors[variantToColor()!]?.dark600,
      'data-testid': 'gaia-snackbar-icon'

    };
    switch (variant) {
      case 'success':
        return <Icons.CheckIcon {...iconProps} />;
      case 'error':
        return <Icons.ErrorIcon {...iconProps} />;
      case 'warning':
        return <Icons.WarningIcon {...iconProps} />;
      case 'info':
        return <Icons.InfoIcon {...iconProps} />;
      default:
        return null;
    }
  }

  return (
    <div ref={ref} className={classNames(classes.snackbarContent, className)} style={style} >
      <div className={classes.mainContent}>
        {(variant !== 'default' && withIcon) && <div className={classes.symbol}>{renderIcon()}</div>}
        <div className={classes.message}>
          <Text weight="semiBold" variant="components2" className={classes.title}>{message}</Text>
          {description && <Text variant="components2" className={classes.description}>{description}</Text>}
        </div>
      </div>
      {(variant !== 'default' && !!onClose) && (<div onClick={onClose} data-testid="gaia-snackbar-close-button">
        <Icons.CloseIcon fill={theme.colors[variantToColor()!]?.dark600} className={classes.closeIcon}/>
      </div>)}
    </div>
  );
});

SnackbarContent.displayName = 'SnackbarContent';

export default SnackbarContent;
