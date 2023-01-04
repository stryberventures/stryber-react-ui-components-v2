import React from 'react';
import { IArrowIconVariant } from '../types';


const iconVariants = {
  down: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11.4749 14.475L8.29993 11.3C8.0666 11.0667 8.01243 10.7959 8.13743 10.4875C8.26243 10.1792 8.4916 10.025 8.82493 10.025H15.1749C15.5083 10.025 15.7374 10.1792 15.8624 10.4875C15.9874 10.7959 15.9333 11.0667 15.6999 11.3L12.5249 14.475C12.4416 14.5584 12.3583 14.6167 12.2749 14.65C12.1916 14.6834 12.0999 14.7 11.9999 14.7C11.8999 14.7 11.8083 14.6834 11.7249 14.65C11.6416 14.6167 11.5583 14.5584 11.4749 14.475Z"
        fill={fill}
      />
    </svg>
  ),
  up: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.75291 14.7C8.41957 14.7 8.19041 14.5458 8.06541 14.2375C7.94041 13.9292 7.99457 13.6583 8.22791 13.425L11.4279 10.2C11.5112 10.1167 11.5946 10.0625 11.6779 10.0375C11.7612 10.0125 11.8529 10 11.9529 10C12.0529 10 12.1446 10.0125 12.2279 10.0375C12.3112 10.0625 12.3946 10.1167 12.4779 10.2L15.6779 13.425C15.9112 13.6583 15.9654 13.9292 15.8404 14.2375C15.7154 14.5458 15.4862 14.7 15.1529 14.7H8.75291Z"
        fill={fill}
      />
    </svg>
  ),
  left: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.725 15.725L9.52505 12.525C9.44171 12.4417 9.38338 12.3584 9.35005 12.275C9.31672 12.1917 9.30005 12.1 9.30005 12C9.30005 11.9 9.31672 11.8084 9.35005 11.725C9.38338 11.6417 9.44171 11.5584 9.52505 11.475L12.725 8.27503C12.9584 8.04169 13.2292 7.98753 13.5375 8.11253C13.8459 8.23753 14 8.46669 14 8.80003V15.2C14 15.5334 13.8459 15.7625 13.5375 15.8875C13.2292 16.0125 12.9584 15.9584 12.725 15.725V15.725Z"
        fill={fill}
      />
    </svg>
  ),
  right: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11.275 15.725C11.0417 15.9584 10.7708 16.0125 10.4625 15.8875C10.1542 15.7625 10 15.5334 10 15.2V8.80003C10 8.46669 10.1542 8.23753 10.4625 8.11253C10.7708 7.98753 11.0417 8.04169 11.275 8.27503L14.475 11.475C14.5583 11.5584 14.6167 11.6417 14.65 11.725C14.6833 11.8084 14.7 11.9 14.7 12C14.7 12.1 14.6833 12.1917 14.65 12.275C14.6167 12.3584 14.5583 12.4417 14.475 12.525L11.275 15.725Z"
        fill={fill}
      />
    </svg>
  ),
};


interface IArrowIcon extends React.SVGProps<SVGSVGElement> {
  variant: IArrowIconVariant,
}

export default function ArrowIcon ({
  variant = 'down',
  fill = '#101828',
  width = 24,
  height = 24,
  ...rest
}: IArrowIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}

