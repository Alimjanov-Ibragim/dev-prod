import cn from 'classnames';
import { type ReactNode } from 'react';

import { Indicator } from 'shared/ui';
import { TBadgeShape, TBadgeSize, TBadgeType, TBadgeColor } from './index';

type Props = {
  shape?: TBadgeShape;
  color?: TBadgeColor;
  type?: TBadgeType;
  size?: TBadgeSize;
  indicator?: boolean;
  children: ReactNode;
  className?: string;
};

export const Badge = ({
  shape = 'rounded',
  color = 'blue',
  type = 'solid',
  size = 'default',
  indicator = false,
  className,
  children,
}: Props) => {
  return (
    <div
      className={cn('badge-tag flex items-center', {
        'rounded-md': shape === 'rounded',
        'rounded-full': shape === 'pilled',
        'py-px px-1 text-[10px] font-medium leading-4 tracking-[.05px]':
          size === 'small',
        'p-1.5 text-xs font-medium tracking-[.06px]': size === 'default',
        'px-2.5 py-3 text-xs font-medium tracking-[.06px]': size === 'large',
        // type === 'outlined' || type === 'white'
        'bg-transparent border border-solid':
          type === 'outlined' || type === 'white',
        // type === 'white'
        'border-gray-200': type === 'white',
        // type === 'outlined'
        'border-gray-400 text-gray-800':
          type === 'outlined' && color === 'dark',
        'border-gray-200 text-gray-500':
          type === 'outlined' && color === 'gray',
        'border-teal-200 text-teal-500':
          type === 'outlined' && color === 'green',
        'border-blue-200 text-blue-500':
          type === 'outlined' && color === 'blue',
        'border-red-200 text-red-500': type === 'outlined' && color === 'red',
        'border-yellow-200 text-yellow-500':
          type === 'outlined' && color === 'yellow',
        // type === 'soft'
        'bg-gray-100 text-gray-800': type === 'soft' && color === 'dark',
        'bg-gray-50 text-gray-500': type === 'soft' && color === 'gray',
        'bg-teal-100 text-teal-500': type === 'soft' && color === 'green',
        'bg-blue-100 text-blue-500': type === 'soft' && color === 'blue',
        'bg-red-100 text-red-500': type === 'soft' && color === 'red',
        'bg-yellow-100 text-yellow-500': type === 'soft' && color === 'yellow',
        // type === 'solid'
        'bg-gray-800 text-white': type === 'solid' && color === 'dark',
        'bg-gray-500 text-white': type === 'solid' && color === 'gray',
        'bg-teal-500 text-white': type === 'solid' && color === 'green',
        'bg-blue-500 text-white': type === 'solid' && color === 'blue',
        'bg-red-500 text-white': type === 'solid' && color === 'red',
        'bg-yellow-500 text-white': type === 'solid' && color === 'yellow',
        'bg-transparent text-gray-800': type === 'solid' && color === 'light',
        [className as string]: className,
      })}
    >
      {indicator && <Indicator className='mr-[7px]' color={color} />}
      {children}
    </div>
  );
};
