import cn from 'classnames';
import { useCallback, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { GetIcon, TIcon } from 'shared/lib';

import { Button } from 'shared/ui';

const LIST_OPTIONS: {
  icon: TIcon;
  text: string;
}[] = [
  {
    icon: 'printer',
    text: 'Print',
  },
];

const LIST_DOWNLOADS: {
  icon: TIcon;
  text: string;
}[] = [
  {
    icon: 'excel',
    text: 'Excel',
  },
  {
    icon: 'pdf',
    text: 'Pdf',
  },
  {
    icon: 'word',
    text: 'Word',
  },
];

export const ExportOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className='relative' ref={ref}>
      <Button
        typeStyle='white'
        color='gray'
        leadingIcon='download'
        trailingIcon='chevron-down'
        onClick={handleClick}
      >
        Export
      </Button>
      <div
        className={cn(
          'z-10 bg-white w-[234px] rounded-lg text-left border border-solid border-gray-200 shadow-[0px_10px_8px_0px_rgba(0,_0,_0,_0.04),0px_4px_3px_0px_rgba(0,_0,_0,_0.10)]',
          {
            'block absolute inset-[46px_auto_auto_0px] m-[0px] transform-[translate3d(327px,70px,0px)]':
              isOpen,
            hidden: !isOpen,
          }
        )}
      >
        {/* top element */}
        <div className={cn('px-2 pt-2')}>
          <div
            className={cn(
              'title py-2 px-3 text-xs text-gray-400 font-medium uppercase'
            )}
          >
            OPTIONS
          </div>
          <div className={cn('items')}>
            {LIST_OPTIONS.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'item flex items-center py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer select-none'
                )}
              >
                <GetIcon
                  name={item.icon}
                  width='16'
                  height='16'
                  className={cn('mr-3')}
                />
                <span className={cn('text-sm text-gray-800 font-medium')}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-gray-200 h-[1px] m-2'></div>
        {/* bot elements */}
        <div className={cn('px-2 pb-2')}>
          <div
            className={cn(
              'title py-2 px-3 text-xs text-gray-400 font-medium uppercase'
            )}
          >
            DOWNLOAD OPTIONS
          </div>
          <div className={cn('items')}>
            {LIST_DOWNLOADS.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'item flex items-center py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer select-none'
                )}
              >
                <GetIcon
                  name={item.icon}
                  width='16'
                  height='14'
                  className={cn('mr-3')}
                />
                <span className={cn('text-sm text-gray-800 font-medium')}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
