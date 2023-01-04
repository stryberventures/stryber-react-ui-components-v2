import React from 'react';


const iconVariants = {
  download: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V10.925H1.5V14.5H14.5V10.925H16V14.5C16 14.9 15.85 15.25 15.55 15.55C15.25 15.85 14.9 16 14.5 16H1.5ZM8 12.175L3.175 7.35L4.25 6.275L7.25 9.275V0H8.75V9.275L11.75 6.275L12.825 7.35L8 12.175Z"
        fill={fill}
      />
    </svg>
  ),
  upload: ({ fill, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V10.925H1.5V14.5H14.5V10.925H16V14.5C16 14.9 15.85 15.25 15.55 15.55C15.25 15.85 14.9 16 14.5 16H1.5ZM7.25 12.175V2.9L4.25 5.9L3.175 4.825L8 0L12.825 4.825L11.75 5.9L8.75 2.9V12.175H7.25Z"
        fill={fill}
      />
    </svg>
  )
};

export type TLoadIconVariants = 'download' | 'upload';

interface ILoadIcon extends React.SVGProps<SVGSVGElement> {
  variant: TLoadIconVariants,
}

export default function LoadIcon ({
  variant = 'download',
  width = 16,
  height = 16,
  fill = '#101828',
  ...rest
}: ILoadIcon) {
  return iconVariants[variant]({ fill, width, height, ...rest });
}
