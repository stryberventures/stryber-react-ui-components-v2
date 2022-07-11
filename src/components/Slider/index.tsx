import React, { useCallback, useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import useStyles from './styles';
import { Input, IInput } from '../Input';
import { useFormContext } from '../Form';

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
export interface IStyles {
  minLeft: string,
  maxLeft: string,
}
export const Slider = (props: ISlider) => {
  const {
    min = 0,
    max = 100,
    step = 1,
    sliderVersion,
    showSideLabels,
    showStepMarks,
    thumbLabels,
    name = 'slider',
  } = props;
  const { fieldValue, unsetFormValue, updateFormValue } = useFormContext(name);
  const [minVal, setMinVal] = useState(Array.isArray(fieldValue) ? fieldValue[1] : fieldValue || min);
  const [maxVal, setMaxVal] = useState(Array.isArray(fieldValue) ? fieldValue[1] : fieldValue || max);
  const [minSize, setMinSize] = useState(minVal);
  const [maxSize, setMaxSize] = useState(maxVal);
  const [showMin, setShowMin] = useState(false);
  const [showMax, setShowMax] = useState(false);
  const [error, setError] = useState(false);
  const range = useRef<HTMLDivElement>(null);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => {
      return ((value - min) * 100 / (max - min));
    }, [min, max]);

  const labelPosition = (value: number) => `calc(${getPercent(value)}% + (${15 - getPercent(value) * 0.3}px))`;
  const [minLeft, setMinLeft] = useState(min.toString());
  const [maxLeft, setMaxLeft] = useState(max.toString());
  const classes = useStyles( { minLeft, maxLeft });


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
  useEffect( () => {
    updateFormValue(name, range ? [minVal, maxVal] : minVal, true);
    return () => {
      unsetFormValue(name);
    };
  },[])

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
      res = min
    } else {
      res = value
    }
    setMinVal(res);
    setMinLeft(labelPosition(res));
    setError(false);
    updateFormValue(name, res);
  };
  const onMaxSubmit = (e: React.BaseSyntheticEvent) => {
    const value = e.currentTarget.value;
    let res = null;
    if(isNaN(value) || value > max || value == '') {
      res = max
    } else if (value < minVal) {
      res = max
    } else {
      res = value
    }
    setMaxVal(res);
    setMaxLeft(labelPosition(res));
    setError(false);
    updateFormValue(name, res);
  };

  const thumbMin = (e: React.BaseSyntheticEvent) => {
    const value = Math.min(+e.target.value, +maxVal - step);
    setMinVal(value);
    setMinSize(value);
    setMinLeft(labelPosition(value));
    setShowMin(true);
  }
  const thumbMax = (e: React.BaseSyntheticEvent) => {
    const value = Math.max(+e.target.value, +minVal + step);
    setMaxVal(value);
    setMaxSize(value);
    setMaxLeft(labelPosition(value));
    setShowMax(true);
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
        controlled={true}
        className={classes.thumb}
        onClick={() => setShowMin(true)}
        onChange={thumbMin}
        onMouseEnter={() => {
          setShowMin(true);
          setShowMax(false);
          setMinLeft(labelPosition(+minLeft))
        }}
      />
      {sliderVersion === 'range' && (
        <Input
          data-testid="testSecondInputID"
          type="range"
          name='max'
          label=''
          min={min}
          max={max}
          value={maxVal.toString()}
          step={step}
          controlled={true}
          className={classes.thumb}
          onClick={() => setShowMax(true)}
          onChange={thumbMax}
          onMouseEnter={() => {
            setShowMax(true);
            setShowMin(false);
            setMaxLeft(labelPosition(+maxLeft))
          }}
        />
      )}
      <div className={classes.slider}>
        <div className={classes.sliderTrack} />
        <div ref={range} className={classes.sliderRange} />
        {step > 1 && showStepMarks && (<div data-testid="testStepMarksID" className={classes.dotsContainer}>{dots}</div>)}
        {showSideLabels && (
          <>
            <div data-testid="testLabelID" className={classes.sliderLeftValue}>{min}</div>
            <div className={classes.sliderRightValue}>{max}</div>
          </>
        )}
        {thumbLabels === 'labels' && (
          <>
            <div data-testid="testThumbLabelID" className={classnames(classes.thumbMinLabel, { [classes.show]: showMin })}>{minVal}</div>
            {sliderVersion === 'range' && (
              <div className={classnames(classes.thumbMaxLabel, { [classes.show]: showMax })}>{maxVal}</div>
            )}
          </>
        )}
        {thumbLabels === 'inputs' && (
          <>
            <div data-testid="testThumbInputID"
              className={classnames(classes.inputMinValue, { [classes.show]: showMin, [classes.error]: error })}>
              <Input
                key={minVal}
                label=''
                name='minSliderInput'
                size={minSize.toString().length || 1}
                value={minVal.toString()}
                onChange={onMinChange}
                onBlur={onMinSubmit}
                onClick={() => setShowMin(true)}
                onKeyDown={(e) => {e.key === 'Enter' && keyPress(e)}}
              />
            </div>
            {sliderVersion === 'range' && (
              <div className={classnames(classes.inputMaxValue, { [classes.show]: showMax, [classes.error]: error })}>
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
  step: 1,
  showSideLabels: true,
  showStepMarks: false,
  thumbLabels: 'labels',
}
