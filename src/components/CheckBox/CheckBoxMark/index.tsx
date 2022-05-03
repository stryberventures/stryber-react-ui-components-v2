import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import CheckBoxIcon from './checkBoxIcon';

export interface ICheckBoxMarkProps {
    checked: boolean;
    size?: 'small' | 'medium';
    shape?: 'square' | 'circle';
    color?: 'primary' | 'secondary' | 'error',
    disabled?: boolean;
}

export const CheckBoxMark = (props: ICheckBoxMarkProps) => {
    const {checked,
        size = 'small',
        shape = 'square',
        disabled} = props;
    const classes = useStyles(props);
    return (
        <span
            className={classNames(classes.checkmark, classes[shape], classes[size],
                {[classes.disabled]: disabled},
                {[classes.checked]: checked},
            )}>
            <CheckBoxIcon/>
        </span>
    );
};
export default {
    CheckBoxMark,
}
CheckBoxMark.defaultProps = {
    checked: false,
    size: 'medium',
    shape: 'square',
    color: 'primary',
}
