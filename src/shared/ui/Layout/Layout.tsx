import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
  sidebarSlot: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div className='flex flex-row h-full gap-[24px]'>
      <div className='sidebar grow-0 shrink-0 basis-[260px]'>
        {props.sidebarSlot}
      </div>
      <div className='content grow shrink basis-[0%]'>
        <div className='pb-[24px]'>head</div>
        <Outlet />
      </div>
      {/* <ScrollRestoration /> */}
    </div>
  );
}
