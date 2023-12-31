import cn from 'classnames';
import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from 'shared/model';

type Props = {
  sidebarSlot?: ReactNode;
  header?: ReactNode;
};

export function Layout({ sidebarSlot, header }: Props) {
  const { isOpen } = useAppSelector((state) => state.sidebarBoolean);

  return (
    <div className='flex flex-row h-full'>
      {sidebarSlot}
      <div
        className={cn('content grow shrink basis-[0%]', {
          'pl-[260px]': sidebarSlot && isOpen,
          'pl-[90px]': sidebarSlot && !isOpen,
        })}
      >
        {header && (
          <div className='mb-[24px] border-b border-solid border-slate-200'>
            {header}
          </div>
        )}
        <div className='pb-[24px] px-[24px]'>
          <Outlet />
        </div>
      </div>
      {/* <ScrollRestoration /> */}
    </div>
  );
}
