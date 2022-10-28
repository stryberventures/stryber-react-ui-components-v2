import React from 'react';
import toRem from '../../../utils/toRem';

export interface IEyeSlash extends React.SVGProps<SVGSVGElement> {
  fill?: string,
}

const EyeSlash = (props: IEyeSlash) => {
  const { fill, ...rest } = props;
  return (
    <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.1634 14.2125L11.9175 15.2289C11.2841 15.3356 10.6428 15.3891 10.0004 15.3888C5.83857 15.3888 2.18799 13.1668 0.231146 9.8461C-0.0765605 9.32395 -0.0765605 8.67592 0.231146 8.15377C1.12816 6.63155 2.3809 5.34093 3.875 4.38895L4.53906 5.28398C3.15608 6.15002 2.0042 7.33353 1.1884 8.71787C1.0859 8.89193 1.0859 9.1079 1.1884 9.28197C2.99215 12.3429 6.32451 14.2777 10.0004 14.2777C10.3927 14.2777 10.7808 14.2555 11.1634 14.2125ZM4.93026 5.81089C4.62001 6.48502 4.44512 7.23572 4.44512 8.02773C4.44512 11.0077 6.91838 13.4444 10.0007 13.4444C10.1939 13.4444 10.3848 13.4348 10.5729 13.4161L9.76501 12.3272C7.41998 12.2086 5.55623 10.329 5.55623 8.02773C5.55603 7.63711 5.61054 7.24838 5.71817 6.87287L4.93026 5.81089ZM19.7693 9.84619C18.5988 11.8324 16.8227 13.4239 14.6949 14.3834L16.6716 17.0477C16.8105 17.2349 16.7713 17.4993 16.5842 17.6382L16.3582 17.8058C16.171 17.9447 15.9067 17.9055 15.7678 17.7183L3.32847 0.952268C3.18958 0.765081 3.22875 0.500741 3.41594 0.361852L3.64187 0.194213C3.82906 0.0553244 4.0934 0.0944911 4.23226 0.281678L6.39159 3.19209C7.52576 2.81539 8.73948 2.61112 10 2.61112C14.1618 2.61112 17.8124 4.83314 19.7693 8.15383C20.0769 8.676 20.0769 9.32402 19.7693 9.84619ZM14.4448 8.02782C14.4448 5.64994 12.455 3.72227 10.0004 3.72227C9.02613 3.72227 8.12534 4.02623 7.39294 4.5413L8.59811 6.16567C9.30433 5.58984 10.2733 5.51446 11.0468 5.92817H11.0461C10.5408 5.92817 10.1311 6.33786 10.1311 6.84321C10.1311 7.34855 10.5408 7.75824 11.0461 7.75824C11.5515 7.75824 11.9612 7.34855 11.9612 6.84321V6.84251C12.4897 7.83088 12.2004 9.08397 11.2431 9.73071L12.5804 11.5332C13.7088 10.7523 14.4448 9.47359 14.4448 8.02782ZM18.8125 8.71798C17.803 7.00503 16.2659 5.57787 14.3798 4.69412C16.3036 7.09096 15.8278 10.6112 13.2432 12.4263L14.0154 13.4671C16.0141 12.6231 17.7045 11.1622 18.8124 9.28211C18.915 9.10804 18.915 8.89205 18.8125 8.71798Z"
        fill={fill}/>
    </svg>
  )};

EyeSlash.defaultProps = {
  fill: 'none',
  width: toRem(20),
  height: toRem(18),
}

export default EyeSlash;