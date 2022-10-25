import React from 'react';

export interface IPlus extends React.SVGProps<SVGSVGElement> {
  fill?: string,
}

const Plus = (props: IPlus) => {
  const { fill, ...rest } = props;
  return (
    <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <line x1="5" y1="-4.80825e-08" x2="5" y2="10" stroke={fill} strokeWidth="2" />
      <line x1="10" y1="5" y2="5" stroke={fill} strokeWidth="2" />
    </svg>
  );
}

Plus.defaultProps = {
  fill: '#667085',
  width: '10px',
  height: '10px'
}

export default Plus;
