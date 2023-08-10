import React from 'react';

type Props = {
  width: string;
  height: string;
  className?: string;
};

export const Excel = ({ width = '16', height = '16', className }: Props) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={width || '16'}
      height={height || '14'}
      viewBox='0 0 16 14'
      fill='none'
    >
      <rect x='4' width='12' height='14' rx='2' fill='currentColor' />
      <path
        d='M4 10.5H16V12C16 13.1046 15.1046 14 14 14H6C4.89543 14 4 13.1046 4 12V10.5Z'
        fill='url(#paint0_linear_639_13456)'
      />
      <rect x='10' y='7' width='6' height='3.5' fill='#229C5B' />
      <rect x='10' y='3.5' width='6' height='3.5' fill='#27AE68' />
      <path d='M4 2C4 0.895431 4.89543 0 6 0H10V3.5H4V2Z' fill='#1D854F' />
      <rect x='4' y='3.5' width='6' height='3.5' fill='#197B43' />
      <rect x='4' y='7' width='6' height='3.5' fill='#1B5B38' />
      <path
        d='M4 6.5C4 4.84315 5.34315 3.5 7 3.5C8.65685 3.5 10 4.84315 10 6.5V9.5C10 11.1569 8.65685 12.5 7 12.5H4V6.5Z'
        fill='black'
        fillOpacity='0.3'
      />
      <rect
        y='2.5'
        width='9'
        height='9'
        rx='2'
        fill='url(#paint1_linear_639_13456)'
      />
      <path
        d='M6.5 9.5L5.09107 6.95L6.43814 4.5H5.33849L4.50687 6.06429L3.689 4.5H2.55498L3.90893 6.95L2.5 9.5H3.59966L4.48625 7.84286L5.36598 9.5H6.5Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_639_13456'
          x1='4'
          y1='12.25'
          x2='16'
          y2='12.25'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#163C27' />
          <stop offset='1' stopColor='#2A6043' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_639_13456'
          x1='0'
          y1='7'
          x2='9'
          y2='7'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#185A30' />
          <stop offset='1' stopColor='#176F3D' />
        </linearGradient>
      </defs>
    </svg>
  );
};
