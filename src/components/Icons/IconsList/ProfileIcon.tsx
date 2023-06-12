import React from 'react';
import { TCommonIconVariants } from '../types';

const iconVariants = {
  default: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 11.975C10.9 11.975 10 11.625 9.3 10.925C8.6 10.225 8.25 9.32498 8.25 8.22498C8.25 7.12498 8.6 6.22498 9.3 5.52498C10 4.82498 10.9 4.47498 12 4.47498C13.1 4.47498 14 4.82498 14.7 5.52498C15.4 6.22498 15.75 7.12498 15.75 8.22498C15.75 9.32498 15.4 10.225 14.7 10.925C14 11.625 13.1 11.975 12 11.975ZM18.5 20H5.5C5.08333 20 4.72917 19.8541 4.4375 19.5625C4.14583 19.2708 4 18.9166 4 18.5V17.65C4 17.0166 4.15833 16.475 4.475 16.025C4.79167 15.575 5.2 15.2333 5.7 15C6.81667 14.5 7.8875 14.125 8.9125 13.875C9.9375 13.625 10.9667 13.5 12 13.5C13.0333 13.5 14.0583 13.6291 15.075 13.8875C16.0917 14.1458 17.1583 14.5166 18.275 15C18.7917 15.2333 19.2083 15.575 19.525 16.025C19.8417 16.475 20 17.0166 20 17.65V18.5C20 18.9166 19.8542 19.2708 19.5625 19.5625C19.2708 19.8541 18.9167 20 18.5 20ZM5.5 18.5H18.5V17.65C18.5 17.3833 18.4208 17.1291 18.2625 16.8875C18.1042 16.6458 17.9083 16.4666 17.675 16.35C16.6083 15.8333 15.6333 15.4791 14.75 15.2875C13.8667 15.0958 12.95 15 12 15C11.05 15 10.125 15.0958 9.225 15.2875C8.325 15.4791 7.35 15.8333 6.3 16.35C6.06667 16.4666 5.875 16.6458 5.725 16.8875C5.575 17.1291 5.5 17.3833 5.5 17.65V18.5ZM12 10.475C12.65 10.475 13.1875 10.2625 13.6125 9.83748C14.0375 9.41248 14.25 8.87498 14.25 8.22498C14.25 7.57498 14.0375 7.03748 13.6125 6.61248C13.1875 6.18748 12.65 5.97498 12 5.97498C11.35 5.97498 10.8125 6.18748 10.3875 6.61248C9.9625 7.03748 9.75 7.57498 9.75 8.22498C9.75 8.87498 9.9625 9.41248 10.3875 9.83748C10.8125 10.2625 11.35 10.475 12 10.475Z"
        fill={fill}
      />
    </svg>
  ),
  filled: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 11.975C10.9 11.975 10 11.625 9.3 10.925C8.6 10.225 8.25 9.32498 8.25 8.22498C8.25 7.12498 8.6 6.22498 9.3 5.52498C10 4.82498 10.9 4.47498 12 4.47498C13.1 4.47498 14 4.82498 14.7 5.52498C15.4 6.22498 15.75 7.12498 15.75 8.22498C15.75 9.32498 15.4 10.225 14.7 10.925C14 11.625 13.1 11.975 12 11.975ZM5.5 20C5.08333 20 4.72917 19.8541 4.4375 19.5625C4.14583 19.2708 4 18.9166 4 18.5V17.65C4 17.0166 4.15833 16.475 4.475 16.025C4.79167 15.575 5.2 15.2333 5.7 15C6.81667 14.5 7.8875 14.125 8.9125 13.875C9.9375 13.625 10.9667 13.5 12 13.5C13.0333 13.5 14.0583 13.6291 15.075 13.8875C16.0917 14.1458 17.1583 14.5166 18.275 15C18.7917 15.2333 19.2083 15.575 19.525 16.025C19.8417 16.475 20 17.0166 20 17.65V18.5C20 18.9166 19.8542 19.2708 19.5625 19.5625C19.2708 19.8541 18.9167 20 18.5 20H5.5Z"
        fill={fill}
      />
    </svg>
  ),
};

interface IProfileIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TCommonIconVariants;
}

export default function ProfileIcon({
  variant = 'default',
  fill = '#101828',
  width = 16,
  height = 16,
  ...rest
}: IProfileIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
