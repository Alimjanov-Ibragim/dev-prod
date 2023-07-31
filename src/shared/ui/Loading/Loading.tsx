import React from 'react';

type LoadingSize = 'xs' | 'small' | 'default' | 'large';

type Props = {
  lineSpinner?: boolean;
  lineSpinnerNoLabel?: boolean;
  circularProgress?: boolean;
  circularProgressNoLabel?: boolean;
  loadingText?: string;
  size?: LoadingSize;
  strokeColor?: string;
  fillColor?: string;
};

function pathTagInSvg(size?: string) {
  switch (size) {
    case 'xs':
      return (
        <path d='M10.5 1.49418C10.5 0.668967 11.1726 -0.0114274 11.9887 0.111421C13.3078 0.310009 14.579 0.771343 15.725 1.4736C17.2974 2.4372 18.5728 3.81688 19.4101 5.46009C20.2473 7.10331 20.6139 8.94605 20.4692 10.7846C20.3637 12.1245 19.9897 13.4241 19.375 14.608C18.9948 15.3404 18.049 15.4846 17.3814 14.9996C16.7137 14.5145 16.583 13.5835 16.9159 12.8284C17.2326 12.1099 17.4279 11.34 17.49 10.5501C17.5915 9.26101 17.3345 7.96895 16.7474 6.81678C16.1604 5.66462 15.2661 4.69724 14.1636 4.0216C13.488 3.60762 12.7504 3.31304 11.9829 3.14697C11.1764 2.97244 10.5 2.31939 10.5 1.49418Z' />
      );
      break;
    case 'small':
      return (
        <path d='M19.5 2.49487C19.5 1.11699 20.6217 -0.0168524 21.9878 0.163562C24.6157 0.510649 27.1516 1.40519 29.4275 2.79984C32.4151 4.63068 34.8383 7.25207 36.4291 10.3742C38.0199 13.4963 38.7164 16.9975 38.4414 20.4907C38.232 23.1517 37.4652 25.729 36.2013 28.0591C35.5443 29.2703 33.9677 29.5114 32.8529 28.7015C31.7382 27.8916 31.5144 26.3376 32.114 25.097C32.8685 23.5361 33.3299 21.842 33.4671 20.0992C33.6698 17.5234 33.1563 14.9417 31.9832 12.6395C30.8102 10.3373 29.0234 8.40432 26.8203 7.05429C25.3298 6.14089 23.688 5.51841 21.9817 5.21129C20.6257 4.96721 19.5 3.87275 19.5 2.49487Z' />
      );
      break;
    case 'large':
      return (
        <path d='M31.5 3.49231C31.5 1.56356 33.0685 -0.0203288 34.985 0.1965C39.4772 0.704734 43.8188 2.1913 47.6975 4.56815C52.5721 7.55533 56.5257 11.8323 59.1212 16.9263C61.7167 22.0203 62.853 27.7328 62.4044 33.4322C62.0475 37.9672 60.6983 42.3534 58.469 46.2864C57.5179 47.9644 55.3146 48.3023 53.7542 47.1686C52.1938 46.0349 51.8737 43.8597 52.7693 42.1515C54.272 39.2855 55.1856 36.1342 55.4414 32.8842C55.7888 28.4689 54.9086 24.0435 52.8979 20.0972C50.8872 16.151 47.8243 12.8376 44.048 10.5235C41.2684 8.82017 38.1819 7.70703 34.9801 7.23809C33.0717 6.95859 31.5 5.42105 31.5 3.49231Z' />
      );
      break;
    default:
      return (
        <path d='M23 2.98983C23 1.33859 24.3442 -0.0200001 25.9815 0.194053C29.1734 0.611351 32.2538 1.69571 35.0175 3.38928C38.6341 5.60557 41.5675 8.77882 43.4931 12.5582C45.4188 16.3376 46.2619 20.5759 45.9291 24.8046C45.6748 28.0358 44.7415 31.1653 43.2029 33.9929C42.4137 35.4433 40.5244 35.7323 39.1886 34.7617C37.8527 33.7911 37.584 31.9288 38.3062 30.4439C39.2334 28.5374 39.8002 26.4663 39.9679 24.3354C40.2141 21.2061 39.5903 18.0697 38.1652 15.2729C36.7402 12.4761 34.5695 10.1279 31.8931 8.48778C30.0706 7.37093 28.0619 6.6121 25.9745 6.2416C24.3487 5.95301 23 4.64108 23 2.98983Z' />
      );
  }
}

export const Loading = ({
  lineSpinner,
  lineSpinnerNoLabel,
  circularProgress,
  circularProgressNoLabel,
  loadingText,
  size = 'default',
  fillColor = 'fill-blue-500',
  strokeColor = 'stroke-gray-100',
}: Props) => {
  return (
    <>
      {lineSpinner ? (
        <div className='text-center inline-block'>
          <svg
            className={`animate-spin ml-auto mr-auto ${strokeColor} ${fillColor}`}
            xmlns='http://www.w3.org/2000/svg'
            width={
              size === 'xs'
                ? '21'
                : size === 'small'
                ? '39'
                : size === 'large'
                ? '63'
                : '46'
            }
            height={
              size === 'xs'
                ? '20'
                : size === 'small'
                ? '38'
                : size === 'large'
                ? '62'
                : '46'
            }
            viewBox={`0 0 ${
              size === 'xs'
                ? '21 20'
                : size === 'small'
                ? '39 38'
                : size === 'large'
                ? '63 62'
                : '46 46'
            }`}
            fill='none'
          >
            <circle
              cx={
                size === 'xs'
                  ? '10.5'
                  : size === 'small'
                  ? '19.5'
                  : size === 'large'
                  ? '31.5'
                  : '23'
              }
              cy={
                size === 'xs'
                  ? '10'
                  : size === 'small'
                  ? '19'
                  : size === 'large'
                  ? '31'
                  : '23'
              }
              r={
                size === 'xs'
                  ? '8.5'
                  : size === 'small'
                  ? '16.5'
                  : size === 'large'
                  ? '27.5'
                  : '20'
              }
              strokeWidth={
                size === 'xs'
                  ? '3'
                  : size === 'small'
                  ? '5'
                  : size === 'large'
                  ? '7'
                  : '6'
              }
            />
            {pathTagInSvg(size)}
          </svg>
          <div
            className={`${
              size === 'xs'
                ? 'text-xs'
                : size === 'small'
                ? 'text-sm'
                : size === 'large'
                ? 'text-lg'
                : 'text-base'
            } mt-2`}
          >
            {loadingText || 'Loading...'}
          </div>
        </div>
      ) : circularProgress ? (
        <div className='text-center inline-block'>
          <svg
            className={`animate-spin ml-auto mr-auto ${fillColor}`}
            xmlns='http://www.w3.org/2000/svg'
            width={
              size === 'xs'
                ? '21'
                : size === 'small'
                ? '39'
                : size === 'large'
                ? '63'
                : '46'
            }
            height={
              size === 'xs'
                ? '20'
                : size === 'small'
                ? '38'
                : size === 'large'
                ? '62'
                : '46'
            }
            viewBox={`0 0 ${
              size === 'xs'
                ? '21 20'
                : size === 'small'
                ? '39 38'
                : size === 'large'
                ? '63 62'
                : '46 46'
            }`}
            fill='none'
          >
            {pathTagInSvg(size)}
          </svg>
          <div
            className={`${
              size === 'xs'
                ? 'text-xs'
                : size === 'small'
                ? 'text-sm'
                : size === 'large'
                ? 'text-lg'
                : 'text-base'
            } mt-2`}
          >
            {loadingText || 'Loading...'}
          </div>
        </div>
      ) : circularProgressNoLabel ? (
        <div className='text-center inline-block'>
          <svg
            className={`animate-spin ml-auto mr-auto ${fillColor}`}
            xmlns='http://www.w3.org/2000/svg'
            width={
              size === 'xs'
                ? '21'
                : size === 'small'
                ? '39'
                : size === 'large'
                ? '63'
                : '46'
            }
            height={
              size === 'xs'
                ? '20'
                : size === 'small'
                ? '38'
                : size === 'large'
                ? '62'
                : '46'
            }
            viewBox={`0 0 ${
              size === 'xs'
                ? '21 20'
                : size === 'small'
                ? '39 38'
                : size === 'large'
                ? '63 62'
                : '46 46'
            }`}
            fill='none'
          >
            {pathTagInSvg(size)}
          </svg>
        </div>
      ) : (
        // lineSpinnerNoLabel
        <div className='text-center inline-block'>
          <svg
            className={`animate-spin ml-auto mr-auto ${strokeColor} ${fillColor}`}
            xmlns='http://www.w3.org/2000/svg'
            width={
              size === 'xs'
                ? '21'
                : size === 'small'
                ? '39'
                : size === 'large'
                ? '63'
                : '46'
            }
            height={
              size === 'xs'
                ? '20'
                : size === 'small'
                ? '38'
                : size === 'large'
                ? '62'
                : '46'
            }
            viewBox={`0 0 ${
              size === 'xs'
                ? '21 20'
                : size === 'small'
                ? '39 38'
                : size === 'large'
                ? '63 62'
                : '46 46'
            }`}
            fill='none'
          >
            <circle
              cx={
                size === 'xs'
                  ? '10.5'
                  : size === 'small'
                  ? '19.5'
                  : size === 'large'
                  ? '31.5'
                  : '23'
              }
              cy={
                size === 'xs'
                  ? '10'
                  : size === 'small'
                  ? '19'
                  : size === 'large'
                  ? '31'
                  : '23'
              }
              r={
                size === 'xs'
                  ? '8.5'
                  : size === 'small'
                  ? '16.5'
                  : size === 'large'
                  ? '27.5'
                  : '20'
              }
              strokeWidth={
                size === 'xs'
                  ? '3'
                  : size === 'small'
                  ? '5'
                  : size === 'large'
                  ? '7'
                  : '6'
              }
            />
            {pathTagInSvg(size)}
          </svg>
        </div>
      )}
    </>
  );
};
