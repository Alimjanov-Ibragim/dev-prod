import cn from 'classnames';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { routes } from 'shared/config';
import { GetIcon } from 'shared/lib';
import { toggleSidebarBoolean } from 'shared/model';
import { useAppDispatch, useAppSelector } from 'shared/model';

import { Link, Icon } from 'shared/ui';

export const Sidebar = () => {
  const isSidebarOpen = useAppSelector((state) => state.sidebarBoolean);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  const setActiveClass = (routeName: string) =>
    routeName.includes(splitLocation[1]) ? 'bg-white/10' : '';

  return (
    <div
      className={cn(
        'ex-sidebar bg-slate-900 fixed z-20 text-white inset-0 flex flex-col justify-between',
        {
          'w-[260px]': isSidebarOpen.isOpen,
          'w-[90px]': !isSidebarOpen.isOpen,
        }
      )}
    >
      <Icon
        icon='arrow-bar-left'
        role='button'
        className='!inline-flex absolute top-[12px] right-[-19px] !rounded-full w-[38px] h-[38px] !bg-slate-900 border border-white/20 hover:scale-[1.1] transition'
        size='xs'
        styleType='solid'
        color='dark'
        onClick={() => dispatch(toggleSidebarBoolean())}
      />
      {/* top */}
      <div
        className={cn('p-5 overflow-y-auto flex flex-col gap-[24px]', {
          '!pt-2 !p-1': !isSidebarOpen.isOpen,
        })}
      >
        <Link to='/'>
          {isSidebarOpen.isOpen ? (
            <GetIcon name='logo' width='116' height='31' />
          ) : (
            <GetIcon
              name='logo-without-text'
              width='24'
              height='25'
              className='mx-auto'
            />
          )}
        </Link>
        <Link
          to={'/dashboards'}
          icon='house'
          className={cn(`${setActiveClass('dashboards')}`, {
            'flex-col': !isSidebarOpen.isOpen,
          })}
        >
          Dashboards
        </Link>
        <div className={cn('flex-col flex gap-[4px]')}>
          <div
            className={cn(
              'py-[8px] px-[14px] text-sm font-semibold text-white uppercase',
              {
                '!px-[8px]': !isSidebarOpen.isOpen,
              }
            )}
          >
            PAGES
          </div>
          {routes.map((route, index) =>
            route.sub ? (
              <div
                className={cn('flex flex-col')}
                key={index}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link
                  className={cn('', {
                    [`${setActiveClass(
                      route.sub?.map((r) => r.to.split('/')).join('')
                    )}`]: !isOpen,
                    'flex-col': !isSidebarOpen.isOpen,
                  })}
                  to={'#'}
                  icon={route.icon}
                  badgeText={route.badgeText}
                  badgeClassName='flex items-center justify-center w-[18px] h-[18px] bg-white rounded-full	border border-solid border-gray-200 shadow-[0px_1px_2px 0px_rgba(0,0,0,0.05)] text-[10px] font-medium text-gray-800'
                >
                  {route.title}
                  <Icon
                    icon={!isOpen ? 'chevron-down' : 'chevron-up'}
                    className={cn('!p-0 ml-auto', {
                      'mr-auto': !isSidebarOpen.isOpen,
                    })}
                    classNameIcon='fill-white/50 w-[12px] h-[12px]'
                  />
                </Link>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className={cn('flex flex-col border-white/20', {
                    hidden: !isOpen,
                    'ml-[20px] pl-[10px] border-l border-solid':
                      isSidebarOpen.isOpen,
                  })}
                >
                  {route.sub?.map((subroute, subrouteIndex) => (
                    <Link
                      className={cn(`${setActiveClass(subroute.to.slice(1))}`, {
                        'flex-col': !isSidebarOpen.isOpen,
                      })}
                      key={subrouteIndex}
                      chevron
                      to={subroute.to}
                      icon={subroute.icon}
                      badgeText={subroute.badgeText}
                      badgeClassName='flex items-center justify-center w-[18px] h-[18px] bg-white rounded-full	border border-solid border-gray-200 shadow-[0px_1px_2px 0px_rgba(0,0,0,0.05)] text-[10px] font-medium text-gray-800'
                    >
                      {subroute.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                className={cn(`${setActiveClass(route.to.slice(1))}`, {
                  'flex-col': !isSidebarOpen.isOpen,
                })}
                key={index}
                to={route.to}
                icon={route.icon}
                badgeText={route.badgeText}
                badgeClassName='flex items-center justify-center w-[18px] h-[18px] bg-white rounded-full	border border-solid border-gray-200 shadow-[0px_1px_2px 0px_rgba(0,0,0,0.05)] text-[10px] font-medium text-gray-800'
              >
                {route.title}
              </Link>
            )
          )}
        </div>
      </div>
      {/* bot */}
      <div
        className={cn(
          'p-3 flex items-center justify-center gap-[16px] border-t border-solid border-white/20',
          {
            'flex-col': !isSidebarOpen.isOpen,
          }
        )}
      >
        <Icon
          icon='brightness-high'
          size='xs'
          className='w-[38px] h-[38px]'
          classNameIcon='fill-white'
          role='button'
        />
        <Icon
          icon='info-circle'
          size='xs'
          className='w-[38px] h-[38px]'
          classNameIcon='fill-white'
          role='button'
        />
        <Icon
          icon='people'
          size='xs'
          className='w-[38px] h-[38px]'
          classNameIcon='fill-white'
          role='button'
        />
      </div>
    </div>
  );
};
