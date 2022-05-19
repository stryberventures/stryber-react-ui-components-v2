import React, { useState } from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface ITooltip {
  version?: 'light' | 'dark',
  position?: 'top' | 'topStart' | 'topEnd' |
  'bottom' | 'bottomStart' | 'bottomEnd' |
  'left' | 'leftStart' | 'leftEnd' |
  'right' | 'rightStart' | 'rightEnd',
  title: string,
  text?: string,
  children: any,
}

export const Tooltip = (props: ITooltip) => {
  const {
    version = 'light',
    position = 'top',
    title,
    text,
    children
  } = props;
  const classes = useStyles(props);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showTooltip = isHovered || isFocused ;
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
        <div className={classNames(classes.tooltipContainer, classes[position])}>
          <div className={classNames(classes.tooltipBox, classes[version])}>
            <div className={classes.title}>{title}</div>
            {text && <div className={classes.text}>{text}</div>}
          </div>
        </div>)}
    </div>
  );
}

export default {
  Tooltip,
}

Tooltip.defaultProps = {
  version: 'light',
  position: 'top',
}
