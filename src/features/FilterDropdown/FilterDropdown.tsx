import cn from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

// need to change data from store
import { ColourOption, colourOptions } from 'pages/leads/ui/Page/data';
import { AsyncSelect, Button, Icon } from 'shared/ui';

export const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref: any = useRef(null);
  const [position, setPosition] = useState({ x: true });

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  // to detect modal do not stuck on the rightside
  useEffect(() => {
    const handleWindowResize = () => {
      const x =
        window.innerWidth - (ref.current.offsetLeft + ref.current.clientWidth);
      setPosition({
        x: x > ref.current.clientWidth,
      });
    };

    const onLoad = () => {
      let bool = true;
      if (true) {
        bool = false;
        handleWindowResize();
      }
      window.addEventListener('resize', handleWindowResize);
    };

    window.addEventListener('load', onLoad);
    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  // options
  // select example
  const filterColors = (inputValue: string) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<ColourOption[]>((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  return (
    <div className='relative' ref={ref}>
      <Button
        typeStyle='white'
        color='gray'
        leadingIcon='filter'
        badgeText='5'
        badgeColor='bg-blue-500 text-white'
        onClick={handleClick}
      >
        Filter
      </Button>
      <div
        className={cn(
          'z-10 bg-white w-[350px] rounded-lg text-left border border-solid border-gray-200 shadow-[0px_10px_8px_0px_rgba(0,_0,_0,_0.04),0px_4px_3px_0px_rgba(0,_0,_0,_0.10)]',
          {
            'block absolute inset-[46px_auto_auto_0px] m-[0px]': isOpen,
            'left-[calc(-350px+115px)]': !position.x,
            hidden: !isOpen,
          }
        )}
      >
        {/* top elements */}
        <div
          className={cn(
            'py-4 px-5 flex items-center justify-between border-b border-solid border-gray-100'
          )}
        >
          <div className={cn('text-sm font-semibold text-gray-800')}>
            Filter users
          </div>
          <Icon
            icon='x'
            role='button'
            styleType='soft'
            className='w-[38px] h-[38px] !p-0'
            classNameIcon='w-[20px] h-[20px]'
            onClick={() => setIsOpen(false)}
          />
        </div>
        {/* content elements */}
        <div className={cn('pl-5 pr-5 pt-6 grid gap-[24px]')}>
          <div className={cn('grid grid-cols-2 gap-[24px]')}>
            <AsyncSelect options={promiseOptions} label='Status' />
            <AsyncSelect options={promiseOptions} label='Type' />
          </div>
          <AsyncSelect options={promiseOptions} label='Agency' />
          <AsyncSelect options={promiseOptions} label='Agent' />
          <AsyncSelect options={promiseOptions} label='Project' />
          <AsyncSelect options={promiseOptions} label='Init' />
          <AsyncSelect options={promiseOptions} label='Client' />
          <AsyncSelect options={promiseOptions} label='Company' />
        </div>
        {/* bot elements */}
        <div className={cn('pl-5 pr-5 pt-6 pb-5 grid grid-cols-2 gap-[12px]')}>
          <Button
            className='w-full'
            typeStyle='white'
            color='dark'
            size='default'
            onClick={() => setIsOpen(false)}
          >
            Reset
          </Button>
          <Button className='w-full' size='default'>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};
