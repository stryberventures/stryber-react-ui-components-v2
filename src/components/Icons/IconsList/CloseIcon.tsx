import React from 'react';

export interface ICloseIcon extends React.SVGProps<SVGSVGElement> {
  fill?: string,
}

const CloseIcon = (props: ICloseIcon) => {
  const { fill, ...rest } = props;
  return (
    <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4 3.29289L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L4.70711 4L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L4 4.70711L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill={fill}/>
    </svg>
  );
}

CloseIcon.defaultProps = {
  fill: '#667085',
  width: '8px',
  height: '8px'
}
export default CloseIcon;
