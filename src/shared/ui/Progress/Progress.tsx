import cn from 'classnames';

type TProgressColors =
  | 'dark'
  | 'gray'
  | 'green'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'light';

type TProgressType =
  | 'base'
  | 'trailing-label'
  | 'trailing-label-left'
  | 'title-label'
  | 'top-floating-label'
  | 'bottom-floating-label';

type Props = {
  color?: TProgressColors;
  type?: TProgressType;
  className?: string;
  classNameBar?: string;
  width?: number;
  titleLabel?: string;
  successColor?: string;
};

export const Progress = ({
  type = 'base',
  color = 'blue',
  className,
  classNameBar,
  width = 100,
  titleLabel,
  successColor,
}: Props) => {
  return (
    <div
      className={cn('w-full flex items-center', {
        'flex-col': type === 'title-label',
        'flex-col !items-start':
          type === 'top-floating-label' || type === 'bottom-floating-label',
      })}
    >
      {/* type === 'title-label'  */}
      {type === 'title-label' && (
        <div className='flex justify-between w-full mb-2.5'>
          <div className='text-gray-800 text-base font-medium'>
            {titleLabel}
          </div>
          <span className='text-gray-800 text-sm	font-medium ml-2.5'>{`${width}%`}</span>
        </div>
      )}
      {/* type === 'trailing-label-left' */}
      {type === 'trailing-label-left' && (
        <span className='text-gray-800 text-sm	font-medium mr-2.5'>{`${width}%`}</span>
      )}
      {/* type === 'top-floating-label'  */}
      {type === 'top-floating-label' && (
        <div
          className={cn(
            'text-blue-500 text-sm font-medium border border-solid border-blue-300 bg-blue-100 rounded-md mb-2.5 py-0.5 px-1',
            {
              'text-gray-800 border-gray-300 bg-gray-100': color === 'dark',
              'text-gray-500 border-gray-300 bg-gray-100':
                color === 'gray' || color === 'light',
              'text-teal-500 border-teal-300 bg-teal-100': color === 'green',
              'text-blue-500 border-blue-300 bg-blue-100': color === 'blue',
              'text-red-500 border-red-300 bg-red-100': color === 'red',
              'text-yellow-500 border-yellow-300 bg-yellow-100':
                color === 'yellow',
              [classNameBar as string]: classNameBar,
            }
          )}
          style={{
            marginLeft:
              width >= 99
                ? `calc(${width}% - 48px)`
                : width <= 2
                ? '0'
                : `calc(${width}% - 20px)`,
          }}
        >
          {width}%
        </div>
      )}
      {/* progress bar */}
      <div
        className={cn(
          'progress w-full flex overflow-hidden bg-gray-100 h-1.5',
          {
            [className as string]: className,
          }
        )}
      >
        <div
          className={cn(
            'progress-bar rounded-full flex flex-col justify-center transition-[width] delay-500 ease',
            {
              'bg-gray-800': color === 'dark',
              'bg-gray-500': color === 'gray',
              'bg-teal-500': color === 'green',
              'bg-blue-500': color === 'blue',
              'bg-red-500': color === 'red',
              'bg-yellow-500': color === 'yellow',
              'bg-white': color === 'light',
              [`${successColor}`]: successColor && width === 100,
              [classNameBar as string]: classNameBar,
            }
          )}
          style={{ width: `${width}%` }}
        ></div>
      </div>
      {/* type === 'bottom-floating-label'  */}
      {type === 'bottom-floating-label' && (
        <div
          className={cn(
            'text-blue-500 text-sm font-medium border border-solid border-blue-300 bg-blue-100 rounded-md mt-2.5 py-0.5 px-1',
            {
              'text-gray-800 border-gray-300 bg-gray-100': color === 'dark',
              'text-gray-500 border-gray-300 bg-gray-100':
                color === 'gray' || color === 'light',
              'text-teal-500 border-teal-300 bg-teal-100': color === 'green',
              'text-blue-500 border-blue-300 bg-blue-100': color === 'blue',
              'text-red-500 border-red-300 bg-red-100': color === 'red',
              'text-yellow-500 border-yellow-300 bg-yellow-100':
                color === 'yellow',
              [classNameBar as string]: classNameBar,
            }
          )}
          style={{
            marginLeft:
              width >= 99
                ? `calc(${width}% - 48px)`
                : width <= 2
                ? '0'
                : `calc(${width}% - 20px)`,
          }}
        >
          {width}%
        </div>
      )}
      {/* type === 'trailing-label' */}
      {type === 'trailing-label' && (
        <span className='text-gray-800 text-sm	font-medium ml-2.5'>{`${width}%`}</span>
      )}
    </div>
  );
};
