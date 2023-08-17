import React from 'react';

type Props = {
  width: string;
  height: string;
  className?: string;
};

export const LogoWithoutText = ({
  width = '24',
  height = '25',
  className,
}: Props) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={width || '24'}
      height={height || '25'}
      viewBox='0 0 26 26'
      fill='none'
    >
      <path
        d='M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12'
        stroke='white'
        stroke-width='2'
      />
      <circle cx='13' cy='13.0215' r='5' fill='white' />
    </svg>
  );
};
