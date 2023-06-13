import React from 'react';

const iconVariants = {
  minus: ({
    fill,
    width = 14,
    height = 2,
    ...rest
  }: React.SVGProps<SVGSVGElement>) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0.75 1.75C0.533333 1.75 0.354167 1.67917 0.2125 1.5375C0.0708334 1.39583 0 1.21667 0 1C0 0.783333 0.0708334 0.604166 0.2125 0.4625C0.354167 0.320833 0.533333 0.25 0.75 0.25H13.25C13.4667 0.25 13.6458 0.320833 13.7875 0.4625C13.9292 0.604166 14 0.783333 14 1C14 1.21667 13.9292 1.39583 13.7875 1.5375C13.6458 1.67917 13.4667 1.75 13.25 1.75H0.75Z"
        fill={fill}
      />
    </svg>
  ),
  plus: ({
    fill,
    width = 14,
    height = 14,
    ...rest
  }: React.SVGProps<SVGSVGElement>) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
        fill={fill}
      />
    </svg>
  ),
};

export type TCountIconVariants = 'minus' | 'plus';

interface ICountIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TCountIconVariants;
}

export default function CountIcon({
  variant = 'minus',
  fill = '#101828',
  ...rest
}: ICountIcon) {
  return iconVariants[variant]({ fill, ...rest });
}
