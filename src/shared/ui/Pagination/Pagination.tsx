import cn from 'classnames';
import { useState } from 'react';
import PaginationUI from 'react-paginate';
import Select, { SingleValue } from 'react-select';

import { TPaginationProps } from './libs';

const PER_PAGE_OPTIONS = [
  {
    value: 15,
    label: 15,
  },
  {
    value: 25,
    label: 25,
  },
  {
    value: 50,
    label: 50,
  },
  {
    value: 100,
    label: 100,
  },
  {
    value: 200,
    label: 200,
  },
];

export const Pagination = ({
  onChange,
  previousLabel,
  nextLabel,
  breakLabel,
  styleType = 'bordered-next/prev-buttons',
  shape = 'rounded',
  perPageAmount,
  perPageAmountOnTheLeftside = true,
  pageRangeDisplayed = 5,
  pageCount,
  wrapperClassname,
}: TPaginationProps) => {
  const [pageCountCalc, setPageCountCalc] = useState(
    Math.round(pageCount / PER_PAGE_OPTIONS[0].value)
  );
  return (
    <div
      className={cn(
        'ex-pagination w-full flex items-center justify-between gap-2',
        {
          [wrapperClassname as string]: wrapperClassname,
        }
      )}
    >
      <PaginationUI
        onPageChange={onChange}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        breakLabel={breakLabel}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCountCalc}
        renderOnZeroPageCount={null}
        // classnames
        containerClassName={cn('flex items-center')}
        pageClassName={cn('page-item2', {})}
        pageLinkClassName={cn(
          'page-link px-3 w-[40px] h-[40px] flex items-center justify-center text-base font-medium text-gray-500',
          {
            'rounded-md':
              shape === 'rounded' &&
              (styleType === 'base' ||
                styleType === 'bordered-next/prev-buttons'),
            'border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ml-[-1px]':
              styleType === 'bordered',
            'rounded-full':
              shape === 'circular' &&
              (styleType === 'base' ||
                styleType === 'bordered-next/prev-buttons' ||
                styleType === 'pagination-pager' ||
                styleType === 'pager'),
          }
        )}
        // next/previous Item
        previousClassName={cn(
          'page-item text-base font-medium text-gray-500',
          {}
        )}
        nextClassName={cn('page-item text-base font-medium text-gray-500', {})}
        // next/previous Link
        previousLinkClassName={cn(
          'page-link px-3 h-[40px] flex items-center justify-center text-base font-medium text-gray-500',
          {
            'border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ml-[-1px]':
              styleType === 'bordered',
            'rounded-l-md': shape === 'rounded' && styleType === 'bordered',
            'rounded-l-full': shape === 'circular' && styleType === 'bordered',
            'border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-md mr-3':
              shape === 'rounded' &&
              (styleType === 'bordered-next/prev-buttons' ||
                styleType === 'pager'),
            'border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-full mr-3':
              shape === 'circular' &&
              styleType === 'bordered-next/prev-buttons',
          }
        )}
        nextLinkClassName={cn(
          'page-link px-3 h-[40px] flex items-center justify-center text-base font-medium text-gray-500',
          {
            'border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ml-[-1px]':
              styleType === 'bordered',
            'rounded-r-md': shape === 'rounded' && styleType === 'bordered',
            'rounded-r-full': shape === 'circular' && styleType === 'bordered',
            'border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-md ml-3':
              shape === 'rounded' &&
              (styleType === 'bordered-next/prev-buttons' ||
                styleType === 'pager'),
            'border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-full ml-3':
              shape === 'circular' &&
              styleType === 'bordered-next/prev-buttons',
          }
        )}
        //break Item
        breakClassName={cn('page-item')}
        //break Link
        breakLinkClassName={cn(
          'page-link w-[40px] h-[40px] flex items-center justify-center text-base font-medium text-gray-500',
          {
            'border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ml-[-1px]':
              styleType === 'bordered',
          }
        )}
        // active Item
        activeClassName='active'
        // active Link
        activeLinkClassName={cn('', {
          'bg-blue-500 text-white':
            styleType === 'base' ||
            styleType === 'bordered' ||
            styleType === 'bordered-next/prev-buttons',
          'rounded-md':
            shape === 'rounded' &&
            (styleType === 'pagination-pager' || styleType === 'pager'),
          'border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]':
            styleType === 'pagination-pager' || styleType === 'pager',
        })}
      />

      {perPageAmount && (
        <div
          className={cn(
            'flex items-center h-full text-[15px] text-gray-500 font-medium',
            {
              'order-first': perPageAmountOnTheLeftside,
            }
          )}
        >
          <span className={cn('mr-2')}>Showing: </span>
          <Select
            onChange={(
              e: SingleValue<{
                value: number;
                label: number;
              }>
            ) => setPageCountCalc(pageCount / e?.value!)}
            defaultValue={PER_PAGE_OPTIONS[0]}
            options={PER_PAGE_OPTIONS}
            components={{
              IndicatorSeparator: () => null,
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
                cn(' !rounded-md'),
              multiValue: (_) =>
                '!flex !items-center !bg-transparent !border !border-solid !border-gray-200 !text-gray-800 !text-sm !rounded-full',
              multiValueLabel: (_) => '!text-gray-800 !text-sm',
              multiValueRemove: (_) =>
                '!bg-gray-200 w-[15px] h-[15px] mr-[6px] !pl-[0] !pr-[0] !rounded-full',
            }}
          />
          <span className={cn('ml-2')}>of {pageCount}</span>
        </div>
      )}
    </div>
  );
};
