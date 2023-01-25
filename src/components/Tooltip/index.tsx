import React, { useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
import Elevation from '../Elevation';
import Text from '../Text';
import useStyles from './styles';
import { useOutsideClick } from '../../hooks/useOnOutsideClick';

export interface ITooltip extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  version?: 'light' | 'dark';
  noArrow?: boolean;
  position?: 'top' | 'topStart' | 'topEnd' |
  'bottom' | 'bottomStart' | 'bottomEnd' |
  'left' | 'leftStart' | 'leftEnd' |
  'right' | 'rightStart' | 'rightEnd';
  title?: string | React.ReactElement;
  text?: string | React.ReactElement;
  visible?: boolean;
  children: React.ReactNode;
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
  const tooltipRef: React.RefObject<HTMLDivElement> = useRef(null);
  const hideTooltip = useCallback(() => isVisible && setIsVisible(false), []);
  tooltipRef && useOutsideClick(tooltipRef, hideTooltip);
  return (
    <div
      className={classNames(classes.tooltip, className)}
      onClick={() => setIsVisible(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div
        role="button"
        tabIndex={0}
        className={classes.tooltipTarget}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={classNames(classes.tooltipContainer, classes[position], {
            [classes.visible]: visible
          })}
          {...rest}
        >
          <div className={classes.tooltipWrapper}>
            <Elevation variant="light" className={classNames(classes.elevation, classes[version])}>
              <div className={classes.tooltipBox}>
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
            </Elevation>
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
  noArrow: false,
  visible: false,
}
