import React from 'react';
import toRem from '../../../utils/toRem';

export interface IRadioIcon extends React.SVGProps<SVGSVGElement> {
  fill?: string,
}

const RadioIcon = (props: IRadioIcon) => {
  const { fill, ...rest } = props;
  return (
    <svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="4" cy="4" r="4" fill={fill}/>
    </svg>
  );
}

RadioIcon.defaultProps = {
  fill: 'white',
  width: toRem(8),
  height: toRem(8),
}

export default RadioIcon;
