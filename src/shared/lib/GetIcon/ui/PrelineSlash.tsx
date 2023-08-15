import React from 'react';

type Props = {
  width: string;
  height: string;
  className?: string;
};

export const PrelineSlash = ({
  width = '12',
  height = '12',
  className,
}: Props) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={width || '12'}
      height={height || '12'}
      viewBox='0 0 12 12'
      fill='none'
    >
      <path d='M4.5 10.5L7.5 1.5L4.5 10.5Z' fill='#9CA3AF' />
      <path d='M4.5 10.5L7.5 1.5' stroke='#9CA3AF' strokeLinecap='round' />
    </svg>
  );
};
