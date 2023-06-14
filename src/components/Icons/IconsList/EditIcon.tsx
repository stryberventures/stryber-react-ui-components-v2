import React from 'react';
import { TCommonIconVariants } from '../types';

const iconVariants = {
  default: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5 17.5H2.6L13.675 6.42499L12.575 5.32499L1.5 16.4V17.5ZM16.85 5.34999L13.65 2.14999L14.7 1.09999C14.9833 0.816658 15.3375 0.679158 15.7625 0.687491C16.1875 0.695824 16.5417 0.841658 16.825 1.12499L17.9 2.19999C18.1833 2.48332 18.325 2.83332 18.325 3.24999C18.325 3.66666 18.1833 4.01666 17.9 4.29999L16.85 5.34999ZM0.75 19C0.533333 19 0.354167 18.9292 0.2125 18.7875C0.0708334 18.6458 0 18.4667 0 18.25V16.1C0 16 0.0166666 15.9083 0.05 15.825C0.0833333 15.7417 0.141667 15.6583 0.225 15.575L12.6 3.19999L15.8 6.39999L3.425 18.775C3.34167 18.8583 3.25833 18.9167 3.175 18.95C3.09167 18.9833 3 19 2.9 19H0.75ZM13.125 5.87499L12.575 5.32499L13.675 6.42499L13.125 5.87499Z"
        fill={fill}
      />
    </svg>
  ),
  filled: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16.85 5.34999L13.65 2.14999L14.7 1.09999C14.9833 0.816658 15.3375 0.679158 15.7625 0.687491C16.1875 0.695824 16.5417 0.841658 16.825 1.12499L17.9 2.19999C18.1833 2.48332 18.325 2.83332 18.325 3.24999C18.325 3.66666 18.1833 4.01666 17.9 4.29999L16.85 5.34999ZM0.75 19C0.533333 19 0.354167 18.9292 0.2125 18.7875C0.0708334 18.6458 0 18.4667 0 18.25V16.1C0 16 0.0166666 15.9083 0.05 15.825C0.0833333 15.7417 0.141667 15.6583 0.225 15.575L12.6 3.19999L15.8 6.39999L3.425 18.775C3.34167 18.8583 3.25833 18.9167 3.175 18.95C3.09167 18.9833 3 19 2.9 19H0.75Z"
        fill={fill}
      />
    </svg>
  ),
};

interface IEditIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TCommonIconVariants;
}

export default function EditIcon({
  variant = 'default',
  fill = '#101828',
  width = 19,
  height = 19,
  ...rest
}: IEditIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
