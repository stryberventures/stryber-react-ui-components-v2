import React from 'react';
import toRem from '../../Theme/toRem';

export interface IVertivalLine extends React.SVGProps<SVGSVGElement> {
  fill?: string,
}

const VerticalLine = (props: IVertivalLine) => {
  const { fill, ...rest } = props;
  return (
    <svg viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2="22" stroke={fill}/>
    </svg>
  );
}

VerticalLine.defaultProps = {
  fill: '#C7CCD3',
  width: toRem(1),
  height: toRem(22),
}

export default VerticalLine;
