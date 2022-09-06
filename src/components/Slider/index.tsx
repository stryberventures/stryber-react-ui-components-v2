import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import useStyles from './styles';
import Input from '../Input';
import { useFormContext } from '../Form';

export interface ISlider extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  min?: number,
  max?: number,
  minValue?: number,
  maxValue?: number,
  minDistance?: number,
  step?: number,
  rangeSlider?: boolean,
  showSideLabels?: boolean,
  showStepMarks?: boolean,
  thumbLabels?: 'input' | 'tooltip',
  color?: 'primary' | 'secondary',
  name?: string,
  value?: number | number[],
  controlled?: boolean,
  onChange?: (value: number | number[]) => void,
}

export const Slider = (props: ISlider) => {
  const {
    min = 0,
    max = 100,
    minValue = min,
    maxValue = max,
    step = 1,
    rangeSlider = false,
    value = rangeSlider ? [min, max] : 0,
    controlled = false,
    minDistance = (rangeSlider && controlled) ? 1 : 0,
    showSideLabels = true,
    showStepMarks = false,
    thumbLabels,
    color,
    name = 'slider',
    onChange,
    ...rest
  } = props;
  const classes = useStyles(props);
  const { fieldValue, unsetFormValue, updateFormValue } = useFormContext(name);
  const [minVal, setMinVal] = useState(Array.isArray(fieldValue) ? fieldValue[0] : fieldValue || minValue);
  const [maxVal, setMaxVal] = useState(fieldValue ? fieldValue[1] : maxValue);
  const [minSize, setMinSize] = useState(minVal.toString().length * 10);
  const [maxSize, setMaxSize] = useState(maxVal.toString().length * 10);
  const [showMin, setShowMin] = useState(false);
  const [showMax, setShowMax] = useState(false);
  const [error, setError] = useState(false);
  const range = useRef<HTMLDivElement>(null);

  const thumbPosition = (res: number) => {
    if (range.current && range.current.parentElement) {
      return (range.current.parentElement.offsetWidth - 30) / (max - min) * (res - min);
    } else return 0;
  }
  const [positionMin, setPositionMin] = useState(thumbPosition(minVal));
  const [positionMax, setPositionMax] = useState(thumbPosition(maxVal));

  const handleSetPosition = () => {
    if (range.current && range.current.parentElement) {
      const stepPX = (range.current.parentElement.offsetWidth - 30) / (max - min);
      const minPos = minVal === min ? 0 : stepPX * (minVal - min);
      setPositionMin(minPos);
      if (range) setPositionMax(stepPX * (maxVal - min));
    }
  }
  useEffect( () => {
    window.addEventListener('resize', handleSetPosition)
    return () => {
      window.removeEventListener('resize', handleSetPosition)
    }
  }, [handleSetPosition]);

  useEffect(() => {
    handleSetPosition();
    let data = [minVal, maxVal];
    if (minVal > maxVal) {
      data = [maxVal, minVal];
    }
    updateFormValue(name, rangeSlider ? data : minVal, true);
    return () => {
      unsetFormValue(name);
    };
  }, []);

  useEffect(() => {
    if (rangeSlider) {
      if (range.current) {
        const left = positionMin < positionMax ? positionMin : positionMax;
        const width = positionMin < positionMax ? positionMax - positionMin : positionMin - positionMax;
        range.current.style.left = `${left}px`;
        range.current.style.width = `${width}px`;
      }
    } else {
      if (range.current) {
        range.current.style.left = '0';
        range.current.style.width = `${positionMin}px`;
      }
    }
  }, [positionMin, positionMax, rangeSlider]);
  useEffect(
    () => {
      if (controlled) {
        let data: number | number[] = value;
        if (rangeSlider && Array.isArray(data)) {
          if (data[0] > data[1]) {
            data = [data[1], data[0]];
            onChange?.(data);
          }
          setPositionMax(thumbPosition(data[1]));
          setMaxVal(data[1]);
        }
        if (!rangeSlider && data > maxVal) {
          data = maxVal;
        }
        setMinVal(Array.isArray(data) ? data[0] : data);
        setPositionMin(thumbPosition(Array.isArray(data) ? data[0] : data));
        updateFormValue(name, data);
      }
    },
    [value]
  );
  const dots = [];
  if (showStepMarks) {
    for(let i = 0; i < ((max - min) / step + 1); i++) {
      dots.push(<div className={classes.dot} key={i}/>);
    }
  }

  const onMinChange = (e: React.BaseSyntheticEvent) => {
    const targetValue = Number(e.target.value);
    setMinVal(targetValue);
    setMinSize(targetValue.toString().length * 10);
    if(isNaN(targetValue) || targetValue < min || targetValue > max ||
      (rangeSlider && minDistance > 0 && targetValue > maxVal - minDistance)) {
      setError(true);
    } else setError(false);
  };
  const onMaxChange = (e: React.BaseSyntheticEvent) => {
    const targetValue = Number(e.target.value);
    setMaxVal(targetValue);
    setMaxSize(targetValue.toString().length * 10);
    if(isNaN(targetValue) || targetValue > max || targetValue < min ||
      (minDistance > 0 && targetValue < minVal + minDistance)) {
      setError(true);
    } else setError(false);
  };
  const onMinSubmit = (e: React.BaseSyntheticEvent) => {
    const targetValue = Number(e.currentTarget.value);
    let res = null;
    if(isNaN(targetValue) || targetValue < min || targetValue == 0) {
      res = min;
    } else if (rangeSlider && minDistance > 0 && targetValue > maxVal - minDistance) {
      res = maxVal - minDistance;
    } else if (targetValue > max) {
      res = max;
    } else {
      res = targetValue;
    }
    setMinVal(res);
    setPositionMin(thumbPosition(res));
    setMinSize(res.toStringx().length * 10);
    setError(false);
    updateFormValue(name, Array.isArray(value) ? [res, value[1]] : targetValue);
    controlled && onChange?.(Array.isArray(value) ? [res, value[1]] : targetValue);
  };
  const onMaxSubmit = (e: React.BaseSyntheticEvent) => {
    const targetValue = Number(e.currentTarget.value);
    let res = null;
    if(isNaN(targetValue) || targetValue > max || targetValue == 0) {
      res = max;
    } else if (rangeSlider && minDistance > 0 && targetValue < minVal + minDistance) {
      res = minVal + minDistance;
    } else {
      res = targetValue;
    }
    setMaxVal(res);
    setPositionMax(thumbPosition(res));
    setMaxSize(res.toString().length * 10);
    setError(false);
    updateFormValue(name, Array.isArray(value) ? [value[0], res] : targetValue);
    controlled && onChange?.(Array.isArray(value) ? [value[0], res] : targetValue);
  };

  const keyPress = (e: React.BaseSyntheticEvent) => {
    e.currentTarget.name === 'maxInput' ? onMaxSubmit(e) : onMinSubmit(e);
  }

  const handleDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    if (e.currentTarget.id === 'minThumb') {
      e.currentTarget.onpointermove = (e) => moveMin(e);
    } else {
      e.currentTarget.onpointermove = (e)=> moveMax(e);
    }
  }
  const moveMin = (_value: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    const [res, position] = checking(_value);
    setPositionMin(position);
    setMinVal(res);
    setMinSize(res.toString().length * 10);
    setShowMin(true);
    updateFormValue(name, rangeSlider ? [res, maxVal] : res);
    if (controlled) onChange?.(Array.isArray(value) ? [res, value[1]] : res);
  }
  const moveMax = (_value: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    const [res, position] = checking(_value);
    setPositionMax(position);
    setMaxVal(res);
    setMaxSize(res.toString().length * 10);
    setShowMax(true);
    updateFormValue(name, rangeSlider ? [minVal, res] : res);
    if (controlled) onChange?.(Array.isArray(value) ? [value[0], res] : res);
  }
  const checking = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    const parent = (e.target as HTMLDivElement).parentElement!;
    const parentWidth = parent.offsetWidth;
    const id = (e.target as HTMLDivElement).id;
    let position = +e.clientX - parent.getBoundingClientRect().left - 15;

    if (minDistance > 0) {
      const minDistancePX = (parentWidth - 30) / (max - min) * minDistance;
      if (id === 'minThumb' && position > positionMax - minDistancePX) {
        position = positionMax - minDistancePX;
      } else if (id === 'maxThumb' && position < positionMin + minDistancePX) {
        position = positionMin + minDistancePX;
      }
    }
    const _value = Math.round(position / ((parentWidth - 30) / (max - min))) + min;
    if (position > parentWidth - 30) {
      position = parentWidth - 30;
    } else if (position < 0) {
      position = 0;
    }

    let res = _value;
    if (step > 1) {
      const stepCount = Math.round(_value / step);
      res = Math.round(stepCount * step);
    }
    if (res < min) {
      res = min;
    } else if (res > max) {
      res = max;
    }
    if (showStepMarks) {
      position = thumbPosition(res);
    }
    return [res, position];
  }
  const handleStopDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.onpointermove = null;
    e.currentTarget.releasePointerCapture(e.pointerId);
  }
  const trackClick = (e: React.PointerEvent<HTMLDivElement>) => {
    const clickX = +e.clientX - (e.target as HTMLDivElement).parentElement!.getBoundingClientRect().left;
    if (rangeSlider) {
      Math.abs(clickX - positionMin) < Math.abs(clickX - positionMax) ? moveMin(e) : moveMax(e);
    } else moveMin(e);
  }
  return (
    <div className={classes.container}>
      {showSideLabels && (<div data-testid="testLabelID" className={classes.sideLabel}>{min}</div>)}
      <div className={classes.slider}>
        <div
          id="minThumb"
          className={classes.thumb}
          onPointerDown={handleDrag}
          onPointerUp={handleStopDrag}
          onMouseEnter={() => {
            setShowMin(true);
            setShowMax(false);
          }}
          style={{ left: positionMin }}
          {...rest}
        >
          {thumbLabels === 'tooltip' && (
            <div data-testid="testThumbLabelID" className={classnames(classes.thumbLabel, { [classes.show]: showMin })}>{minVal}</div>
          )}
          {thumbLabels === 'input' && (
            <div data-testid="testThumbInputID"
              className={classnames(classes.thumbInput, { [classes.show]: showMin, [classes.error]: error })}>
              <Input
                label=''
                name='minInput'
                controlled={true}
                value={minVal.toString()}
                onChange={onMinChange}
                onBlur={onMinSubmit}
                onKeyDown={(e) => {e.key === 'Enter' && keyPress(e)}}
                style={{ width: minSize }}
              />
            </div>
          )}
        </div>
        {rangeSlider && (
          <div
            data-testid="testSecondInputID"
            id="maxThumb"
            className={classes.thumb}
            onPointerDown={handleDrag}
            onPointerUp={handleStopDrag}
            onMouseEnter={() => {
              setShowMax(true);
              setShowMin(false);
            }}
            style={{ left: positionMax }}
            {...rest}
          >
            {thumbLabels === 'tooltip' && (
              <div className={classnames(classes.thumbLabel, { [classes.show]: showMax })}>{maxVal}</div>
            )}
            {thumbLabels === 'input' && (
              <div className={classnames(classes.thumbInput, { [classes.show]: showMax, [classes.error]: error })}>
                <Input
                  label=''
                  name='maxInput'
                  controlled={true}
                  value={maxVal.toString()}
                  onChange={onMaxChange}
                  onBlur={onMaxSubmit}
                  onKeyDown={(e) => {e.key === 'Enter' && keyPress(e)}}
                  style={{ width: maxSize }}
                />
              </div>
            )}
          </div>
        )}
        <div className={classes.sliderTrack} onPointerDown={trackClick} />
        <div ref={range} className={classes.sliderRange} onPointerDown={trackClick} />
        {showStepMarks && (<div data-testid="testStepMarksID" className={classes.dotsContainer}>{dots}</div>)}
      </div>
      {showSideLabels && (<div className={classes.sideLabel}>{max}</div>)}
    </div>
  );
};

export default Slider;

Slider.defaultProps = {
  color: 'primary',
}

