import React from 'react';
import { TCommonIconVariants } from '../types';


const iconVariants = {
  default: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.725 15.75H11.275C11.4917 15.75 11.6708 15.6792 11.8125 15.5375C11.9542 15.3958 12.025 15.2167 12.025 15C12.025 14.7833 11.9542 14.6042 11.8125 14.4625C11.6708 14.3208 11.4917 14.25 11.275 14.25H4.725C4.50833 14.25 4.32917 14.3208 4.1875 14.4625C4.04583 14.6042 3.975 14.7833 3.975 15C3.975 15.2167 4.04583 15.3958 4.1875 15.5375C4.32917 15.6792 4.50833 15.75 4.725 15.75ZM4.725 11.5H11.275C11.4917 11.5 11.6708 11.4292 11.8125 11.2875C11.9542 11.1458 12.025 10.9667 12.025 10.75C12.025 10.5333 11.9542 10.3542 11.8125 10.2125C11.6708 10.0708 11.4917 10 11.275 10H4.725C4.50833 10 4.32917 10.0708 4.1875 10.2125C4.04583 10.3542 3.975 10.5333 3.975 10.75C3.975 10.9667 4.04583 11.1458 4.1875 11.2875C4.32917 11.4292 4.50833 11.5 4.725 11.5ZM1.5 20C1.1 20 0.75 19.85 0.45 19.55C0.15 19.25 0 18.9 0 18.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H9.9C10.1 0 10.2958 0.0416667 10.4875 0.125C10.6792 0.208333 10.8417 0.316667 10.975 0.45L15.55 5.025C15.6833 5.15833 15.7917 5.32083 15.875 5.5125C15.9583 5.70417 16 5.9 16 6.1V18.5C16 18.9 15.85 19.25 15.55 19.55C15.25 19.85 14.9 20 14.5 20H1.5ZM9.775 5.4V1.5H1.5V18.5H14.5V6.15H10.525C10.3083 6.15 10.1292 6.07917 9.9875 5.9375C9.84583 5.79583 9.775 5.61667 9.775 5.4ZM1.5 1.5V6.15V1.5V18.5V1.5Z"
        fill={fill}
      />
    </svg>
  ),
  filled: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.725 15.75H11.275C11.4917 15.75 11.6708 15.6792 11.8125 15.5375C11.9542 15.3958 12.025 15.2167 12.025 15C12.025 14.7833 11.9542 14.6042 11.8125 14.4625C11.6708 14.3208 11.4917 14.25 11.275 14.25H4.725C4.50833 14.25 4.32917 14.3208 4.1875 14.4625C4.04583 14.6042 3.975 14.7833 3.975 15C3.975 15.2167 4.04583 15.3958 4.1875 15.5375C4.32917 15.6792 4.50833 15.75 4.725 15.75ZM4.725 11.5H11.275C11.4917 11.5 11.6708 11.4292 11.8125 11.2875C11.9542 11.1458 12.025 10.9667 12.025 10.75C12.025 10.5333 11.9542 10.3542 11.8125 10.2125C11.6708 10.0708 11.4917 10 11.275 10H4.725C4.50833 10 4.32917 10.0708 4.1875 10.2125C4.04583 10.3542 3.975 10.5333 3.975 10.75C3.975 10.9667 4.04583 11.1458 4.1875 11.2875C4.32917 11.4292 4.50833 11.5 4.725 11.5ZM1.5 20C1.1 20 0.75 19.85 0.45 19.55C0.15 19.25 0 18.9 0 18.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H9.9C10.1 0 10.2958 0.0416667 10.4875 0.125C10.6792 0.208333 10.8417 0.316667 10.975 0.45L15.55 5.025C15.6833 5.15833 15.7917 5.32083 15.875 5.5125C15.9583 5.70417 16 5.9 16 6.1V18.5C16 18.9 15.85 19.25 15.55 19.55C15.25 19.85 14.9 20 14.5 20H1.5ZM9.775 5.4C9.775 5.61667 9.84583 5.79583 9.9875 5.9375C10.1292 6.07917 10.3083 6.15 10.525 6.15H14.5L9.775 1.5V5.4Z"
        fill={fill}
      />
    </svg>
  ),
};

interface IDocumentIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TCommonIconVariants,
}

export default function DocumentIcon ({
  variant = 'default',
  fill = '#101828',
  width = 16,
  height = 20,
  ...rest
}: IDocumentIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
