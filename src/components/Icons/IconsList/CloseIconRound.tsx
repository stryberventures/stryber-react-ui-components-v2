import React from 'react';
import toRem from '../../../utils/toRem';

export interface ICloseIconRound extends React.SVGProps<SVGSVGElement> {
  fill?: string,
  size?: string | number,
}

const CloseIconRound = (props: ICloseIconRound) => {
  const { size = toRem(8), fill, ...rest } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5.725 14.275C5.875 14.425 6.05 14.5 6.25 14.5C6.45 14.5 6.625 14.425 6.775 14.275L10 11.05L13.25 14.3C13.3833 14.4333 13.5542 14.4958 13.7625 14.4875C13.9708 14.4792 14.1417 14.4083 14.275 14.275C14.425 14.125 14.5 13.95 14.5 13.75C14.5 13.55 14.425 13.375 14.275 13.225L11.05 10L14.3 6.75C14.4333 6.61667 14.4958 6.44583 14.4875 6.2375C14.4792 6.02917 14.4083 5.85833 14.275 5.725C14.125 5.575 13.95 5.5 13.75 5.5C13.55 5.5 13.375 5.575 13.225 5.725L10 8.95L6.75 5.7C6.61667 5.56667 6.44583 5.50417 6.2375 5.5125C6.02917 5.52083 5.85833 5.59167 5.725 5.725C5.575 5.875 5.5 6.05 5.5 6.25C5.5 6.45 5.575 6.625 5.725 6.775L8.95 10L5.7 13.25C5.56667 13.3833 5.50417 13.5542 5.5125 13.7625C5.52083 13.9708 5.59167 14.1417 5.725 14.275ZM10 20C8.58333 20 7.26667 19.7458 6.05 19.2375C4.83333 18.7292 3.775 18.025 2.875 17.125C1.975 16.225 1.27083 15.1667 0.7625 13.95C0.254167 12.7333 0 11.4167 0 10C0 8.6 0.254167 7.29167 0.7625 6.075C1.27083 4.85833 1.975 3.8 2.875 2.9C3.775 2 4.83333 1.29167 6.05 0.775C7.26667 0.258333 8.58333 0 10 0C11.4 0 12.7083 0.258333 13.925 0.775C15.1417 1.29167 16.2 2 17.1 2.9C18 3.8 18.7083 4.85833 19.225 6.075C19.7417 7.29167 20 8.6 20 10C20 11.4167 19.7417 12.7333 19.225 13.95C18.7083 15.1667 18 16.225 17.1 17.125C16.2 18.025 15.1417 18.7292 13.925 19.2375C12.7083 19.7458 11.4 20 10 20ZM10 18.5C12.3333 18.5 14.3333 17.6667 16 16C17.6667 14.3333 18.5 12.3333 18.5 10C18.5 7.66667 17.6667 5.66667 16 4C14.3333 2.33333 12.3333 1.5 10 1.5C7.66667 1.5 5.66667 2.33333 4 4C2.33333 5.66667 1.5 7.66667 1.5 10C1.5 12.3333 2.33333 14.3333 4 16C5.66667 17.6667 7.66667 18.5 10 18.5Z"
        fill={fill}
      />
    </svg>

  );
}

CloseIconRound.defaultProps = {
  fill: '#667085',
  size: toRem(8),
}
export default CloseIconRound;
