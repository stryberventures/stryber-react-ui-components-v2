import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface IToggleIcon {
  checked?: boolean,
  color?: 'primary' | 'secondary',
  disabled?: boolean,
}

export const ToggleIcon = (props: IToggleIcon) => {
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

ToggleIcon.defaultProps = {
  color: 'primary',
}
