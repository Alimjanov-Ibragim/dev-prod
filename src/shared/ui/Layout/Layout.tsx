import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
  sidebarSlot: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div>
      <div className='sidebar'>{props.sidebarSlot}</div>
      <div className='content'>
        <Outlet />
      </div>
      {/* <ScrollRestoration /> */}
    </div>
  );
}
