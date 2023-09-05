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

const LIST: {
  text: string;
}[] = [
  {
    text: 'EOI ',
  },
  {
    text: 'Sales offer',
  },
  {
    text: 'Reservation Agreement',
  },
  {
    text: 'SPA',
  },
];

export const Upload = () => {
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
        leadingIcon='upload'
        trailingIcon='chevron-down'
        onClick={handleClick}
      >
        Upload
      </Button>
      <div
        className={cn(
          'z-20 bg-white w-[234px] rounded-lg text-left border border-solid border-gray-200 shadow-[0px_10px_8px_0px_rgba(0,_0,_0,_0.04),0px_4px_3px_0px_rgba(0,_0,_0,_0.10)]',
          {
            'block absolute inset-[46px_auto_auto_0px] m-[0px] transform-[translate3d(327px,70px,0px)]':
              isOpen,
            hidden: !isOpen,
          }
        )}
      >
        {/* bot elements */}
        <div className={cn('p-2')}>
          <div
            className={cn(
              'title py-2 px-3 text-xs text-gray-400 font-medium uppercase'
            )}
          >
            TEMPLATES
          </div>
          <div className={cn('items')}>
            {LIST.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'item flex items-center py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer select-none'
                )}
              >
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
