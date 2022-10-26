import React from 'react';
import toRem from '../../Theme/toRem';

export interface ICheckBoxIcon extends React.SVGProps<SVGSVGElement> {
  fill?: string,
}

const CheckBoxIcon = (props: ICheckBoxIcon) => {
  const { fill, ...rest } = props;
  return (
    <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M12.0542 3.0641C12.295 3.27813 12.3167 3.64684 12.1027 3.88763L5.88044 10.8876C5.76974 11.0122 5.61107 11.0834 5.44445 11.0834C5.27783 11.0834 5.11916 11.0122 5.00846 10.8876L1.89735 7.38763C1.68332 7.14684 1.705 6.77813 1.94579 6.5641C2.18658 6.35006 2.55529 6.37175 2.76933 6.61254L5.44445 9.62206L11.2307 3.11254C11.4447 2.87175 11.8134 2.85006 12.0542 3.0641Z"
        fill={fill}/>
    </svg>
  );
}

CheckBoxIcon.defaultProps = {
  fill: 'white',
  width: toRem(14),
  height: toRem(14),
}
export default CheckBoxIcon;
