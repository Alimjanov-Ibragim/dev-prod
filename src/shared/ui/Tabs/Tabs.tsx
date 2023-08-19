import cn from 'classnames';
import { useCallback, useState, Fragment } from 'react';

import { TTabsItem, TTabsTypeStyle } from 'shared/lib';
import { Button } from '../Button';

type Props = {
  list: TTabsItem[];
  typeStyle?: TTabsTypeStyle;
  wrapperClassName?: string;
  badgeTextClassName?: string;
  headItemClassName?: string;
  vertical?: boolean;
};

export const Tabs = ({
  list,
  typeStyle = 'base',
  badgeTextClassName,
  wrapperClassName,
  headItemClassName,
  vertical = false,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // func to handle tabs content show or hide state
  const handleChangeCurrentIndex = useCallback(
    (ind: number) => {
      setCurrentIndex(ind);
    },
    [currentIndex]
  );

  // tab head's active classname handle by on change
  const handleActiveClassName = useCallback(
    (targetIndex: number, classNames: string) => {
      return targetIndex === currentIndex ? classNames : '';
    },
    [currentIndex]
  );

  return (
    <div
      className={cn('ex-tabs flex flex-col gap-[24px]', {
        [wrapperClassName as string]: wrapperClassName,
      })}
    >
      {/* tabs heads */}
      <div
        className={cn({
          'border-b-2 border-gray-200': typeStyle === 'bordered',
          'rounded-lg	bg-gray-100 p-1': typeStyle === 'segment',
          [headItemClassName as string]: headItemClassName,
        })}
      >
        <ul
          className={cn('flex', {
            'gap-[10px]': typeStyle !== 'base',
            [!vertical ? `gap-[20px]` : 'gap-[10px]']: typeStyle === 'base',
            'items-center': !vertical,
            'flex-col items-start': vertical,
          })}
        >
          {list.map((headItem, headIndex) => (
            <li
              key={headIndex}
              className={cn({
                'w-full': vertical,
              })}
            >
              <Button
                badgeColor={cn('', {
                  'bg-blue-100 text-blue-500': typeStyle !== 'pills-gray',
                  'bg-white text-gray-800': typeStyle === 'pills-gray',
                  [badgeTextClassName as string]: badgeTextClassName,
                })}
                badgeText={headItem.badgeText}
                leadingIcon={headItem.icon}
                leadingIconColor={
                  headItem.disabled
                    ? 'gray'
                    : handleActiveClassName(headIndex, 'fill-blue-500')
                    ? //  typeStyle === 'pills' || typeStyle === 'pills-gray' when active
                      typeStyle === 'pills' || typeStyle === 'pills-gray'
                      ? 'light'
                      : 'blue'
                    : 'dark'
                }
                color='dark'
                typeStyle='link'
                disabled={headItem.disabled}
                onClick={() => handleChangeCurrentIndex(headIndex)}
                className={cn(
                  'appearance-none	!p-0 !text-sm !font-medium !h-[44px] hover:!text-blue-500 focus:!ring-0 !rounded-[0px]',
                  {
                    // if active item
                    [`${handleActiveClassName(headIndex, '!text-blue-500')}`]:
                      typeStyle !== 'segment' && typeStyle !== 'pills-gray',
                    // headItem.disabled
                    '!text-gray-300 hover:!text-gray-300 cursor-not-allowed':
                      headItem.disabled,
                    // typeStyle === 'bordered'
                    [`border-b-2 mb-[-2px] ${handleActiveClassName(
                      headIndex,
                      'border-blue-500'
                    )}`]: typeStyle === 'bordered',
                    // typeStyle === 'segment'
                    [`${handleActiveClassName(
                      headIndex,
                      '!bg-white !shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] !text-gray-800'
                    )}` + ' !py-[12px] !rounded-md !px-[16px]']:
                      typeStyle === 'segment',
                    // typeStyle === 'pills' || typeStyle === 'pills-gray'
                    [`!py-[12px] !rounded-md !px-[16px] ${handleActiveClassName(
                      headIndex,
                      typeStyle === 'pills-gray'
                        ? '!bg-gray-200 !text-gray-800'
                        : '!bg-blue-500 !text-white'
                    )}`]: typeStyle === 'pills' || typeStyle === 'pills-gray',
                    // vertical
                    'w-full !justify-start': vertical,
                  }
                )}
              >
                {headItem.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* tabs contents */}
      {list.map(
        (content, contentIndex) =>
          currentIndex === contentIndex && (
            <Fragment key={contentIndex}>{content.renderContent()}</Fragment>
          )
      )}
    </div>
  );
};
