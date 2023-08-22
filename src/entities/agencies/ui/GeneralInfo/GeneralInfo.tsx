import cn from 'classnames';
import { ReactNode } from 'react';

import { data } from './config';

type Props = {
  rightSlot?: ReactNode;
};

export const GeneralInfo = ({ rightSlot }: Props) => {
  return (
    <div className={cn('border border-slate-200 rounded-md')}>
      {/* top side */}
      <div
        className={cn(
          'flex justify-between items-center gap-[5px] py-[12px] px-[20px] border-b border-slate-200'
        )}
      >
        <div className={cn('text-base text-slate-800 font-semibold')}>
          General info
        </div>
        {rightSlot && rightSlot}
      </div>
      {/* bot side */}
      <div className={cn('p-[20px] flex flex-col gap-[16px]')}>
        {/* each item */}
        {data.map((item, index) => (
          <div className={cn('flex flex-col gap-[4px]')} key={index}>
            <div className={cn('text-sm text-slate-600')}>{item.title}</div>
            <div className={cn('text-sm font-medium text-slate-800')}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
