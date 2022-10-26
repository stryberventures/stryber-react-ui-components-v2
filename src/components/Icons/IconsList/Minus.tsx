import React from 'react';

export interface IMinus extends React.SVGProps<SVGSVGElement> {
  fill?: string,
}

const Minus = (props: IMinus) => {
  const { fill, ...rest } = props;
  return (
    <svg viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <line x1="10" y1="1" y2="1" stroke={fill} strokeWidth="2"/>
    </svg>
  );
}

Minus.defaultProps = {
  fill: '#667085',
  width: '10px',
  height: '2px'
}

export default Minus;
