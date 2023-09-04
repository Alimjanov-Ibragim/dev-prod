import cn from 'classnames';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { routes } from 'shared/config';
import { GetIcon } from 'shared/lib';
import { toggleSidebarBoolean } from 'shared/model';
import { useAppDispatch, useAppSelector } from 'shared/model';

import { Link, Icon, Indicator } from 'shared/ui';

export const Sidebar = () => {
  const isSidebarOpen = useAppSelector((state) => state.sidebarBoolean);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  const setActiveClass = (routeName: string, sub?: boolean) => {
    if (splitLocation.join('').length === 0) return;

    return routeName.includes(splitLocation[1])
      ? sub
        ? 'bg-gray-100'
        : 'bg-white/10'
      : '';
  };

  return (
    <div
      className={cn(
        'ex-sidebar bg-slate-900 fixed z-20 text-white inset-0 flex flex-col justify-between',
        {
          'w-[260px]': isSidebarOpen.isOpen,
          'w-[72px]': !isSidebarOpen.isOpen,
        }
      )}
    >
      <Icon
        icon={!isSidebarOpen.isOpen ? 'arrow-bar-right' : 'arrow-bar-left'}
        role='button'
        className='!inline-flex absolute top-[12px] right-[-19px] !rounded-full w-[38px] h-[38px] !bg-slate-900 border border-white/20 hover:scale-[1.1] transition'
        size='xs'
        styleType='solid'
        color='dark'
        onClick={() => dispatch(toggleSidebarBoolean())}
      />
      {/* top */}
      <div
        className={cn('p-5 flex flex-col gap-[24px]', {
          '!p-[20px]': !isSidebarOpen.isOpen,
        })}
      >
        <Link
          to='/'
          className={cn('', {
            '!p-[0px] hover:!bg-transparent': !isSidebarOpen.isOpen,
          })}
        >
          {isSidebarOpen.isOpen ? (
            <GetIcon name='logo' width='116' height='31' />
          ) : (
            <GetIcon
              name='logo-without-text'
              width='30'
              height='30'
              className={cn(
                '!block text-[0px] !p-[0px] w-[30px] h-[30px] mx-auto'
              )}
              // classNameIcon={cn('!w-[30px] !h-[30px]')}
            />
          )}
        </Link>
        <Link
          to={'/dashboards'}
          icon='house'
          className={cn(`${setActiveClass('dashboards')}`, {
            '!block text-[0px] !p-[8px] w-[30px] h-[30px]':
              !isSidebarOpen.isOpen,
          })}
          classNameIcon={cn({
            'm-[0_auto]': !isSidebarOpen.isOpen,
          })}
        >
          Dashboards
        </Link>
        <div className={cn('flex-col flex gap-[4px]')}>
          <div
            className={cn(
              'py-[8px] px-[14px] text-sm font-semibold text-white uppercase',
              {
                '!p-[0px] w-[30px] mt-[4px] mb-[8px] text-xs font-semibold text-white text-center':
                  !isSidebarOpen.isOpen,
              }
            )}
          >
            {!isSidebarOpen.isOpen ? '...' : 'PAGES'}
          </div>
          {routes.map((route, index) =>
            route.sub ? (
              <div
                className={cn('flex flex-col relative', {
                  'w-[30px]': !isSidebarOpen.isOpen,
                  '[&:hover>div]:absolute [&:hover>div]:block [&:hover>div]:items-start [&:hover>div]:inset-[0px_auto_auto_62px] [&:hover>div]:m-[0px] [&:hover>div]:rounded-md [&:hover>div]:shadow-[0px_1px_2px_1px_rgba(0,0,0,0.10),0px_1px_1px_0px_rgba(0,0,0,0.06)] [&:hover>div]:bg-white [&:hover>div]:p-[8px]':
                    !isSidebarOpen.isOpen,
                })}
                key={index}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link
                  className={cn('', {
                    [`${setActiveClass(
                      route.sub?.map((r) => r.to.split('/')).join('')
                    )}`]: !isOpen || !isSidebarOpen.isOpen,
                    '!block text-[0px] !p-[8px_8px_8px_10px] w-[30px] h-[30px] relative':
                      !isSidebarOpen.isOpen,
                    '!hidden': route.isHidden,
                  })}
                  to={'#'}
                  icon={route.icon}
                  // badgeText={route.badgeText}
                  // badgeClassName='flex items-center justify-center w-[18px] h-[18px] bg-white rounded-full	border border-solid border-gray-200 shadow-[0px_1px_2px 0px_rgba(0,0,0,0.05)] text-[10px] font-medium text-gray-800'
                >
                  {!isSidebarOpen.isOpen && (
                    <Indicator
                      className={cn(
                        'absolute top-[14px] left-[4px] w-[4px] h-[4px]'
                      )}
                    />
                  )}
                  {route.title}
                  {isSidebarOpen.isOpen && (
                    <Icon
                      icon={!isOpen ? 'chevron-down' : 'chevron-up'}
                      className={cn('!p-0 ml-auto', {
                        'mr-auto': !isSidebarOpen.isOpen,
                      })}
                      classNameIcon='fill-white/50 w-[12px] h-[12px]'
                    />
                  )}
                </Link>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className={cn('flex flex-col border-white/20', {
                    hidden: !isOpen,
                    'ml-[20px] pl-[10px] border-l border-solid':
                      isSidebarOpen.isOpen,
                    'block absolute items-start inset-[0px_auto_auto_62px] m-[0px] rounded-md shadow-[0px_1px_2px_1px_rgba(0,0,0,0.10),0px_1px_1px_0px_rgba(0,0,0,0.06)] bg-white p-[8px]':
                      !isSidebarOpen.isOpen,
                    'before:absolute before:content[""] before:w-[42px] before:h-[40px] before:top-[0px] before:left-[-32px]':
                      !isSidebarOpen.isOpen,
                  })}
                >
                  {route.sub?.map((subroute, subrouteIndex) => (
                    <Link
                      className={cn({
                        [`${setActiveClass(subroute.to.slice(1), true)}`]:
                          !isOpen,
                        [`${setActiveClass(subroute.to.slice(1))}`]: isOpen,
                        'flex-col !text-gray-800 px-[12px] w-full !items-start !rounded-md	!py-[8px] hover:!bg-gray-100':
                          !isSidebarOpen.isOpen,
                        hidden: subroute.isHidden,
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
                  '!block text-[0px] !p-[8px] w-[30px] h-[30px]':
                    !isSidebarOpen.isOpen,
                  '!hidden': route.isHidden,
                })}
                key={index}
                to={route.to}
                icon={route.icon}
                // badgeText={route.badgeText}
                // badgeClassName='flex items-center justify-center w-[18px] h-[18px] bg-white rounded-full	border border-solid border-gray-200 shadow-[0px_1px_2px 0px_rgba(0,0,0,0.05)] text-[10px] font-medium text-gray-800'
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
            'flex-col !p-[20px]': !isSidebarOpen.isOpen,
          }
        )}
      >
        <Icon
          icon='brightness-high'
          size='xs'
          className='!p-[8px] w-[30px] h-[30px]'
          classNameIcon='fill-white'
          role='button'
        />
        <Icon
          icon='info-circle'
          size='xs'
          className='!p-[8px] w-[30px] h-[30px]'
          classNameIcon='fill-white'
          role='button'
        />
        <Icon
          icon='people'
          size='xs'
          className='!p-[8px] w-[30px] h-[30px]'
          classNameIcon='fill-white'
          role='button'
        />
      </div>
    </div>
  );
};
