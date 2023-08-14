import cn from 'classnames';
import { type ReactNode } from 'react';

import { TIcon } from 'shared/lib';
import { Icon, Loading } from 'shared/ui';
import {
  TButtonColors,
  TButtonFontSize,
  TButtonFontWeight,
  TButtonShapes,
  TButtonSizes,
  TButtonStyles,
} from './libs';

type Props = {
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  /** Style type of button: "solid" | "outlined" | "ghost" | "soft" | "link" | "white" */
  typeStyle?: TButtonStyles;
  /** Size of button: "small" | "default" | "large" */
  size?: TButtonSizes;
  /** Shape of button: 'default' | 'pilled' */
  shape?: TButtonShapes;
  /** Color of button: "dark" | "gray" | "green" | "blue" | "red" | "yellow" | "light" */
  color?: TButtonColors;
  /** Font size of button: "font-text-xs" | "font-text-sm" | "font-text-base" | "font-text-lg" | "font-text-xl" | "font-text-2xl" | "font-text-3xl" | "font-text-4xl" | "font-text-5xl" */
  fontSize?: TButtonFontSize;
  /** Font weight of button: "font-thin" | "font-extralight" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black" */
  fontWeight?: TButtonFontWeight;
  /** Type of button */
  type?: 'submit';
  /** Loading statement: "true" or "false" */
  isLoading?: boolean;
  /** Disabled state of button: "true" or "false" */
  disabled?: boolean;
  className?: string;
  /** Leading icon: "before" */
  leadingIcon?: TIcon;
  /** Leading icon color */
  leadingIconColor?: TButtonColors;
  /** Leading icon clasname */
  leadingIconClassName?: string;
  /** Trailing icon sourse path: "after" */
  trailingIcon?: TIcon;
  /** Trailing icon color */
  trailingIconColor?: TButtonColors;
  /** Trailing icon clasname */
  trailingIconClassName?: string;
  /** Badge text */
  badgeText?: string;
  /** Badge color */
  badgeColor?: string;
};

export function Button({
  onClick,
  children,
  isLoading,
  size = 'small',
  typeStyle = 'solid',
  fontSize = 'font-text-base',
  fontWeight = 'font-semibold',
  shape = 'default',
  color = 'blue',
  disabled,
  type,
  className,
  leadingIcon,
  leadingIconColor,
  leadingIconClassName = '!p-0',
  trailingIcon,
  trailingIconColor,
  trailingIconClassName = '!p-0',
  badgeText,
  badgeColor,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        `btn ex-btn text-[15px] flex justify-center items-center transition-all delay-300`,
        {
          // typeStyle === 'solid'
          [`bg-gray-800 text-white hover:bg-gray-900 focus:text-white focus:ring-4 focus:ring-gray-800/25 disabled:text-white disabled:bg-gray-300`]:
            typeStyle === 'solid' && color === 'dark',
          [`bg-gray-500 text-white hover:bg-gray-600 focus:text-white focus:ring-4 focus:ring-gray-500/25 disabled:text-white disabled:bg-gray-300`]:
            typeStyle === 'solid' && color === 'gray',
          [`bg-teal-500 text-white hover:bg-teal-600 focus:text-white focus:ring-4 focus:ring-teal-500/25 disabled:text-white disabled:bg-teal-300`]:
            typeStyle === 'solid' && color === 'green',
          [`bg-blue-500 text-white hover:bg-blue-600 focus:text-white focus:ring-4 focus:ring-blue-500/25 disabled:text-white disabled:bg-blue-300`]:
            typeStyle === 'solid' && color === 'blue',
          [`bg-red-500 text-white hover:bg-red-600 focus:text-white focus:ring-4 focus:ring-red-500/25 disabled:text-white disabled:bg-red-300`]:
            typeStyle === 'solid' && color === 'red',
          [`bg-yellow-500 text-white hover:bg-yellow-600 focus:text-white focus:ring-4 focus:ring-yellow-500/25 disabled:text-white disabled:bg-yellow-300`]:
            typeStyle === 'solid' && color === 'yellow',
          [`bg-white text-gray-600 hover:bg-white-80 focus:gray-600 focus:ring-4 focus:ring-white/25 disabled:text-gray-300 disabled:bg-transparent`]:
            typeStyle === 'solid' && color === 'light',
          // typeStyle === 'outlined'
          'border-2 border-solid border-gray-800 text-gray-800 focus:text-gray-800 focus:ring-4 focus:ring-gray-800/25 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:border-2 focus:border-solid focus:border-gray-800 focus:bg-transparent	disabled:border-solid disabled:border-2 disabled:text-gray-300 disabled:bg-transparent disabled:border-gray-300':
            typeStyle === 'outlined' && color === 'dark',
          'border-2 border-solid border-gray-200 text-gray-500 focus:text-gray-500 focus:ring-4 focus:ring-gray-800/25 hover:text-white hover:bg-gray-500 focus:bg-gray-500 focus:border-2 focus:border-solid focus:border-gray-200 focus:bg-transparent	disabled:border-solid disabled:border-2 disabled:text-gray-200 disabled:bg-transparent disabled:border-gray-100':
            typeStyle === 'outlined' && color === 'gray',
          'border-2 border-solid border-teal-500 text-teal-500 focus:text-teal-500 focus:ring-4 focus:ring-teal-500/25 hover:text-white hover:bg-teal-500 focus:bg-teal-500 focus:border-2 focus:border-solid focus:border-teal-500 focus:bg-transparent	disabled:border-solid disabled:border-2 disabled:text-teal-300 disabled:bg-transparent disabled:border-teal-300':
            typeStyle === 'outlined' && color === 'green',
          'border-2 border-solid border-blue-500 text-blue-500 focus:text-blue-500 focus:ring-4 focus:ring-blue-500/25 hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:border-2 focus:border-solid	focus:border-blue-500 focus:bg-transparent disabled:border-solid disabled:border-2 disabled:text-blue-300 disabled:bg-transparent disabled:border-blue-300':
            typeStyle === 'outlined' && color === 'blue',
          'border-2 border-solid border-red-500 text-red-500 focus:text-red-500 focus:ring-4 focus:ring-red-500/25 hover:text-white hover:bg-red-500 focus:bg-red-500 focus:border-2 focus:border-solid focus:border-red-500 focus:bg-transparent	disabled:border-solid disabled:border-2 disabled:text-red-300 disabled:bg-transparent disabled:border-rd-300':
            typeStyle === 'outlined' && color === 'red',
          'border-2 border-solid border-yellow-500 text-yellow-500 focus:text-yellow-500 focus:ring-4 focus:ring-yellow-500/25 hover:text-white hover:bg-yellow-500 focus:bg-yellow-500 focus:border-2 focus:border-solid focus:border-yellow-500 focus:bg-transparent	disabled:border-solid disabled:border-2 disabled:text-yellow-300 disabled:bg-transparent disabled:border-yellow-300':
            typeStyle === 'outlined' && color === 'yellow',
          // typeStyle === 'soft'
          'bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-800/25 focus:bg-gray-100 focus:text-gray-800 disabled:bg-gray-50 disabled:text-gray-200':
            typeStyle === 'soft' && color === 'dark',
          'bg-gray-50 text-gray-500 hover:bg-gray-500 hover:text-white focus:ring-4 focus:ring-gray-800/25 focus:bg-gray-50 focus:text-white disabled:bg-slate-50 disabled:text-gray-300':
            typeStyle === 'soft' && color === 'gray',
          'bg-teal-100 text-teal-500 hover:bg-teal-500 hover:text-white focus:ring-4 focus:ring-teal-500/25 focus:bg-teal-100 focus:text-gray-600 disabled:bg-teal-50 disabled:text-teal-200':
            typeStyle === 'soft' && color === 'green',
          'bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-blue-500/25 focus:bg-blue-100 focus:text-blue-50 disabled:bg-blue-50 disabled:text-blue-200':
            typeStyle === 'soft' && color === 'blue',
          'bg-red-100 text-red-500 hover:bg-red-500 hover:text-white focus:ring-4 focus:ring-red-500/25 focus:bg-red-100 focus:text-red-500 disabled:bg-red-50 disabled:text-red-200':
            typeStyle === 'soft' && color === 'red',
          'bg-yellow-100 text-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-4 focus:ring-yellow-500/25 focus:bg-yellow-100 focus:text-yellow-500 disabled:bg-yellow-50 disabled:text-yellow-200':
            typeStyle === 'soft' && color === 'yellow',
          // typeStyle === 'ghost' || typeStyle === 'link'
          'bg-transparent text-gray-800 focus:ring-4 focus:ring-gray-800/25 hover:text-gray-900 disabled:bg-transparent disabled:text-gray-200':
            (typeStyle === 'ghost' || typeStyle === 'link') && color === 'dark',
          'bg-transparent text-gray-500 focus:ring-4 focus:ring-gray-800/25 hover:text-gray-900 disabled:bg-transparent disabled:text-gray-200':
            (typeStyle === 'ghost' || typeStyle === 'link') && color === 'gray',
          'bg-transparent text-teal-500 focus:ring-4 focus:ring-teal-500/25 hover:text-teal-700 disabled:bg-transparent disabled:text-teal-200':
            (typeStyle === 'ghost' || typeStyle === 'link') &&
            color === 'green',
          'bg-transparent text-blue-500 focus:ring-4 focus:ring-blue-500/25 hover:text-blue-700 disabled:bg-transparent disabled:text-blue-200':
            (typeStyle === 'ghost' || typeStyle === 'link') && color === 'blue',
          'bg-transparent text-red-500 focus:ring-4 focus:ring-red-500/25 hover:text-red-700 disabled:bg-transparent disabled:text-red-200':
            (typeStyle === 'ghost' || typeStyle === 'link') && color === 'red',
          'bg-transparent text-yellow-500 focus:ring-4 focus:ring-yellow-500/25 hover:text-yellow-700 disabled:bg-transparent disabled:text-yellow-200':
            (typeStyle === 'ghost' || typeStyle === 'link') &&
            color === 'yellow',
          // typeStyle === 'white'
          'border shadow-sm	hover:bg-gray-50 disabled:text-gray-300 disabled:bg-white border-gray-200 text-gray-800 bg-white':
            typeStyle === 'white' && color === 'dark',
          'border shadow-sm	hover:bg-gray-50 disabled:text-gray-300 disabled:bg-white border-gray-200 text-gray-500 bg-white':
            typeStyle === 'white' && color === 'gray',
          'border shadow-sm	hover:bg-teal-50 disabled:text-teal-300 disabled:bg-white border-teal-200 text-teal-500 bg-white':
            typeStyle === 'white' && color === 'green',
          'border shadow-sm	hover:bg-blue-50 disabled:text-blue-300 disabled:bg-white border-blue-200 text-blue-500 bg-white':
            typeStyle === 'white' && color === 'blue',
          'border shadow-sm	hover:bg-red-50 disabled:text-red-300 disabled:bg-white border-red-200 text-red-500 bg-white':
            typeStyle === 'white' && color === 'red',
          'border shadow-sm	hover:bg-yellow-50 disabled:text-yellow-300 disabled:bg-white border-yellow-200 text-yellow-500 bg-white':
            typeStyle === 'white' && color === 'yellow',
          [`cursor-not-allowed`]: disabled,
          // fontweight
          [`${fontWeight}`]: fontWeight,
          // fontsize
          [`${fontSize}`]: fontSize,
          'py-2.5 px-3 h-[38px]': size === 'small',
          'py-3.5 px-4 h-[46px]': size === 'default',
          'py-6 px-5 h-[62px]': size === 'large',
          'rounded-md': shape === 'default',
          'rounded-full': shape === 'pilled',
          [className as string]: className,
        }
      )}
      onClick={onClick}
    >
      {isLoading && <Loading size='xs' />}
      {!isLoading && (
        <>
          {leadingIcon && (
            <Icon
              icon={leadingIcon}
              className={`mr-2 ${leadingIconClassName}`}
              size={size === 'small' ? 'xs' : size}
              color={leadingIconColor}
            />
          )}
          {children}
          {/* {trailingIconSrc && (
            <img src={trailingIconSrc} alt='' className='ml-2' />
          )} */}
          {trailingIcon && (
            <Icon
              icon={trailingIcon}
              className={`ml-2 ${trailingIconClassName}`}
              size={size === 'small' ? 'xs' : size}
              color={trailingIconColor}
            />
          )}
          {badgeText && (
            <span
              className={`flex py-px pl-0.5 pr-0.5 align-center justify-center gap-px ${badgeColor} rounded-full w-5 h-5 text-xs ml-2`}
            >
              {badgeText}
            </span>
          )}
        </>
      )}
    </button>
  );
}
