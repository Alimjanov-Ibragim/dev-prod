import cn from 'classnames';
import { type ReactNode } from 'react';

type Props = {
  topSlot?: ReactNode;
  sidebarSlot?: ReactNode;
  children: ReactNode;
};

export const LayoutInner = ({ topSlot, sidebarSlot, children }: Props) => {
  return (
    <div className='grid gap-[24px]'>
      <div className='flex justify-between items-center gap-[12px]'>
        {topSlot}
      </div>
      <div className={cn('flex gap-[24px]')}>
        {sidebarSlot && (
          <div className={cn('flex-[0_0_25%]')}>{sidebarSlot}</div>
        )}
        <div className={cn('flex-1')}>{children}</div>
      </div>
    </div>
  );
};
