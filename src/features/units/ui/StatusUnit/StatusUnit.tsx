import cn from 'classnames';
import { useState } from 'react';
import Select, { components } from 'react-select';

// need to change data from store
import { unitStatuses } from 'pages/leads/ui/Page/data';
import { GetIcon } from 'shared/lib';
import { Indicator } from 'shared/ui';

export const StatusUnit = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const DropdownIndicator = (props: any) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator
          {...props}
          innerProps={{
            ...props.innerProps,
            onMouseDown: (e) => (e.preventDefault(), e.stopPropagation()),
          }}
        >
          <GetIcon
            name={isMenuOpen ? 'chevron-up' : 'chevron-down'}
            width={'12'}
            height={'12'}
            className={props.isDisabled ? 'fill-gray-300' : 'fill-gray-500'}
          />
        </components.DropdownIndicator>
      )
    );
  };
  const ValueContainer = ({ children, ...props }: any) => {
    const currentValue = props.getValue()[0].value;
    const color =
      currentValue === 'unreleased'
        ? 'gray'
        : currentValue === 'available'
        ? 'green'
        : currentValue === 'blocked'
        ? 'red'
        : currentValue === 'booked'
        ? 'blue'
        : 'yellow';

    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          {!!children && (
            <Indicator
              color={color}
              className={cn('w-[6px] h-[6px] absolute left-[6px]')}
            />
          )}
          {children}
        </components.ValueContainer>
      )
    );
  };

  return (
    <Select
      menuIsOpen={isMenuOpen}
      onMenuOpen={() => setIsMenuOpen(true)}
      onMenuClose={() => setIsMenuOpen(false)}
      classNamePrefix='select'
      defaultValue={unitStatuses[0]}
      isDisabled={false}
      isLoading={false}
      isClearable={false}
      isRtl={false}
      isSearchable={false}
      name='color'
      options={unitStatuses}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator,
        ValueContainer,
      }}
      classNames={{
        valueContainer: () => '!pl-[18px]',
        singleValue: (state) =>
          state.isDisabled ? '!text-gray-300' : '!text-gray-800',
        control: (state) => {
          return cn(
            '!min-h-[28px] !min-w-[132px] !text-gray-500 !border !border-solid !border-gray-200 !shadow-none !rounded-md'
          );
        },
        multiValue: (_) =>
          '!flex !items-center !bg-transparent !border !border-solid !border-gray-200 !text-gray-800 !text-sm !rounded-full',
        multiValueLabel: (_) => '!text-gray-500 !text-xs !font-medium',
        multiValueRemove: (_) =>
          '!bg-gray-200 w-[15px] h-[15px] mr-[6px] !pl-[0] !pr-[0] !rounded-full',
      }}
    />
  );
};
