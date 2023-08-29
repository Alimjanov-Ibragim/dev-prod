import cn from 'classnames';

import { data } from './config';

export const Statuses = () => {
  const active = 4;
  return (
    <ul className={cn('flex items-center w-full justify-between')}>
      {data.map((status, index) => (
        <li
          className={cn(
            'relative flex-1 h-[30px] p-[5px_5px_5px_2px]',
            'text-xs font-medium text-gray-500 text-center',
            'flex items-center justify-center',
            {
              'ml-[10px]': index > 0,
              'after:absolute after:content-[""] after:w-0 after:h-0 after:right-[-10px] after:border-t-[16px]  after:border-b-[14px] after:border-l-[6px] after:border-l-transparent after:border-t-gray-100 after:border-b-gray-100':
                index < data.length - 1,
              'before:absolute before:content-[""] before:w-0 before:h-0 before:left-[-10px] before:border-t-[16px] before:border-t-transparent before:border-b-[14px] before:border-b-transparent before:border-l-[6px] before:border-gray-100':
                index,
              'pl-[10px] ml-0': index === 0,
              'pr-[30px]': index < data.length - 1,
              // if active start
              'bg-gray-100': index !== active,
              'bg-gray-300': index === active,
              'after:border-t-gray-300 after:border-b-gray-300':
                index === active - 1,
              'before:border-gray-300': index === active + 1 || index === 0,
              // if active end
            }
          )}
          key={index}
        >
          {status}
        </li>
      ))}
    </ul>
  );
};
