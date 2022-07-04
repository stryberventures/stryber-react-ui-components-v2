import React, { useCallback, useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import useStyles from './styles';
import { Input, IInput } from '../Input';

export interface ISlider extends IInput {
  min?: number,
  max?: number,
  step?: number,
  sliderVersion?: 'basic' | 'range',
  showSideLabels?: boolean,
  showStepMarks?: boolean,
  thumbLabels?: 'inputs' | 'labels' | 'none',
  onChange?: (e: React.BaseSyntheticEvent) => void,
}
export const Slider = (props: ISlider) => {
  const {
    min = 0,
    max = 100,
    step = 1,
    sliderVersion,
    controlled,
    showSideLabels,
    showStepMarks,
    thumbLabels,
  } = props;
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [minSize, setMinSize] = useState(minVal);
  const [maxSize, setMaxSize] = useState(maxVal);
  const [showMin, setShowMin] = useState(false);
  const [showMax, setShowMax] = useState(false);
  const [error, setError] = useState(false);
  const range = useRef<HTMLDivElement>(null);
  const classes = useStyles(props);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => {
      return ((value - min) * 100 / (max - min));
    }, [min, max]);

  const labelPosition = (value: number) => `calc(${getPercent(value)}% + (${15 - getPercent(value) * 0.3}px))`;
  const [minLeft, setMinLeft] = useState(labelPosition(min));
  const [maxLeft, setMaxLeft] = useState(labelPosition(max));

  if (sliderVersion === 'range') {
    // Set width of the range to decrease from the left side
    useEffect(() => {
      if (range.current) {
        range.current.style.left = `${getPercent(+minVal)}%`;
        range.current.style.width = `${getPercent(+maxVal) - getPercent(+minVal)}%`;
      }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
      if (range.current) {
        range.current.style.width = `${getPercent(+maxVal) - getPercent(+minVal)}%`;
      }
    }, [maxVal, getPercent]);
  } else if (sliderVersion === 'basic') {
    // Set width of the range to increase from the left side
    useEffect(() => {
      if (range.current) {
        range.current.style.left = '0';
        range.current.style.width = `${getPercent(minVal)}%`;
      }
    }, [minVal, getPercent]);
  }
  const dots = [];
  if (step > 1 && showStepMarks) {
    for(let i = min; i < max / step + 1; i++) {
      dots.push(<div className={classes.dot} key={i}/>);
    }
  }


  const onMinChange = (e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    setMinSize(value);
    if(isNaN(value) || value > maxVal || value < min) {
      setError(true);
    } else setError(false);
  };
  const onMaxChange = (e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    setMaxSize(value);
    if(isNaN(value) || value < minVal || value > max) {
      setError(true);
    }  else setError(false);
  };

  const onMinSubmit = (e: React.BaseSyntheticEvent) => {
    const value = e.currentTarget.value;
    let res = null;
    if(isNaN(value) || value < min || value == '') {
      res = max
    } else if (value > maxVal) {
      res = minVal
    } else {
      res = value
    }
    setMinVal(res);
    setMinLeft(labelPosition(res));
    setError(false);
  };
  const onMaxSubmit = (e: React.BaseSyntheticEvent) => {
    const value = e.currentTarget.value;
    let res = null;
    if(isNaN(value) || value > max || value == '') {
      res = max
    } else if (value < minVal) {
      res = minVal
    } else {
      res = value
    }
    setMaxVal(res);
    setMaxLeft(labelPosition(res));
    setError(false);
  };

  const thumbMin = (e: React.BaseSyntheticEvent) => {
    const value = Math.min(+e.target.value, +maxVal /*- 1*/);
    setMinVal(value);
    setMinSize(value);
    setMinLeft(`calc(${getPercent(value)}% + (${15 - getPercent(value) * 0.3}px))`);
    setShowMin(true);
  }
  const thumbMax = (e: React.BaseSyntheticEvent) => {
    const value = Math.max(+e.target.value, +minVal /*+ 1*/);
    setMaxVal(value);
    setMaxSize(value);
    setMaxLeft(`calc(${getPercent(value)}% + (${15 - getPercent(value) * 0.3}px))`);
  }

  const keyPress = (e: React.BaseSyntheticEvent) => {
    e.currentTarget.name === 'maxSliderInput' ? onMaxSubmit(e) : onMinSubmit(e)
  }

  return (
    <div className={classes.container}>
      <Input
        type="range"
        name='min'
        label=''
        min={min}
        max={max}
        value={minVal.toString()}
        step={step}
        controlled={controlled}
        className={classes.thumb}
        onClick={() => setShowMin(true)}
        onChange={thumbMin}
        onMouseEnter={() => {setShowMin(true); setShowMax(false)}}
      />
      {sliderVersion === 'range' && (
        <Input
          type="range"
          name='max'
          label=''
          min={min}
          max={max}
          value={maxVal.toString()}
          step={step}
          controlled={controlled}
          className={classes.thumb}
          onClick={() => setShowMax(true)}
          onChange={thumbMax}
          onMouseEnter={() => {setShowMax(true); setShowMin(false);}}
        />
      )}
      <div className={classes.slider}>
        <div className={classes.sliderTrack} />
        <div ref={range} className={classes.sliderRange} />
        {step > 1 && showStepMarks && (<div className={classes.dotsContainer}>{dots}</div>)}
        {showSideLabels && (
          <>
            <div className={classes.sliderLeftValue}>{min}</div>
            <div className={classes.sliderRightValue}>{max}</div>
          </>
        )}
        {thumbLabels === 'labels' && (
          <>
            <div className={classnames(classes.thumbMinLabel, { [classes.show]: showMin })} style={{ left: minLeft }}>{minVal}</div>
            {sliderVersion === 'range' && (
              <div className={classnames(classes.thumbMaxLabel, { [classes.show]: showMax })} style={{ left: maxLeft }}>{maxVal}</div>
            )}
          </>
        )}
        {thumbLabels === 'inputs' && (
          <>
            <div
              className={classnames(classes.inputMinValue, { [classes.show]: showMin, [classes.error]: error })}
              style={{ left: minLeft }}>
              <Input
                key={minVal}
                label=''
                name='minSliderInput'
                size={minSize.toString().length || 1}
                value={minVal.toString() || '0'}
                onChange={onMinChange}
                onBlur={onMinSubmit}
                onClick={() => setShowMin(true)}
                onKeyDown={(e) => {e.key === 'Enter' && keyPress(e)}}
              />
            </div>
            {sliderVersion === 'range' && (
              <div className={classnames(classes.inputMaxValue, { [classes.show]: showMax })} style={{ left: maxLeft }}>
                <Input
                  key={maxVal}
                  label=''
                  name='maxSliderInput'
                  size={maxSize.toString().length || 1}
                  value={maxVal.toString() || '0'}
                  onChange={onMaxChange}
                  onBlur={onMaxSubmit}
                  onClick={() => setShowMax(true)}
                  onKeyDown={(e) => {e.key === 'Enter' && keyPress(e)}}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Slider;
Slider.defaultProps = {
  min: 0,
  max: 10,
  step: 1,
  sliderVersion: 'basic',
  showSideLabels: true,
  showStepMarks: false,
  thumbLabels: 'labels',
}
