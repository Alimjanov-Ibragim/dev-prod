import cn from 'classnames';
import {
  useEffect,
  type ReactNode,
  useState,
  useRef,
  useLayoutEffect,
} from 'react';

import { UNIQUE_NUMBER } from 'shared/config';
import { GetIcon } from 'shared/lib';

type TStyleType = 'solid' | 'soft';

type Props = {
  styleType?: TStyleType;
  children?: ReactNode;
  indeterminate?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  disabled?: boolean;
};

export const Checkbox = ({
  styleType = 'solid',
  children,
  onChange,
  value,
  disabled,
  indeterminate = false,
}: Props) => {
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (indeterminate && firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
  });

  return (
    <label
      htmlFor={`link-checkbox-${UNIQUE_NUMBER}`}
      className='relative w-3.5 h-3.5 flex items-center'
    >
      <input
        onChange={onChange}
        checked={value}
        disabled={disabled}
        id={`link-checkbox-${UNIQUE_NUMBER}`}
        type='checkbox'
        className={cn(
          'absolute inset-0 appearance-none peer focus:ountline-none rounded border border-solid',
          {
            'border-gray-200 bg-white checked:border-blue-500 checked:bg-blue-500 flex h-full focus:shadow-[0px_0px_0px_4px_rgba(59,130,246,0.25)] focus-visible:shadow-[0px_0px_0px_4px_rgba(59,130,246,0.25)] disabled:opacity-[0.699999988079071] disabled:cursor-not-allowed':
              styleType === 'solid',
            'border-blue-500 bg-white checked:border-blue-500 checked:bg-blue-100 flex h-full focus:shadow-[0px_0px_0px_4px_rgba(59,130,246,0.25)] focus-visible:shadow-[0px_0px_0px_4px_rgba(59,130,246,0.25)] disabled:opacity-[0.499999988079071] disabled:cursor-not-allowed':
              styleType === 'soft',
            '!border-blue-500 !bg-blue-500':
              indeterminate && !firstUpdate.current && styleType === 'solid',
          }
        )}
      />
      {value && (
        <GetIcon
          name='check'
          width='14'
          height='14'
          className={cn(
            'absolute inset-0 mt-auto mb-auto ml-auto mr-auto hidden peer-checked:block peer-disabled:cursor-not-allowed',
            {
              'fill-white peer-disabled:opacity-[0.699999988079071]':
                styleType === 'solid',
              'fill-blue-500 peer-disabled:opacity-[0.299999988079071]':
                styleType === 'soft',
            }
          )}
        />
      )}
      {!firstUpdate.current && indeterminate && !value && (
        <GetIcon
          name='dash'
          width='14'
          height='14'
          className={cn(
            'absolute inset-0 mt-auto mb-auto ml-auto mr-auto block peer-checked:none peer-disabled:cursor-not-allowed',
            {
              'fill-white peer-disabled:opacity-[0.699999988079071]':
                styleType === 'solid',
              'fill-blue-500 peer-disabled:opacity-[0.299999988079071]':
                styleType === 'soft',
            }
          )}
        />
      )}
      {children && (
        <span className='ml-6 text-sm font-medium text-gray-900 select-none peer-disabled:opacity-[0.699999988079071] peer-disabled:cursor-not-allowed peer-disabled:text-gray-300'>
          {children}
        </span>
      )}
    </label>
  );
};
