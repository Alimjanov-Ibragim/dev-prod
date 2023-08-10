import React from 'react';

type Props = {
  width: string;
  height: string;
  className?: string;
};

export const Word = ({ width = '16', height = '16', className }: Props) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={width || '16'}
      height={height || '14'}
      viewBox='0 0 16 14'
      fill='none'
    >
      <rect
        x='4'
        width='12'
        height='14'
        rx='2'
        fill='url(#paint0_linear_639_13499)'
      />
      <path
        d='M4 10.5H16V12C16 13.1046 15.1046 14 14 14H6C4.89543 14 4 13.1046 4 12V10.5Z'
        fill='url(#paint1_linear_639_13499)'
      />
      <rect
        x='4'
        y='7'
        width='12'
        height='3.5'
        fill='url(#paint2_linear_639_13499)'
      />
      <rect
        x='4'
        y='3.5'
        width='12'
        height='3.5'
        fill='url(#paint3_linear_639_13499)'
      />
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
        fill='url(#paint4_linear_639_13499)'
      />
      <path
        d='M7.5 4.50709H6.52614L5.76144 7.7695L4.92484 4.5H4.10131L3.25817 7.7695L2.5 4.50709H1.5L2.80065 9.5H3.6634L4.5 6.34397L5.3366 9.5H6.19935L7.5 4.50709Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_639_13499'
          x1='4'
          y1='2.33333'
          x2='16'
          y2='2.33333'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2B78B1' />
          <stop offset='1' stopColor='#338ACD' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_639_13499'
          x1='4'
          y1='12.6875'
          x2='16'
          y2='12.6875'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#1B366F' />
          <stop offset='1' stopColor='#2657B0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_639_13499'
          x1='9.25'
          y1='9'
          x2='16'
          y2='9'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#20478B' />
          <stop offset='1' stopColor='#2D6FD1' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_639_13499'
          x1='9.25'
          y1='5.5'
          x2='16'
          y2='5.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#215295' />
          <stop offset='1' stopColor='#2E84D3' />
        </linearGradient>
        <linearGradient
          id='paint4_linear_639_13499'
          x1='1.65568e-08'
          y1='7.5'
          x2='9.5'
          y2='7.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#223E74' />
          <stop offset='1' stopColor='#215091' />
        </linearGradient>
      </defs>
    </svg>
  );
};
