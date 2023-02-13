import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import Elevation from '../../Elevation'

export interface ISwitchIcon {
  checked?: boolean,
  color?: 'primary' | 'secondary' | 'error',
  disabled?: boolean,
}

export const SwitchIcon = (props: ISwitchIcon) => {
  const { checked, disabled, color } = props;
  const classes = useStyles(color);

  return (
    <div className={classNames(classes.switchIcon, {
      [classes.checked]: checked,
      [classes.disabled]: disabled,
    })}>
      
      <div className={classNames(
        classes.circleContainer,
        { [classes.circleContainerChecked]: checked, }
      )}>
        <div className={classes.circleHighlight} />
        <Elevation
          variant='light'
          component='div'
        >
          <div className={classes.circle}/>
        </Elevation>
      </div>
      
    </div>
  );
}

SwitchIcon.defaultProps = {
  color: 'primary',
}
