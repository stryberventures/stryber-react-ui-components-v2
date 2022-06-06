import React, { useEffect, useRef,useState } from 'react';
import classNames from 'classnames';
import useStyles from './styles';

export interface ISlider extends React.HTMLProps<HTMLInputElement> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
}

export const Slider = (props: ISlider) => {
  const {
    min,
    max,
    step,
    value,
    onChange,
    onFocus,
    onBlur,
    ...rest
  } = props;
  const classes = useStyles(props);
  const [internalValue, setInternalValue] = useState(value);
  const [labelVisibility, setLabelVisibility] = useState(false);
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, value: targetValue } = e.target;
    setInternalValue(targetValue);
    onChange && onChange(e);
  };
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    onBlur && onBlur(e);
  };

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isChanging, setIsChanging] = useState(false);
  return (
    <div className={classes.sliderWrap}>
      <div className={classes.sliderRail}></div>
      <div className={classes.sliderTrack}></div>
      <div
        className={classes.sliderThumb}
        onMouseEnter={() => setLabelVisibility(true)}
        onMouseLeave={() => setLabelVisibility(false)}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={internalValue}
          onChange={onChangeWrapper}
          onFocus={onFocusWrapper}
          onBlur={onBlurWrapper}
          {...rest}/>
        {labelVisibility && (
          <div className={classes.valueLabel}>
            <span className={classes.valueLabelCircle}>
              <span className={classes.valueLabelLabel}>{internalValue}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default {
  Slider,
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
}
