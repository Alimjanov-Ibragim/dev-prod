import React from 'react';

type Props = {
  width: string;
  height: string;
  className?: string;
};

export const LineWithArrowOnTheRight = ({
  width = '236',
  height = '8',
  className,
}: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width || '233'}
      height={height || '12'}
      viewBox='0 0 233 12'
      fill='none'
    >
      <path
        d='M232.53 6.53031C232.823 6.23742 232.823 5.76254 232.53 5.46965L227.757 0.696679C227.464 0.403786 226.99 0.403786 226.697 0.696679C226.404 0.989573 226.404 1.46445 226.697 1.75734L230.939 5.99998L226.697 10.2426C226.404 10.5355 226.404 11.0104 226.697 11.3033C226.99 11.5962 227.464 11.5962 227.757 11.3033L232.53 6.53031ZM6.55671e-08 6.75L232 6.74998L232 5.24998L-6.55671e-08 5.25L6.55671e-08 6.75Z'
        fill='#CBD5E1'
      />
    </svg>
  );
};
