import cn from 'classnames';
import { useState, forwardRef } from 'react';
import { components } from 'react-select';
import AsyncSelectUI from 'react-select/async';

import { GetIcon, TIcon } from 'shared/lib';

type Props = {
  /** List of options array */
  options: any;
  /** Label text */
  label?: string;
  /** Dropdown icon name when menu is open */
  dropdownIndicatorIconOpen?: TIcon;
  /** Dropdown icon name when menu is closed */
  dropdownIndicatorIcon?: TIcon;
  /** Dropdown icon width */
  iconWidth?: string;
  /** Dropdown icon height */
  iconHeight?: string;
  /** Multivalue icon. Icon choosen element */
  multiValueRemoveIcon?: TIcon;
  /** Multivalue icon width */
  multiValueRemoveIconWidth?: string;
  /** Multivalue icon height */
  multiValueRemoveIconHeight?: string;
  /** Clear value icon */
  clearIndicatorIcon?: TIcon;
  /** Clear value icon width */
  clearIndicatorIconWidth?: string;
  /** Clear value icon height */
  clearIndicatorIconHeight?: string;
  /** Disabled select state */
  disabled?: boolean;
  /** Boolean is multivalue elements */
  isMulti?: boolean;
  /** Onchange handler of select */
  onChange?: any;
  /** Default value of select */
  defaultValue?: any;
  /** Single value classname */
  singleValueClassname?: string;
};

export const AsyncSelect = forwardRef(
  (
    {
      options,
      label,
      dropdownIndicatorIconOpen = 'chevron-up',
      dropdownIndicatorIcon = 'chevron-down',
      iconWidth = '16',
      iconHeight = '16',
      multiValueRemoveIcon = 'x',
      multiValueRemoveIconWidth = '12',
      multiValueRemoveIconHeight = '12',
      clearIndicatorIcon = 'x',
      clearIndicatorIconWidth = '16',
      clearIndicatorIconHeight = '16',
      disabled = false,
      isMulti = false,
      onChange,
      defaultValue,
      singleValueClassname,
    }: Props,
    ref
  ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const DropdownIndicator = (props: any) => {
      return (
        components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
            <GetIcon
              name={
                isMenuOpen ? dropdownIndicatorIconOpen : dropdownIndicatorIcon
              }
              width={iconWidth}
              height={iconHeight}
              className={props.isDisabled ? 'fill-gray-300' : 'fill-gray-500'}
            />
          </components.DropdownIndicator>
        )
      );
    };
    const MultiValueRemove = (props: any) => {
      return (
        components.MultiValueRemove && (
          <components.MultiValueRemove {...props}>
            <GetIcon
              name={multiValueRemoveIcon}
              width={multiValueRemoveIconWidth}
              height={multiValueRemoveIconHeight}
              className={
                (props.isDisabled ? 'fill-gray-300' : 'fill-gray-500') +
                ' m-auto'
              }
            />
          </components.MultiValueRemove>
        )
      );
    };
    const ClearIndicator = (props: any) => {
      return (
        components.ClearIndicator && (
          <components.ClearIndicator {...props}>
            <GetIcon
              name={clearIndicatorIcon}
              width={clearIndicatorIconWidth}
              height={clearIndicatorIconHeight}
              className={
                (props.isDisabled ? 'fill-gray-300' : 'fill-gray-500') +
                ' m-auto'
              }
            />
          </components.ClearIndicator>
        )
      );
    };

    return (
      <div className={cn('ex-async-select text-left')}>
        {label && (
          <label
            htmlFor='async-select'
            className={cn(
              'text-sm font-semibold text-gray-800 mb-2 block h-[17px]'
            )}
          >
            {label}
          </label>
        )}
        <AsyncSelectUI
          ref={null}
          onChange={onChange}
          menuIsOpen={isMenuOpen}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
          isMulti={isMulti}
          isDisabled={disabled}
          name='async-select'
          inputId='async-select'
          id='async-select'
          cacheOptions
          defaultOptions
          loadOptions={options}
          defaultValue={defaultValue}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator,
            MultiValueRemove,
            ClearIndicator,
          }}
          classNames={{
            singleValue: (state) =>
              state.isDisabled ? '!text-gray-300' : '!text-gray-800',
            control: (state) =>
              (state.isFocused
                ? '!border !border-solid !border-blue-500 !shadow-[0px_0px_0px_4px_rgba(59,130,246,0.25)]'
                : state.isDisabled
                ? '!border !border-solid !border-gray-200 !bg-gray-50 !shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                : '!text-gray-500 !border !border-solid !border-gray-200') +
              cn(' !rounded-md !h-[46px]', {
                [singleValueClassname as string]: singleValueClassname,
              }),
            multiValue: (_) =>
              '!flex !items-center !bg-transparent !border !border-solid !border-gray-200 !text-gray-800 !text-sm !rounded-full',
            multiValueLabel: (_) => '!text-gray-800 !text-sm',
            multiValueRemove: (_) =>
              '!bg-gray-200 w-[15px] h-[15px] mr-[6px] !pl-[0] !pr-[0] !rounded-full',
          }}
        />
      </div>
    );
  }
);
