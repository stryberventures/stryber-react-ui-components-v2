import React from 'react';
import { TSingleVariants } from '../types';

const iconVariants = {
  default: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.0001 13.05L6.7501 18.3C6.6001 18.45 6.4251 18.525 6.2251 18.525C6.0251 18.525 5.8501 18.45 5.7001 18.3C5.5501 18.15 5.4751 17.975 5.4751 17.775C5.4751 17.575 5.5501 17.4 5.7001 17.25L10.9501 12L5.7001 6.74998C5.5501 6.59998 5.4751 6.42498 5.4751 6.22498C5.4751 6.02498 5.5501 5.84998 5.7001 5.69998C5.8501 5.54998 6.0251 5.47498 6.2251 5.47498C6.4251 5.47498 6.6001 5.54998 6.7501 5.69998L12.0001 10.95L17.2501 5.69998C17.4001 5.54998 17.5751 5.47498 17.7751 5.47498C17.9751 5.47498 18.1501 5.54998 18.3001 5.69998C18.4501 5.84998 18.5251 6.02498 18.5251 6.22498C18.5251 6.42498 18.4501 6.59998 18.3001 6.74998L13.0501 12L18.3001 17.25C18.4501 17.4 18.5251 17.575 18.5251 17.775C18.5251 17.975 18.4501 18.15 18.3001 18.3C18.1501 18.45 17.9751 18.525 17.7751 18.525C17.5751 18.525 17.4001 18.45 17.2501 18.3L12.0001 13.05Z"
        fill={fill}
      />
    </svg>
  ),
};

interface ICloseIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TSingleVariants;
}

export default function CloseIcon({
  variant = 'default',
  fill = '#101828',
  width = 24,
  height = 24,
  ...rest
}: ICloseIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
