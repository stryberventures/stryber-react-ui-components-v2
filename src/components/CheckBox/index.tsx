import * as React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import {CheckBoxMark} from './CheckBoxMark';
import {RadioBoxMark} from './RadioBoxMark';

export interface ICheckBoxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'size'> {
    className?: string;
    label: string;
    name: string;
    type?: 'checkbox' | 'radio';
    size?: 'small' | 'medium';
    shape?: 'square' | 'circle';
    shadow: boolean;
    checked?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    placeholder?: any | React.Component;
    onChange?: (e: React.BaseSyntheticEvent) => void;
}

export const CheckBox = (props: ICheckBoxProps) => {
    /** Get props */
    const {className, label, name, type, size, shape, shadow, checked, disabled,
         errorMessage, placeholder, onChange, onFocus, ...rest} = props;
    const classes = useStyles(props);
    const [internalValue, setInternalValue] = React.useState(checked);
    const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
        const { name, checked } = e.target;
        /** Set internal value */
        if (disabled === false) setInternalValue(checked);
    };
    return (
            <label className={classes.label}>
                <input
                    {...rest}
                    type={type}
                    className={classNames(classes.input,
                        {[classes.disabled]: disabled},
                    )}
                    name={type}
                    checked={internalValue}
                    onChange={onChangeWrapper}
                />
                {type !== 'radio' ?
                    CheckBoxMark && <CheckBoxMark
                        shape={shape}
                        size={size}
                        shadow={shadow}
                        checked={internalValue}
                        disabled={disabled}
                    /> :
                    RadioBoxMark && <RadioBoxMark
                        size={size}
                        shadow={shadow}
                        checked={internalValue}
                        disabled={disabled}
                    />
                }
                {placeholder &&
                <div className={classes.placeholder}>
                    { placeholder }
                </div>}
            </label>
    );
};
CheckBox.defaultProps = {
    type: 'checkbox',
    size: 'small',
    shape: 'square',
    checked: false,
    shadow: true,
    disabled: true,
}
