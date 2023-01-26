import React from 'react';
import { TMoreVariants } from '../types';


const iconVariants = {
  vertical: ({ fill, width = 4, height = 16, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.00005 16C1.66672 16 1.38338 15.8833 1.15005 15.65C0.916715 15.4167 0.800049 15.1333 0.800049 14.8C0.800049 14.4667 0.916715 14.1833 1.15005 13.95C1.38338 13.7167 1.66672 13.6 2.00005 13.6C2.33338 13.6 2.61672 13.7167 2.85005 13.95C3.08338 14.1833 3.20005 14.4667 3.20005 14.8C3.20005 15.1333 3.08338 15.4167 2.85005 15.65C2.61672 15.8833 2.33338 16 2.00005 16ZM2.00005 9.2C1.66672 9.2 1.38338 9.08333 1.15005 8.85C0.916715 8.61667 0.800049 8.33333 0.800049 8C0.800049 7.66667 0.916715 7.38333 1.15005 7.15C1.38338 6.91667 1.66672 6.8 2.00005 6.8C2.33338 6.8 2.61672 6.91667 2.85005 7.15C3.08338 7.38333 3.20005 7.66667 3.20005 8C3.20005 8.33333 3.08338 8.61667 2.85005 8.85C2.61672 9.08333 2.33338 9.2 2.00005 9.2ZM2.00005 2.4C1.66672 2.4 1.38338 2.28333 1.15005 2.05C0.916715 1.81667 0.800049 1.53333 0.800049 1.2C0.800049 0.866666 0.916715 0.583333 1.15005 0.35C1.38338 0.116667 1.66672 0 2.00005 0C2.33338 0 2.61672 0.116667 2.85005 0.35C3.08338 0.583333 3.20005 0.866666 3.20005 1.2C3.20005 1.53333 3.08338 1.81667 2.85005 2.05C2.61672 2.28333 2.33338 2.4 2.00005 2.4Z"
        fill={fill}
      />
    </svg>
  ),
  horizontal: ({ fill, width = 16, height = 4, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.2 3.20005C0.866666 3.20005 0.583333 3.08338 0.35 2.85005C0.116667 2.61672 0 2.33338 0 2.00005C0 1.66672 0.116667 1.38338 0.35 1.15005C0.583333 0.916715 0.866666 0.800049 1.2 0.800049C1.53333 0.800049 1.81667 0.916715 2.05 1.15005C2.28333 1.38338 2.4 1.66672 2.4 2.00005C2.4 2.33338 2.28333 2.61672 2.05 2.85005C1.81667 3.08338 1.53333 3.20005 1.2 3.20005ZM8 3.20005C7.66667 3.20005 7.38333 3.08338 7.15 2.85005C6.91667 2.61672 6.8 2.33338 6.8 2.00005C6.8 1.66672 6.91667 1.38338 7.15 1.15005C7.38333 0.916715 7.66667 0.800049 8 0.800049C8.33333 0.800049 8.61667 0.916715 8.85 1.15005C9.08333 1.38338 9.2 1.66672 9.2 2.00005C9.2 2.33338 9.08333 2.61672 8.85 2.85005C8.61667 3.08338 8.33333 3.20005 8 3.20005ZM14.8 3.20005C14.4667 3.20005 14.1833 3.08338 13.95 2.85005C13.7167 2.61672 13.6 2.33338 13.6 2.00005C13.6 1.66672 13.7167 1.38338 13.95 1.15005C14.1833 0.916715 14.4667 0.800049 14.8 0.800049C15.1333 0.800049 15.4167 0.916715 15.65 1.15005C15.8833 1.38338 16 1.66672 16 2.00005C16 2.33338 15.8833 2.61672 15.65 2.85005C15.4167 3.08338 15.1333 3.20005 14.8 3.20005Z"
        fill={fill}
      />
    </svg>
  ),
};

interface IMoreIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TMoreVariants,
}

export default function MoreIcon ({
  variant = 'vertical',
  fill = '#101828',
  ...rest
}: IMoreIcon) {
  return iconVariants[variant]({ fill, ...rest });
}