import cn from 'classnames';

import { TIcon } from 'shared/lib';
import { GetIcon } from 'shared/lib';
import { TIconColor, TIconShape, TIconSize, TIconStyle } from './libs';

type Props = {
  /** Style type of icon: "white" | "default" | "solid" | "soft" | "soft-outlined" | "outlined" */
  styleType?: TIconStyle;
  /** Size of icon: "default" | "xs" | "small" | "large" */
  size?: TIconSize;
  /** Shape of icon: "rounded" | "circular" */
  shape?: TIconShape;
  /** Color of icon: "dark" | "gray" | "green" | "blue" | "red" | "yellow" | "light" */
  color?: TIconColor;
  /** Get icon by name: "check" | "plus" | "download" | "filter" | "pencil-fill" etc.s */
  icon: TIcon;
  /** ClassName of wrapper tag. */
  className?: string;
};

export const Icon: React.FC<Props> = ({
  size = 'default',
  styleType = 'default',
  shape = 'rounded',
  color = 'dark',
  icon,
  className,
}: Props) => {
  return (
    <div
      className={cn('ex-icon inline-block', {
        'p-2.5': size === 'default',
        'p-1': size === 'xs' || 'small',
        'p-5': size === 'large',
        'border border-solid border-gray-200 shadow-sm': styleType === 'white',
        'rounded-md': shape === 'rounded',
        'rounded-full': shape === 'circular',
        // styleType === 'solid'
        'bg-gray-800': styleType === 'solid' && color === 'dark',
        'bg-gray-500': styleType === 'solid' && color === 'gray',
        'bg-teal-500': styleType === 'solid' && color === 'green',
        'bg-blue-500': styleType === 'solid' && color === 'blue',
        'bg-red-500': styleType === 'solid' && color === 'red',
        'bg-yellow-500': styleType === 'solid' && color === 'yellow',
        // styleType === 'soft'
        'bg-gray-100': styleType === 'soft' && color === 'dark',
        'bg-gray-50': styleType === 'soft' && color === 'gray',
        'bg-teal-100': styleType === 'soft' && color === 'green',
        'bg-blue-100': styleType === 'soft' && color === 'blue',
        'bg-red-100': styleType === 'soft' && color === 'red',
        'bg-yellow-100': styleType === 'soft' && color === 'yellow',
        // styleType === 'soft-outlined'
        'bg-gray-100 border-8	border-solid border-gray-50':
          styleType === 'soft-outlined' && color === 'dark',
        'bg-gray-50 border-8	border-solid border-gray-50':
          styleType === 'soft-outlined' && color === 'gray',
        'bg-teal-100 border-8	border-solid border-teal-50':
          styleType === 'soft-outlined' && color === 'green',
        'bg-blue-100 border-8	border-solid border-blue-50':
          styleType === 'soft-outlined' && color === 'blue',
        'bg-red-100 border-8	border-solid border-red-50':
          styleType === 'soft-outlined' && color === 'red',
        'bg-yellow-100 border-8	border-solid border-yellow-50':
          styleType === 'soft-outlined' && color === 'yellow',
        // styleType === 'outlined'
        'bg-transparent border	border-solid border-gray-800':
          styleType === 'outlined' && color === 'dark',
        'bg-transparent border	border-solid border-gray-500':
          styleType === 'outlined' && color === 'gray',
        'bg-transparent border	border-solid border-teal-500':
          styleType === 'outlined' && color === 'green',
        'bg-transparent border	border-solid border-blue-500':
          styleType === 'outlined' && color === 'blue',
        'bg-transparent border	border-solid border-red-500':
          styleType === 'outlined' && color === 'red',
        'bg-transparent border	border-solid border-yellow-500':
          styleType === 'outlined' && color === 'yellow',
        [className as string]: className,
      })}
    >
      <GetIcon
        name={icon}
        className={cn('', {
          // size
          'w-4 h-4': size === 'xs',
          'w-5 h-5': size === 'small',
          'w-6 h-6': size === 'default' || size === 'large',
          // styleType === 'default' || styleType === 'soft'
          'fill-gray-800':
            (styleType === 'default' ||
              styleType === 'outlined' ||
              styleType === 'soft-outlined' ||
              styleType === 'soft') &&
            color === 'dark',
          'fill-gray-500':
            (styleType === 'default' ||
              styleType === 'outlined' ||
              styleType === 'soft-outlined' ||
              styleType === 'soft') &&
            color === 'gray',
          'fill-teal-500':
            (styleType === 'default' ||
              styleType === 'outlined' ||
              styleType === 'soft-outlined' ||
              styleType === 'soft') &&
            color === 'green',
          'fill-blue-500':
            (styleType === 'default' ||
              styleType === 'outlined' ||
              styleType === 'soft-outlined' ||
              styleType === 'soft') &&
            color === 'blue',
          'fill-red-500':
            (styleType === 'default' ||
              styleType === 'outlined' ||
              styleType === 'soft-outlined' ||
              styleType === 'soft') &&
            color === 'red',
          'fill-yellow-500':
            (styleType === 'default' ||
              styleType === 'outlined' ||
              styleType === 'soft-outlined' ||
              styleType === 'soft') &&
            color === 'yellow',
          // styleType === 'solid'
          'fill-white': styleType === 'solid',
          'fill-gray-700': styleType === 'white',
        })}
        width={
          size === 'default' || size === 'large'
            ? '24px'
            : size === 'xs'
            ? '16px'
            : size === 'small'
            ? '20px'
            : ''
        }
        height={
          size === 'default' || size === 'large'
            ? '24px'
            : size === 'xs'
            ? '16px'
            : size === 'small'
            ? '20px'
            : ''
        }
      />
    </div>
  );
};
