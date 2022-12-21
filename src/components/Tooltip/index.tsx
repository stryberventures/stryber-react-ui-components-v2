import React, { useState } from 'react';
import classNames from 'classnames';
import { CloseIcon } from '../Icons';
import Text from '../Text';
import useStyles from './styles';

export interface ITooltip extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  version?: 'light' | 'dark',
  position?: 'top' | 'topStart' | 'topEnd' |
  'bottom' | 'bottomStart' | 'bottomEnd' |
  'left' | 'leftStart' | 'leftEnd' |
  'right' | 'rightStart' | 'rightEnd',
  title?: string | React.ReactElement,
  text?: string | React.ReactElement,
  visible?: boolean,
  children: React.ReactNode,
}

const Tooltip: React.FC<ITooltip> = (props) => {
  const {
    version = 'light',
    position = 'top',
    title,
    text,
    visible,
    children,
    className,
    ...rest
  } = props;
  const classes = useStyles(props);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(visible);
  const showTooltip = isHovered || isFocused || isVisible;

  return (
    <div className={classNames(classes.tooltip, className)}>
      <div
        className={classes.tooltipTarget}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          role="tooltip"
          className={classNames(classes.tooltipContainer, classes[position], classes[version], {
            [classes.visible]: visible
          })}
          {...rest}>
          <div className={classes.tooltipBox}>
            {visible && (
              <div
                data-testid="testCloseBtn"
                className={classes.closeBtn}
                onClick={() => setIsVisible(false)}>
                <CloseIcon/>
              </div>
            )}
            {title && typeof title == 'string'
              ? (
                <Text
                  variant="components2"
                  weight="medium"
                  className={classes.title}
                >
                  {title}
                </Text>
              )
              : title}
            {text && typeof text == 'string'
              ? (
                <Text
                  variant="components2"
                  weight="regular"
                  className={classes.text}
                >
                  {text}
                </Text>
              )
              : text
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default Tooltip;

Tooltip.defaultProps = {
  version: 'light',
  position: 'top',
  visible: false,
}
