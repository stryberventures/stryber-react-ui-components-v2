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
export interface ISliderExtended {
  /*minLeft: string,
  maxLeft: string,
  styleLeftThumb: string,
  styleRightThumb: string,*/
  sliderThumbMin: string,
  sliderThumbMax: string,
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
    color,
    name = 'slider',
  } = props;
  const { fieldValue, unsetFormValue, updateFormValue } = useFormContext(name);
  const [minVal, setMinVal] = useState(Array.isArray(fieldValue) ? fieldValue[1] : fieldValue || min);
  const [maxVal, setMaxVal] = useState(Array.isArray(fieldValue) ? fieldValue[1] : fieldValue || max);
  const [minSize, setMinSize] = useState(minVal.toString().length * 13);
  const [maxSize, setMaxSize] = useState(maxVal.toString().length * 13);
  const inputMinSize = minVal.toString().length * 13
  const inputMaxSize = maxVal.toString().length * 13
  const [showMin, setShowMin] = useState(false);
  const [showMax, setShowMax] = useState(false);
  const [error, setError] = useState(false);
  const range = useRef<HTMLDivElement>(null);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => {
      return ((value - min) * 100 / (max - min));
    }, [min, max]);

  /*const labelPosition = (value: number) => `calc(${getPercent(value)}% + (${15 - getPercent(value) * 0.3}px))`;
  const [minLeft, setMinLeft] = useState(min.toString());
  const [maxLeft, setMaxLeft] = useState(max.toString());
  const [styleLeftThumb, setStyleLeftThumb] = useState('0');
  const [styleRightThumb, setStyleRightThumb] = useState('0');*/
  const [positionThumbMin, setPositionThumbMin] = useState('0');
  const [positionThumbMax, setPositionThumbMax] = useState('calc(100% - 30px)');

  const classes = useStyles();


  /*if (sliderVersion === 'range') {
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
  }*/
  useEffect(() => {
    if (sliderVersion === 'range') {
      if (range.current) {
        range.current.style.left = `${getPercent(+minVal)}%`;
        range.current.style.width = `${getPercent(+maxVal) - getPercent(+minVal)}%`;
      }
    } else if (sliderVersion === 'basic') {
      if (range.current) {
        range.current.style.left = '0';
        range.current.style.width = `${getPercent(minVal)}%`;
      }
    }
  }, [minVal, maxVal, getPercent]);
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
    setMinSize(value.toString().length * 13);
    if(isNaN(value) || value > maxVal || value < min) {
      setError(true);
    } else setError(false);
  };
  const onMaxChange = (e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    setMaxSize(value.toString().length * 13);
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
    //setMinLeft(labelPosition(res));
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
    //setMaxLeft(labelPosition(res));
    setError(false);
    updateFormValue(name, res);
  };
  /*const thumbMin = (e: React.BaseSyntheticEvent) => {
    const value = Math.min(+e.target.value, +maxVal - (sliderVersion === 'basic' ? 0 : step));
    if (sliderVersion === 'range' && range.current && range.current.offsetParent && range.current.offsetParent.clientWidth < 30 * ((max - min) / step) && value > min) {
      //setStyleLeftThumb(`calc(${0.3 * getPercent(value)}px - ${getPercent(step)}%)`);
      //console.log(`calc(${0.3 * getPercent(value)}px - ${getPercent(step)}%)`, 'min');
      //let shift = 30 / ((max - min) / step);
      const newShift = 30 / (100 / getPercent(value))
      const stepShift = step / 100 / getPercent(value)
      console.log(`calc(${newShift}px - ${getPercent(step)}%)`, 'minShift');
      if (minVal === min || maxVal === max) {
        setStyleLeftThumb(`calc(${getPercent(step)}% - ${newShift}px)`);
      } else setStyleLeftThumb(`calc(${newShift}px - ${stepShift}%)`);
    } else setStyleLeftThumb('0');
    setMinVal(value);
    setMinSize(value);
    setMinLeft(labelPosition(value));
    setShowMin(true);
    setSliderThumbMin(getPercent(value))
  }*/
  /*const thumbMax = (e: React.BaseSyntheticEvent) => {
    const value = Math.max(+e.target.value, +minVal + (sliderVersion === 'basic' ? 0 : step));
    if (sliderVersion === 'range' && range.current && range.current.offsetParent && range.current.offsetParent.clientWidth < 30 * ((max - min) / step) && value < max) {
      //setStyleRightThumb(`calc(${0.3 * getPercent(max - value)}px - ${getPercent(step)}%)`);
      //console.log(`calc(${0.3 * getPercent(max - value)}px - ${getPercent(step)}%)`, 'max');
      const newShift = 30 / (100 / getPercent(max - value));
      const stepShift = step / 100 / getPercent(max - value)
      console.log(`calc(${newShift}px - ${getPercent(step)}%)`, 'maxShift')
      if (minVal == min || maxVal == max) {
        setStyleRightThumb(`calc(${getPercent(step)}% - ${newShift}px)`);
      } else setStyleRightThumb(`calc(${newShift}px - ${stepShift}%)`);
    } else setStyleRightThumb('0');
    setMaxVal(value);
    setMaxSize(value);
    setMaxLeft(labelPosition(value));
    setShowMax(true);
    setSliderThumbMax(getPercent(max - value))
  }*/

  const keyPress = (e: React.BaseSyntheticEvent) => {
    e.currentTarget.name === 'maxSliderInput' ? onMaxSubmit(e) : onMinSubmit(e)
  }
  const handleDrag = (e: any) => {
    e.currentTarget.onpointermove = e.currentTarget.id === 'minThumb' ? moveMin : moveMax
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  const moveMin = (value: any) => {
    const [res, position] = checking(value)
    //const newVal = checking(value)
    setPositionThumbMin(`${position}px`)
    setMinVal(res);
    setMinSize(res.toString().length * 13);
    setShowMin(true);
  }
  const moveMax = (value: any) => {
    const [res, position] = checking(value)
    //const newVal = checking(value);
    setPositionThumbMax(`${position}px`)
    setMaxVal(res);
    setMaxSize(res.toString().length * 13);
    setShowMax(true);
  }
  const checking = (e: any) => {
    const parent = e.currentTarget.parentElement.getBoundingClientRect();
    const parentWidth = parent.width;
    const left = +e.clientX - parent.left - 15;
    const correction = 100 / parentWidth * 30;
    const value = Math.round((left / ((parentWidth - 30) / ((max - min) / step))) * step);
    console.log(value, 'value');
    let position = null
    if (left > parentWidth - 30) {
      position = parentWidth - 30
    } else if (left < 0) {
      position = 0
    } else position = left


    let res = value;
    if (step > 1) {
      const stepCount = Math.round(value / step);
      res = Math.round(stepCount * step);
    }
    if (res < min) {
      res = min
    } else if (res > max) {
      res = max
    }
    return [res, position]
  }
  const handleStopDrag = (e: any) => {
    e.currentTarget.onpointermove = null
    e.currentTarget.releasePointerCapture(e.pointerId);
  }
  return (
    <div className={classes.container}>
      {/*<Input
        type="range"
        name='min'
        label=''
        min={min}
        max={max}
        value={minVal.toString()}
        step={step}
        controlled={true}
        className={classnames(classes.thumb, classes.minThumb)}
        onClick={() => setShowMin(true)}
        //onChange={thumbMin}
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
          className={classnames(classes.thumb, classes.maxThumb)}
          onClick={() => setShowMax(true)}
          //onChange={thumbMax}
          onMouseEnter={() => {
            setShowMax(true);
            setShowMin(false);
            setMaxLeft(labelPosition(+maxLeft))
          }}
        />
      )}*/}
      <div className={classes.slider}>
        <div
          id="minThumb"
          className={classnames(classes.thumb, classes.sliderThumbMin)}
          onPointerDown={handleDrag}
          onPointerUp={handleStopDrag}
          onMouseEnter={() => {
            setShowMin(true);
            setShowMax(false);
          }}
          style={{ left: positionThumbMin }}
        >
          {thumbLabels === 'labels' && (
            <div data-testid="testThumbLabelID" className={classnames(classes.thumbMinLabel, { [classes.show]: showMin })}>{minVal}</div>
          )}
          {thumbLabels === 'inputs' && (
            <div data-testid="testThumbInputID"
              className={classnames(classes.inputMinValue, { [classes.show]: showMin, [classes.error]: error })}>
              <Input
                key={minVal}
                label=''
                name='minSliderInput'
                //size={minSize.toString().length || 1}
                value={minVal.toString()}
                onChange={onMinChange}
                onBlur={onMinSubmit}
                onClick={(e) => e.preventDefault()}
                onKeyDown={(e) => {e.key === 'Enter' && keyPress(e)}}
                style={{ width: minSize }}
              />
            </div>
          )}
        </div>
        {sliderVersion === 'range' && (
          <div
            data-testid="testSecondInputID"
            id="maxThumb"
            className={classnames(classes.thumb, classes.sliderThumbMax)}
            onPointerDown={handleDrag}
            onPointerUp={handleStopDrag}
            onMouseEnter={() => {
              setShowMax(true);
              setShowMin(false);
            }}
            style={{ left: positionThumbMax }}
          >
            {thumbLabels === 'labels' && (
              <div className={classnames(classes.thumbMaxLabel, { [classes.show]: showMax })}>{maxVal}</div>
            )}
            {thumbLabels === 'inputs' && (
              <div className={classnames(classes.inputMaxValue, { [classes.show]: showMax, [classes.error]: error })}>
                <Input
                  key={maxVal}
                  label=''
                  name='maxSliderInput'
                  //size={maxSize.toString().length || 1}
                  value={maxVal.toString() || '0'}
                  onChange={onMaxChange}
                  onBlur={onMaxSubmit}
                  onClick={() => setShowMax(true)}
                  onKeyDown={(e) => {e.key === 'Enter' && keyPress(e)}}
                  style={{ width: maxSize }}
                />
              </div>
            )}
          </div>
        )}
        <div className={classes.sliderTrack} />
        <div ref={range} className={classes.sliderRange} />
        {step > 1 && showStepMarks && (<div data-testid="testStepMarksID" className={classes.dotsContainer}>{dots}</div>)}
        {showSideLabels && (
          <>
            <div data-testid="testLabelID" className={classes.sliderLeftValue}>{min}</div>
            <div className={classes.sliderRightValue}>{max}</div>
          </>
        )}
        {/*{thumbLabels === 'labels' && (
          <>
            <div data-testid="testThumbLabelID" className={classnames(classes.thumbMinLabel, { [classes.show]: showMin })}>{minVal}</div>
            {sliderVersion === 'range' && (
              <div className={classnames(classes.thumbMaxLabel, { [classes.show]: showMax })}>{maxVal}</div>
            )}
          </>
        )}*/}
        {/*{thumbLabels === 'inputs' && (
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
        )}*/}
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
