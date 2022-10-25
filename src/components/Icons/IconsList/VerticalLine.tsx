import React from 'react';

export interface IVertivalLine extends React.SVGProps<SVGSVGElement> {
  fill?: string,
}

const VertivalLine = (props: IVertivalLine) => {
  const { fill, ...rest } = props;
  return (
    <svg viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2="22" stroke={fill}/>
    </svg>
  );
}

VertivalLine.defaultProps = {
  fill: '#C7CCD3',
  width: '1px',
  height: '22px',
}

export default VertivalLine;
