import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface ISwitchIcon {
  checked?: boolean,
  color?: 'primary' | 'secondary',
  disabled?: boolean,
}

export const SwitchIcon = (props: ISwitchIcon) => {
  const { checked, disabled } = props;
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.toggleIcon, {
      [classes.checked]: checked,
      [classes.disabled]: disabled,
    })}>
      <div className={classNames(classes.circleContainer)}>
        <div className={classes.circleHighlight}/>
        <div className={classes.circle}/>
      </div>
    </div>
  );
}

SwitchIcon.defaultProps = {
  color: 'primary',
}
