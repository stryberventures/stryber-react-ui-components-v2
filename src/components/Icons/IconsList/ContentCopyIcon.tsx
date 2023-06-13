import React from 'react';
import { TCommonIconVariants } from '../types';

const iconVariants = {
  default: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.5 17.975C4.08333 17.975 3.72917 17.8291 3.4375 17.5375C3.14583 17.2458 3 16.8916 3 16.475V2.47498C3 2.05831 3.14583 1.70414 3.4375 1.41248C3.72917 1.12081 4.08333 0.974976 4.5 0.974976H15.5C15.9167 0.974976 16.2708 1.12081 16.5625 1.41248C16.8542 1.70414 17 2.05831 17 2.47498V16.475C17 16.8916 16.8542 17.2458 16.5625 17.5375C16.2708 17.8291 15.9167 17.975 15.5 17.975H4.5ZM4.5 16.475H15.5V2.47498H4.5V16.475ZM1.5 20.975C1.08333 20.975 0.729167 20.8291 0.4375 20.5375C0.145833 20.2458 0 19.8916 0 19.475V5.14998C0 4.93331 0.0708334 4.75414 0.2125 4.61248C0.354167 4.47081 0.533333 4.39998 0.75 4.39998C0.966667 4.39998 1.14583 4.47081 1.2875 4.61248C1.42917 4.75414 1.5 4.93331 1.5 5.14998V19.475H12.6C12.8167 19.475 12.9958 19.5458 13.1375 19.6875C13.2792 19.8291 13.35 20.0083 13.35 20.225C13.35 20.4416 13.2792 20.6208 13.1375 20.7625C12.9958 20.9041 12.8167 20.975 12.6 20.975H1.5ZM4.5 2.47498V16.475V2.47498Z"
        fill={fill}
      />
    </svg>
  ),
  filled: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.5 17.975C4.08333 17.975 3.72917 17.8291 3.4375 17.5375C3.14583 17.2458 3 16.8916 3 16.475V2.47498C3 2.05831 3.14583 1.70414 3.4375 1.41248C3.72917 1.12081 4.08333 0.974976 4.5 0.974976H15.5C15.9167 0.974976 16.2708 1.12081 16.5625 1.41248C16.8542 1.70414 17 2.05831 17 2.47498V16.475C17 16.8916 16.8542 17.2458 16.5625 17.5375C16.2708 17.8291 15.9167 17.975 15.5 17.975H4.5ZM1.5 20.975C1.08333 20.975 0.729167 20.8291 0.4375 20.5375C0.145833 20.2458 0 19.8916 0 19.475V5.14998C0 4.93331 0.0708334 4.75414 0.2125 4.61248C0.354167 4.47081 0.533333 4.39998 0.75 4.39998C0.966667 4.39998 1.14583 4.47081 1.2875 4.61248C1.42917 4.75414 1.5 4.93331 1.5 5.14998V19.475H12.6C12.8167 19.475 12.9958 19.5458 13.1375 19.6875C13.2792 19.8291 13.35 20.0083 13.35 20.225C13.35 20.4416 13.2792 20.6208 13.1375 20.7625C12.9958 20.9041 12.8167 20.975 12.6 20.975H1.5Z"
        fill={fill}
      />
    </svg>
  ),
};

interface IContentCopyIcon extends React.SVGProps<SVGSVGElement> {
  variant?: TCommonIconVariants;
}

export default function ContentCopyIcon({
  variant = 'default',
  fill = '#101828',
  width = 17,
  height = 21,
  ...rest
}: IContentCopyIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
