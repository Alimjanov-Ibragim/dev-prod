import cn from 'classnames';
import { useState } from 'react';

import { GetIcon } from 'shared/lib';
import { DatepickerUI, DateValueType } from './libs';

export const Datepicker = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(11)),
  });

  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <div>
      <DatepickerUI
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
        showFooter={true}
        placeholder='Choose date'
        displayFormat={'DD/MM/YYYY'}
        readOnly={true}
        inputClassName={cn(
          'w-[362px] h-[38px] pl-[40px] text-[15px] font-medium text-gray-500 bg-white border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-md outline-none'
        )}
        classNames={{
          toggleButton: (_) =>
            cn(
              'absolute left-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed'
            ),
          // footer: (_) => 'hello footer',
        }}
        toggleIcon={() => (
          <GetIcon
            name='calendar4-range'
            width='14'
            height='14'
            className='fill-gray-800'
          />
        )}
        separator='-'
        // startWeekOn='mon'
        // containerClassName='relative mt-8 hello'
      />
    </div>
  );
};
