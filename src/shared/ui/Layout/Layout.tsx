import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
  sidebarSlot: ReactNode;
  header?: ReactNode;
};

export function Layout({ sidebarSlot, header }: Props) {
  return (
    <div className='flex flex-row h-full'>
      <div className='sidebar grow-0 shrink-0 basis-[260px] bg-gray-200'>
        {sidebarSlot}
      </div>
      <div className='content grow shrink basis-[0%]'>
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
