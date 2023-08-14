import cn from 'classnames';

import { GetIcon } from 'shared/lib';
import { TAvatarProps as Props } from './lib';

export const Avatar = ({
  status,
  shape = 'circular',
  size = 'default',
  styleType = 'image',
  color,
  imageSrc,
  wrapClassName,
  classNameStatus,
  classNameStatusIcon,
  classNameTextTitle,
  classNameTextBody,
  nameStatusIcon,
  imageWrapClassName,
  textTitle,
  textBody,
  borderedClassName,
}: Props) => {
  return (
    <div
      className={cn('ex-avatar-wrap relative flex items-center', {
        [wrapClassName as string]: wrapClassName,
      })}
    >
      <div
        className={cn('relative ex-avatar-image-wrap', {
          [imageWrapClassName as string]: imageWrapClassName,
        })}
      >
        <div
          className={cn('ex-avatar overflow-hidden relative', {
            // shape
            'rounded-md': shape == 'rounded',
            'rounded-full': shape == 'circular',
            // size
            'w-[26px] h-[26px]': size === 'xs',
            'w-[38px] h-[38px]': size === 'small',
            'w-[46px] h-[46px]': size === 'default',
            'w-[62px] h-[62px]': size === 'large',
            // styleType === 'solid' || styleType === 'white' || styleType === 'soft'
            'flex justify-center items-center':
              styleType === 'solid' ||
              styleType === 'white' ||
              styleType === 'soft',
            // styleType === 'white'
            'border border-solid border-gray-200 bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]':
              styleType === 'white',
            // styleType === 'solid'
            'bg-gray-800': styleType === 'solid' && color === 'dark',
            'bg-gray-500': styleType === 'solid' && color === 'gray',
            'bg-teal-500': styleType === 'solid' && color === 'green',
            'bg-blue-500': styleType === 'solid' && color === 'blue',
            'bg-red-500': styleType === 'solid' && color === 'red',
            'bg-yellow-500': styleType === 'solid' && color === 'yellow',
            'bg-white': styleType === 'solid' && color === 'light',
            // styleType === 'soft'
            'bg-gray-100': styleType === 'soft' && color === 'dark',
            'bg-gray-50': styleType === 'soft' && color === 'gray',
            'bg-teal-100': styleType === 'soft' && color === 'green',
            'bg-blue-100': styleType === 'soft' && color === 'blue',
            'bg-red-100': styleType === 'soft' && color === 'red',
            'bg-yellow-100': styleType === 'soft' && color === 'yellow',
            [borderedClassName as string]: borderedClassName,
          })}
        >
          {/* styleType === 'image' */}
          {styleType === 'image' && (
            <img src={imageSrc} alt='' className={cn('max-w-full')} />
          )}
          {/* styleType === 'placeholder' */}
          {styleType === 'placeholder' && (
            <GetIcon
              className='bg-gray-200 fill-gray-500'
              name='person-fill'
              width='100%'
              height='100%'
            />
          )}
          {/* styleType === 'white' ||
          styleType === 'solid' ||
          styleType === 'soft' */}
          {(styleType === 'white' ||
            styleType === 'solid' ||
            styleType === 'soft') && (
            <span
              className={cn('text-base font-semibold text-center', {
                'text-xs': size === 'xs',
                'text-sm': size === 'small',
                'text-base': size === 'default',
                'text-xl': size === 'large',
                // styleType === 'white'
                'text-gray-700': styleType === 'white',
                // styleType === 'solid' || text-color
                'text-white':
                  styleType === 'solid' &&
                  (color === 'dark' ||
                    color === 'gray' ||
                    color === 'green' ||
                    color === 'blue' ||
                    color === 'red' ||
                    color === 'yellow'),
                // styleType === 'solid' && color === 'light'
                'text-gray-600': styleType === 'solid' && color === 'light',
                // styleType === 'soft' && text-color
                'text-gray-800': styleType === 'soft' && color === 'dark',
                'text-gray-500': styleType === 'soft' && color === 'gray',
                'text-teal-500': styleType === 'soft' && color === 'green',
                'text-blue-500': styleType === 'soft' && color === 'blue',
                'text-red-500': styleType === 'soft' && color === 'red',
                'text-yellow-500': styleType === 'soft' && color === 'yellow',
              })}
            >
              {textTitle ? textTitle[0] : 'A'}
            </span>
          )}
        </div>
        {/* status */}
        {(nameStatusIcon || status) && (
          <span
            className={cn('absolute border-2 border-white rounded-full', {
              // shape === 'rounded' && size
              'top-[-3px] right-[-3px]':
                shape === 'rounded' && (size === 'xs' || size === 'small'),
              'top-[-4px] right-[-4px]':
                shape === 'rounded' && size === 'default',
              'top-[-5px] right-[-4px]':
                shape === 'rounded' && size === 'large',
              // shape === 'circular' && size
              'top-[0px] right-[0px]': shape === 'circular' && size === 'xs',
              'top-[1px] right-[1px]':
                shape === 'circular' &&
                (size === 'small' || size === 'default'),
              'top-[3px] right-[3px]': shape === 'circular' && size === 'large',
              // size
              'w-2 h-2': size === 'xs',
              'w-2.5 h-2.5': size === 'small',
              'w-3 h-3': size === 'default',
              'w-3.5 h-3.5': size === 'large',
              // bg
              'bg-slate-400': status === 'offline',
              'bg-teal-500': status === 'online',
              'bg-yellow-500': status === 'away',
              'bg-red-500': status === 'do-not-disturb',
              [classNameStatus as string]: classNameStatus,
            })}
          >
            {status === 'icon' && nameStatusIcon && (
              <GetIcon
                className={classNameStatusIcon}
                name={nameStatusIcon}
                width='100%'
                height='100%'
              />
            )}
          </span>
        )}
      </div>
      {/* text content */}
      {(textTitle || textBody) && (
        <div
          className={cn('ex-avatar-text flex flex-col items-start ml-[15px]')}
        >
          <div
            className={cn(
              'ex-avatar-text-title text-base text-gray-800 font-semibold'
            )}
          >
            <span
              className={cn('', {
                [classNameTextTitle as string]: classNameTextTitle,
              })}
            >
              {textTitle}
            </span>
          </div>
          <div
            className={cn(
              'ex-avatar-text-body text-base text-gray-500 font-medium'
            )}
          >
            <span
              className={cn('', {
                [classNameTextBody as string]: classNameTextBody,
              })}
            >
              {textBody}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
