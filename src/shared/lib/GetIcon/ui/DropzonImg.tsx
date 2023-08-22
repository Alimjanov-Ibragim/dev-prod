import React from 'react';

type Props = {
  width: string;
  height: string;
  className?: string;
};

export const DropzonImg = ({
  width = '116',
  height = '31',
  className,
}: Props) => {
  return (
    <svg
      className={className}
      width={width || '70'}
      height={height || '51'}
      viewBox='0 0 70 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.64156 8.58094L17.5129 6.76904V40.0511L12.7853 41.0464C9.49655 41.7388 6.28054 39.5951 5.65431 36.2931L1.73304 15.6173C1.10583 12.3102 3.32132 9.13431 6.64156 8.58094Z'
        fill='white'
        stroke='#3B82F6'
        strokeWidth='2'
      />
      <path
        d='M63.3584 8.58094L52.4871 6.76904V40.0511L57.2147 41.0464C60.5034 41.7388 63.7195 39.5951 64.3457 36.2931L68.267 15.6173C68.8942 12.3102 66.6787 9.13431 63.3584 8.58094Z'
        fill='white'
        stroke='#3B82F6'
        strokeWidth='2'
      />
      <g filter='url(#filter0_dd_951_5116)'>
        <rect x='16.3848' width='37.2308' height='44' rx='6' fill='white' />
        <rect
          x='17.3848'
          y='1'
          width='35.2308'
          height='42'
          rx='5'
          stroke='#3B82F6'
          strokeWidth='2'
        />
      </g>
      <path
        d='M47.6155 42.9999H22.3848C19.6233 42.9999 17.3848 40.7613 17.3848 37.9999V34.7049L29.5652 21.797L38.8901 32.5278C39.6908 33.4492 41.1229 33.4446 41.9177 32.5181L47.0399 26.5472L52.6155 32.5467V37.9999C52.6155 40.7614 50.377 42.9999 47.6155 42.9999Z'
        fill='#EFF6FF'
        stroke='#3B82F6'
        strokeWidth='2'
      />
      <path
        d='M43.5899 14.1028C43.5899 16.3544 41.7646 18.1797 39.513 18.1797C37.2613 18.1797 35.436 16.3544 35.436 14.1028C35.436 11.8512 37.2613 10.0259 39.513 10.0259C41.7646 10.0259 43.5899 11.8512 43.5899 14.1028Z'
        fill='#EFF6FF'
        stroke='#3B82F6'
        strokeWidth='2'
      />
      <defs>
        <filter
          id='filter0_dd_951_5116'
          x='13.3848'
          y='0'
          width='43.231'
          height='51'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='1.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_951_5116'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='2' />
          <feGaussianBlur stdDeviation='1' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_951_5116'
            result='effect2_dropShadow_951_5116'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_951_5116'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};
