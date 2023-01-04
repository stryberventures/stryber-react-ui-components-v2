import React from 'react';
import { TCommonIconVariants } from '../types';


const iconVariants = {
  default: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5249 16C1.1249 16 0.774902 15.8458 0.474902 15.5375C0.174902 15.2292 0.0249023 14.8833 0.0249023 14.5V1.5C0.0249023 1.11667 0.174902 0.770833 0.474902 0.4625C0.774902 0.154167 1.1249 0 1.5249 0H7.8999C8.0999 0 8.29574 0.0416667 8.4874 0.125C8.67907 0.208333 8.84157 0.316666 8.9749 0.45L10.0249 1.5H18.5249C18.9082 1.5 19.2541 1.65417 19.5624 1.9625C19.8707 2.27083 20.0249 2.61667 20.0249 3V14.5C20.0249 14.8833 19.8707 15.2292 19.5624 15.5375C19.2541 15.8458 18.9082 16 18.5249 16H1.5249ZM1.5249 1.5V14.5H18.5249V3H9.3999L7.8999 1.5H1.5249ZM1.5249 1.5V14.5V1.5Z"
        fill={fill}
      />
    </svg>
  ),
  filled: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5249 16C1.1249 16 0.774902 15.8458 0.474902 15.5375C0.174902 15.2292 0.0249023 14.8833 0.0249023 14.5V1.5C0.0249023 1.11667 0.174902 0.770833 0.474902 0.4625C0.774902 0.154167 1.1249 0 1.5249 0H7.8999C8.0999 0 8.29574 0.0416667 8.4874 0.125C8.67907 0.208333 8.84157 0.316666 8.9749 0.45L10.0249 1.5H18.5249C18.9082 1.5 19.2541 1.65417 19.5624 1.9625C19.8707 2.27083 20.0249 2.61667 20.0249 3V14.5C20.0249 14.8833 19.8707 15.2292 19.5624 15.5375C19.2541 15.8458 18.9082 16 18.5249 16H1.5249Z"
        fill={fill}
      />
    </svg>
  ),
};

interface IFilesIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TCommonIconVariants,
}

export default function FilesIcon ({
  variant = 'default',
  fill = '#101828',
  width = 21,
  height = 16,
  ...rest
}: IFilesIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
