import React, { useState } from 'react';
import useStyles from './styles';
import classNames from 'classnames';
import CloseIcon from '../Icons/CloseIcon';

export interface ITooltip extends React.HTMLAttributes<HTMLDivElement> {
  version?: 'light' | 'dark',
  position?: 'top' | 'topStart' | 'topEnd' |
  'bottom' | 'bottomStart' | 'bottomEnd' |
  'left' | 'leftStart' | 'leftEnd' |
  'right' | 'rightStart' | 'rightEnd',
  title: string,
  text?: string,
  visible?: boolean,
  children: React.ReactNode,
}

export const Tooltip = (props: ITooltip) => {
  const {
    version = 'light',
    position = 'top',
    title,
    text,
    visible,
    children
  } = props;
  const classes = useStyles(props);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(visible);
  const showTooltip = isHovered || isFocused || isVisible;

  return (
    <div className={classes.tooltipWrap}>
      <div
        className={classes.tooltipTarget}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >{children}</div>
      {showTooltip && (
        <div
          role="tooltip"
          className={classNames(classes.tooltipContainer, classes[position], classes[version], {
            [classes.visible]: visible
          })}>
          <div className={classes.tooltipBox}>
            {visible && (
              <div
                data-testid="testCloseBtn"
                className={classes.closeBtn}
                onClick={() => setIsVisible(false)}>
                <CloseIcon/>
              </div>
            )}
            <div className={classes.title}>{title}</div>
            {text && <div className={classes.text}>{text}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default {
  Tooltip,
}

Tooltip.defaultProps = {
  version: 'light',
  position: 'top',
  visible: false,
}
