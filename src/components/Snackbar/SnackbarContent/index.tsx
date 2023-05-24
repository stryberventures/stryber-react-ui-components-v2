import React from 'react';
import useStyles from './styles';
import Text from '../../Text';
import * as Icons from '../../Icons';
import { useTheme } from '../../Theme';
import classNames from 'classnames';

export interface ISnackbarContentProps {
  message?: string;
  description?: string;
  variant?: 'success' | 'error' | 'warning' | 'info' | 'basic';
  handleClose?: () => void;
  withCloseButton?: boolean;
  withIcon?: boolean;
  className?: string;
}

const SnackbarContent: React.FC<ISnackbarContentProps> = (props) => {
  const {
    variant,
    message,
    description,
    withCloseButton = false,
    withIcon = true,
    handleClose,
    className,
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

  const classes = useStyles()({ ...props, color: variantToColor() });

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
    <div className={classNames(classes.snackbarContent, className)}>
      <div className={classes.mainContent}>
        {(variant !== 'basic' && withIcon) && <div className={classes.symbol}>{renderIcon()}</div>}
        <div className={classes.message}>
          <Text weight="semiBold" variant="components2">{message}</Text>
          {description && <Text variant="components2">{description}</Text>}
        </div>
      </div>
      {(variant !== 'basic' && withCloseButton) && (<div onClick={handleClose} data-testid="gaia-snackbar-close-button">
        <Icons.CloseIcon fill={theme.colors[variantToColor()!]?.dark600} className={classes.closeIcon}/>
      </div>)}
    </div>
  );
};

export default SnackbarContent;
