import React from 'react';

export default (props: {color?: string, className?: string}) => {
  return (
    <svg className={props.className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1.25C11.7483 1.25 14.75 4.29178 14.75 8C14.75 11.7483 11.7082 14.75 8 14.75C4.25172 14.75 1.25 11.7082 1.25 8C1.25 4.25172 4.29178 1.25 8 1.25ZM8 0.25C3.71978 0.25 0.25 3.71978 0.25 8C0.25 12.2802 3.71978 15.75 8 15.75C12.2802 15.75 15.75 12.2802 15.75 8C15.75 3.71978 12.2802 0.25 8 0.25ZM7 4.12531V11.8747C5.31703 11.4434 4 9.90591 4 8C4 6.09406 5.31703 4.55656 7 4.12531ZM8 3C5.23856 3 3 5.23856 3 8C3 10.7614 5.23856 13 8 13V3Z" fill={props.color || '#000'}/>
    </svg>
  );
}
