import React from 'react';

const RadioIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="4" cy="4" r="4" fill="white"/>
    </svg>
  );
}

RadioIcon.defaultProps = {
  fill: 'none',
}

export default RadioIcon;
