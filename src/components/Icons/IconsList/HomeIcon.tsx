import React from 'react';
import { TCommonIconVariants } from '../types';


const iconVariants = {
  default: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5 16.5H5.25V10.25H10.75V16.5H14.5V6.75L8 1.875L1.5 6.75V16.5ZM1.5 18C1.08333 18 0.729167 17.8542 0.4375 17.5625C0.145833 17.2708 0 16.9167 0 16.5V6.75C0 6.51667 0.0541666 6.29167 0.1625 6.075C0.270833 5.85833 0.416667 5.68333 0.6 5.55L7.1 0.675C7.23333 0.575 7.375 0.5 7.525 0.45C7.675 0.4 7.83333 0.375 8 0.375C8.16667 0.375 8.325 0.4 8.475 0.45C8.625 0.5 8.76667 0.575 8.9 0.675L15.4 5.55C15.5833 5.68333 15.7292 5.85833 15.8375 6.075C15.9458 6.29167 16 6.51667 16 6.75V16.5C16 16.9167 15.8542 17.2708 15.5625 17.5625C15.2708 17.8542 14.9167 18 14.5 18H9.25V11.75H6.75V18H1.5Z"
        fill={fill}
      />
    </svg>
  ),
  filled: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5 18C1.08333 18 0.729167 17.8542 0.4375 17.5625C0.145833 17.2708 0 16.9167 0 16.5V6.75C0 6.51667 0.0541666 6.29167 0.1625 6.075C0.270833 5.85833 0.416667 5.68333 0.6 5.55L7.1 0.675C7.23333 0.575 7.375 0.5 7.525 0.45C7.675 0.4 7.83333 0.375 8 0.375C8.16667 0.375 8.325 0.4 8.475 0.45C8.625 0.5 8.76667 0.575 8.9 0.675L15.4 5.55C15.5833 5.68333 15.7292 5.85833 15.8375 6.075C15.9458 6.29167 16 6.51667 16 6.75V16.5C16 16.9167 15.8542 17.2708 15.5625 17.5625C15.2708 17.8542 14.9167 18 14.5 18H10V11H6V18H1.5Z"
        fill={fill}
      />
    </svg>
  ),
};

interface IHomeIcon extends React.SVGProps<SVGSVGElement> {
  variant: TCommonIconVariants,
}

export default function HomeIcon ({
  variant = 'default',
  fill = '#101828',
  width = 16,
  height = 18,
  ...rest
}: IHomeIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
