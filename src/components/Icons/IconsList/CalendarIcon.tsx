import React from 'react';
import { TCommonIconVariants } from '../types';

const iconVariants = {
  default: ({
    fill,
    width,
    height,
    ...rest
  }: React.SVGProps<SVGSVGElement>) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5 20C1.1 20 0.75 19.85 0.45 19.55C0.15 19.25 0 18.9 0 18.5V3C0 2.6 0.15 2.25 0.45 1.95C0.75 1.65 1.1 1.5 1.5 1.5H3.125V0.775C3.125 0.558333 3.2 0.375 3.35 0.225C3.5 0.0749999 3.69167 0 3.925 0C4.15833 0 4.35417 0.0749999 4.5125 0.225C4.67083 0.375 4.75 0.566667 4.75 0.8V1.5H13.25V0.775C13.25 0.558333 13.325 0.375 13.475 0.225C13.625 0.0749999 13.8167 0 14.05 0C14.2833 0 14.4792 0.0749999 14.6375 0.225C14.7958 0.375 14.875 0.566667 14.875 0.8V1.5H16.5C16.9 1.5 17.25 1.65 17.55 1.95C17.85 2.25 18 2.6 18 3V18.5C18 18.9 17.85 19.25 17.55 19.55C17.25 19.85 16.9 20 16.5 20H1.5ZM1.5 18.5H16.5V7.75H1.5V18.5ZM1.5 6.25H16.5V3H1.5V6.25ZM1.5 6.25V3V6.25Z"
        fill={fill}
      />
    </svg>
  ),
  filled: ({ fill, width, height, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5 20C1.1 20 0.75 19.85 0.45 19.55C0.15 19.25 0 18.9 0 18.5V3C0 2.6 0.15 2.25 0.45 1.95C0.75 1.65 1.1 1.5 1.5 1.5H3.125V0.775C3.125 0.558333 3.2 0.375 3.35 0.225C3.5 0.0749999 3.69167 0 3.925 0C4.15833 0 4.35417 0.0749999 4.5125 0.225C4.67083 0.375 4.75 0.566667 4.75 0.8V1.5H13.25V0.775C13.25 0.558333 13.325 0.375 13.475 0.225C13.625 0.0749999 13.8167 0 14.05 0C14.2833 0 14.4792 0.0749999 14.6375 0.225C14.7958 0.375 14.875 0.566667 14.875 0.8V1.5H16.5C16.9 1.5 17.25 1.65 17.55 1.95C17.85 2.25 18 2.6 18 3V18.5C18 18.9 17.85 19.25 17.55 19.55C17.25 19.85 16.9 20 16.5 20H1.5ZM1.5 18.5H16.5V7.75H1.5V18.5Z"
        fill={fill}
      />
    </svg>
  ),
};

interface ICalendarIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TCommonIconVariants;
}

export default function CalendarIcon({
  variant = 'default',
  fill = '#101828',
  width = 18,
  height = 20,
  ...rest
}: ICalendarIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
