import React from 'react';

type Props = {
  width: string;
  height: string;
  className?: string;
};

export const LineWithCircleOnTheLeft = ({
  width = '236',
  height = '8',
  className,
}: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width || '236'}
      height={height || '8'}
      viewBox='0 0 236 8'
      fill='none'
    >
      <path
        d='M0 4C1.93129e-07 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 -1.93129e-07 4 0C1.79086 1.93129e-07 -1.93129e-07 1.79086 0 4ZM4 4.75L236 4.74998L236 3.24998L4 3.25L4 4.75Z'
        fill='#CBD5E1'
      />
    </svg>
  );
};
