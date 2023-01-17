import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface ISwitchIcon {
  checked?: boolean,
  color?: 'primary' | 'secondary',
  disabled?: boolean,
  size?: 'small' | 'medium',
}

export const SwitchIcon = (props: ISwitchIcon) => {
  const { checked, disabled, size = 'medium' } = props;
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.switchIcon, classes[size], {
      [classes.checked]: checked,
      [classes.disabled]: disabled,
    })}>
      <div className={classNames(
        classes.circleContainer,
        { [classes.circleContainerChecked]: checked, }
      )}>
        <div className={classes.circleHighlight} />
        <div className={classes.circle}/>
      </div>
    </div>
  );
}

SwitchIcon.defaultProps = {
  color: 'primary',
}
