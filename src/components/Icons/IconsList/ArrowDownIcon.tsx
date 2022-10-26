import React from 'react';
import toRem from '../../Theme/toRem';

export interface IArrowDownIcon extends React.SVGProps<SVGSVGElement> {
  fill?: string,
}
const ArrowDownIcon = (props: IArrowDownIcon) => {
  const { fill, ...rest } = props;
  return (
    <svg viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fill={fill} d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"/>
    </svg>
  );
}

ArrowDownIcon.defaultProps = {
  fill: 'none',
  width: toRem(14),
  height: toRem(8),
};

export default ArrowDownIcon;
