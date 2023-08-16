import cn from 'classnames';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { routes } from 'shared/config';
import { GetIcon } from 'shared/lib';
import { Link, Icon } from 'shared/ui';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  const setActiveClass = (routeName: string) =>
    splitLocation[1].includes(routeName) ? 'bg-white/10' : '';

  return (
    <div
      className={cn(
        'ex-sidebar bg-slate-900 text-white fixed z-20 inset-0 w-[260px] flex flex-col justify-between'
      )}
    >
      {/* top */}
      <div className={cn('p-5 overflow-y-auto flex flex-col gap-[24px]')}>
        <Link to='/'>
          <GetIcon name='logo' width='116' height='31' />
        </Link>
        <Link
          to={'/dashboards'}
          icon='house'
          className={setActiveClass('dashboards')}
        >
          Dashboards
        </Link>
        <div className={cn('flex-col flex gap-[4px]')}>
          <div
            className={cn(
              'py-[8px] px-[14px] text-sm font-semibold text-white uppercase'
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
                  className={setActiveClass(route.to.slice(1))}
                  to={'#'}
                  icon={route.icon}
                  badgeText={route.badgeText}
                  badgeClassName='flex items-center justify-center w-[18px] h-[18px] bg-white rounded-full	border border-solid border-gray-200 shadow-[0px_1px_2px 0px_rgba(0,0,0,0.05)] text-[10px] font-medium text-gray-800'
                >
                  {route.title}
                  <Icon
                    icon={!isOpen ? 'chevron-down' : 'chevron-up'}
                    className='!p-0 ml-auto'
                    classNameIcon='fill-white/50 w-[12px] h-[12px]'
                  />
                </Link>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    'flex flex-col ml-[20px] pl-[10px] border-l border-solid border-white/20',
                    {
                      hidden: !isOpen,
                    }
                  )}
                >
                  {route.sub?.map((subroute, subrouteIndex) => (
                    <Link
                      className={setActiveClass(subroute.to.slice(1))}
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
                className={setActiveClass(route.to.slice(1))}
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
          'p-3 flex items-center justify-center gap-[16px] border-t border-solid border-white/20'
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
