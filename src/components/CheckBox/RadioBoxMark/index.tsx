import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import RadioBoxIcon from '../../../stories/icons/radioBoxIcon';

export interface IRadioBoxMarkProps {
    checked: boolean;
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary',
    shadow: boolean;
    disabled?: boolean;
}

export const RadioBoxMark = (props: IRadioBoxMarkProps) => {
    /** Get props */
    const {checked,
        size = 'small',
        shadow,
        disabled} = props;
    const classes = useStyles(props);
    return (
        <span
            className={classNames(classes.radiomark, classes[size],
                {[classes.shadow]: shadow},
                {[classes.disabled]: disabled},
                {[classes.checked]: checked},
            )}>
            <RadioBoxIcon/>
        </span>
    );
};
RadioBoxMark.defaultProps = {
    checked: false,
    size: 'small',
    color: 'primary',
    shadow: true,
    disabled: true,
}
