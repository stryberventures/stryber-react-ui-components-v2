import React from 'react';
import { TCommonIconVariants } from '../types';

const iconVariants = {
  default: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M20 1.5V14.5C20 14.9 19.85 15.25 19.55 15.55C19.25 15.85 18.9 16 18.5 16H1.5C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H18.5C18.9 0 19.25 0.15 19.55 0.45C19.85 0.75 20 1.1 20 1.5ZM1.5 4.225H18.5V1.5H1.5V4.225ZM1.5 7.45V14.5H18.5V7.45H1.5ZM1.5 14.5V1.5V14.5Z"
        fill={fill}
      />
    </svg>
  ),
  filled: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H18.5C18.9 0 19.25 0.15 19.55 0.45C19.85 0.75 20 1.1 20 1.5V14.5C20 14.9 19.85 15.25 19.55 15.55C19.25 15.85 18.9 16 18.5 16H1.5ZM1.5 7.45H18.5V4.225H1.5V7.45Z"
        fill={fill}
      />
    </svg>
  ),
};

interface ICreditCardIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TCommonIconVariants;
}

export default function CreditCardIcon({
  variant = 'default',
  fill = '#101828',
  width = 20,
  height = 16,
  ...rest
}: ICreditCardIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
