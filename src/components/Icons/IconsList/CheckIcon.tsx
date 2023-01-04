import React from 'react';
import { TCommonIconVariants } from '../types';


const iconVariants = {
  default: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.45005 17.55C9.35005 17.55 9.25838 17.5334 9.17505 17.5C9.09172 17.4667 9.00838 17.4084 8.92505 17.325L4.40005 12.8C4.25005 12.65 4.17505 12.4667 4.17505 12.25C4.17505 12.0334 4.25005 11.85 4.40005 11.7C4.55005 11.55 4.72505 11.475 4.92505 11.475C5.12505 11.475 5.30005 11.55 5.45005 11.7L9.45005 15.7L18.525 6.62502C18.675 6.47502 18.8542 6.40002 19.0625 6.40002C19.2709 6.40002 19.45 6.47502 19.6 6.62502C19.75 6.77502 19.825 6.95419 19.825 7.16252C19.825 7.37086 19.75 7.55002 19.6 7.70002L9.97505 17.325C9.89172 17.4084 9.80838 17.4667 9.72505 17.5C9.64172 17.5334 9.55005 17.55 9.45005 17.55Z"
        fill={props.fill}
      />
    </svg>
  ),
  filled: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.525 14.275L8.075 11.825C7.925 11.675 7.74167 11.6 7.525 11.6C7.30833 11.6 7.125 11.675 6.975 11.825C6.80833 11.9917 6.725 12.1875 6.725 12.4125C6.725 12.6375 6.8 12.825 6.95 12.975L10 16.025C10.1333 16.1583 10.3083 16.225 10.525 16.225C10.7417 16.225 10.9167 16.1583 11.05 16.025L17.05 10.025C17.2 9.875 17.275 9.69167 17.275 9.475C17.275 9.25833 17.1917 9.06667 17.025 8.9C16.875 8.75 16.6875 8.675 16.4625 8.675C16.2375 8.675 16.0417 8.75833 15.875 8.925L10.525 14.275ZM12 22C10.5833 22 9.26667 21.7458 8.05 21.2375C6.83333 20.7292 5.775 20.025 4.875 19.125C3.975 18.225 3.27083 17.1667 2.7625 15.95C2.25417 14.7333 2 13.4167 2 12C2 10.6 2.25417 9.29167 2.7625 8.075C3.27083 6.85833 3.975 5.8 4.875 4.9C5.775 4 6.83333 3.29167 8.05 2.775C9.26667 2.25833 10.5833 2 12 2C13.4 2 14.7083 2.25833 15.925 2.775C17.1417 3.29167 18.2 4 19.1 4.9C20 5.8 20.7083 6.85833 21.225 8.075C21.7417 9.29167 22 10.6 22 12C22 13.4167 21.7417 14.7333 21.225 15.95C20.7083 17.1667 20 18.225 19.1 19.125C18.2 20.025 17.1417 20.7292 15.925 21.2375C14.7083 21.7458 13.4 22 12 22Z"
        fill={props.fill}
      />
    </svg>
  ),
};

interface ICheckIcon extends React.SVGProps<SVGSVGElement>{
  variant: TCommonIconVariants
}

export default function CheckIcon ({
  variant = 'default',
  fill = '#101828',
  width = 24,
  height = 24,
  ...rest
}: ICheckIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
