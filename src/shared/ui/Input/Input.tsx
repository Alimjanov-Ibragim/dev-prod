import cn from 'classnames';

import { UNIQUE_NUMBER } from 'shared/config';
import { GetIcon } from 'shared/lib';
import { TInputShape, TInputSize, TInputStyleType, TIcon } from 'shared/lib';

type Props = {
  styleType?: TInputStyleType;
  size?: TInputSize;
  shape?: TInputShape;
  type?: string;
  alt?: string;
  success?: boolean;
  disabled?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  label?: string;
  iconName?: TIcon;
};

export const Input = ({
  styleType = 'bordered',
  size = 'default',
  shape = 'rounded',
  type = 'text',
  alt,
  success,
  disabled = false,
  onChange,
  label,
  iconName,
}: Props) => {
  return (
    <div className={cn('input-wrap flex flex-col justify-start', {})}>
      {label && (
        <label
          htmlFor={`input-${UNIQUE_NUMBER}`}
          className='text-left text-gray-800 text-sm font-semibold mb-2.5'
        >
          {label}
        </label>
      )}
      <div className='relative'>
        {iconName && (
          <div className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'>
            <GetIcon
              width='14'
              height='14'
              name={iconName}
              className='w-3.5 h-3.5 fill-gray-500'
            />
          </div>
        )}
        <input
          id={`input-${UNIQUE_NUMBER}`}
          className={cn(
            'input text-[15px] leading-none font-medium block w-full',
            {
              'pl-10': iconName,
              'py-2.5	px-3': size === 'small',
              'py-3.5 px-4': size === 'default',
              'py-[22px] px-5': size === 'large',
              'rounded-md': shape === 'rounded',
              'rounded-full': shape === 'pilled',
              // success state
              'border border-solid border-teal-500 bg-white shadow-[0_0_0_4px_rgba(34,197,94,0.25)]':
                success,
              // styleType === 'bordered'
              'border border-solid border-gray-200 bg-white outline-none shadow-sm hover:border-gray-300 focus:border focus:border-solid focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.25)] focus:text-gray-800 invalid:border invalid:border-solid invalid:border-red-500 invalid:bg-white invalid:shadow-[0_0_0_4px_rgba(239,68,68,0.25)] disabled:border disabled:border-solid disabled:border-gray-200 disabled:bg-gray-50 disabled:shadow-[0_1px_2px_0px_rgba(0,0,0,0.05)] disabled:cursor-not-allowed disabled:text-gray-300 placeholder:text-gray-500 text-gray-800':
                styleType === 'bordered',
              // styleType === 'underline'
              'rounded-none border-b border-solid border-gray-200 bg-white outline-none hover:border-gray-300 focus:border-b  focus:border-x-0 focus:border-t-0 focus:border-solid focus:border-blue-500 focus:bg-white focus:text-gray-800 invalid:border-b invalid:border-x-0 invalid:border-t-0 invalid:border-solid invalid:border-red-500 invalid:bg-white disabled:border-b disabled:border-x-0 disabled:border-t-0 disabled:border-solid disabled:border-gray-200 disabled:bg-white disabled:cursor-not-allowed disabled:text-gray-300 placeholder:text-gray-500 text-gray-800':
                styleType === 'underline',
              // styleType === 'bordered'
              'border border-solid border-gray-200 bg-gray-50 outline-none shadow-sm hover:border-gray-200 hover:bg-white hover:shadow-[0_1px_2px_0px_rgba(0,0,0,0.05)] focus:border focus:border-solid focus:border-blue-500 focus:bg-gray-50 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.25)] focus:text-gray-800 invalid:border invalid:border-solid invalid:border-red-500 invalid:bg-gray-50 invalid:shadow-[0_0_0_4px_rgba(239,68,68,0.25)] disabled:border disabled:border-solid disabled:border-gray-200 disabled:bg-gray-50 disabled:shadow-[0_1px_2px_0px_rgba(0,0,0,0.05)] disabled:cursor-not-allowed disabled:text-gray-300 placeholder:text-gray-500 text-gray-800':
                styleType === 'light',
            }
          )}
          onChange={onChange}
          disabled={disabled}
          // value={'hello'}
          placeholder='placeholder'
          type={type}
          alt={alt || 'input'}
        />
      </div>
    </div>
  );
};
