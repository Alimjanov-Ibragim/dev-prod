import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from 'shared/model';

type TStyleTypeTable =
  | 'basic'
  | 'striped-rows'
  | 'highlighted'
  | 'bordered'
  | 'thead-divided';

type Props = {
  /** Rounded table */
  rounded?: boolean;
  /** Table with shadow */
  withShadow?: boolean;
  /** Table head background class */
  theadBgClass?: string;
  /** Boolean for show or not head of the table */
  headless?: boolean;
  /** Above right place of the table as ReactNode */
  topSlot?: React.ReactNode;
  /** Below left place of the table as ReactNode */
  botSlot?: React.ReactNode;
  /** Style type of the table: "basic" | "striped-rows" | "highlighted" | "bordered" | "thead-divided" */
  styleType?: TStyleTypeTable;
  /** Array of list of content. */
  list: any;
  /** Classname for wrapper of table */
  wrapClassTable?: string;
  /** Table item columns */
  cols: any;
};

export const Table = ({
  rounded = false,
  withShadow = false,
  headless = false,
  topSlot,
  botSlot,
  styleType = 'basic',
  list,
  wrapClassTable,
  theadBgClass,
  cols,
}: Props) => {
  const { pathname } = useLocation();
  const innerPage = pathname.split('/').length > 2;
  const { isOpen } = useAppSelector((state) => state.sidebarBoolean);
  return (
    <div
      className={cn('ex-table', {
        'border border-solid border-gray-200':
          styleType === 'bordered' || styleType === 'thead-divided',
        'rounded-md': rounded,
        'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10),0px_1px_1px_0px_rgba(0,0,0,0.06)]':
          withShadow,
        [wrapClassTable as string]: wrapClassTable,
      })}
    >
      {/* top elements */}
      {topSlot && (
        <div
          className={cn(
            'ex-table__top py-4 px-5 flex justify-between items-center'
          )}
        >
          {topSlot}
        </div>
      )}

      {/* table elements */}
      <div
        className={cn(
          'overflow-scroll ex-table__table',
          // 'relative h-[973px] inset-0 overflow-x-scroll',
          {
            'rounded-tl-md rounded-tr-md': rounded && !topSlot,
            [innerPage
              ? 'min-[1441px]:w-[calc(100vw-682px)]'
              : 'w-[calc(100vw-318px)]']: isOpen,
            [innerPage
              ? 'min-[1441px]:w-[calc(100vw-546px)]'
              : 'w-[calc(100vw-148px)]']: !isOpen,
          }
        )}
      >
        <div
          className={cn(
            'table w-[2000px] border-collapse ex-table__content text-sm font-medium text-gray-800'
            // 'absolute inset-[50px_0_0_0]',
            // {
            //   'min-[1441px]:w-[100vw] max-[1440px]:w-[140vw]': cols.length,
            // }
          )}
        >
          {headless === false && (
            <div
              className={cn(
                'ex-table__head border-b-[1px] border-solid',
                'table-header-group w-full',
                // 'table sticky inset-0 z-10',
                {
                  // 'min-[1441px]:w-[100vw] max-[1440px]:w-[140vw]': cols.length,
                  'border-gray-200':
                    styleType === 'basic' ||
                    styleType === 'striped-rows' ||
                    styleType === 'bordered', // border bottom color
                  'border-t-[1px] border-solid border-gray-200': topSlot,
                  [theadBgClass as string]: theadBgClass,
                }
              )}
            >
              <div
                className={cn(
                  'table-row text-xs text-left font-medium text-gray-500 uppercase'
                )}
              >
                {cols.map(
                  (
                    headerItem: {
                      maxWidth: string;
                      width: string;
                      title: string;
                      titleRender?: any;
                      render: any;
                    },
                    headerIndex: number
                  ) => (
                    <div
                      key={headerIndex}
                      className={cn(
                        'table-cell align-middle px-1 first:pl-5 last:pr-5',
                        {
                          // [`${headerItem.width}`]: headerItem.width,
                          // [`${headerItem.maxWidth}`]: headerItem.maxWidth,
                        }
                      )}
                    >
                      <div
                        className={cn('py-4 text-center', 'whitespace-pre', {
                          // 'pl-5': headerIndex === 0 && onChangeAllCheckboxHandler,
                          'border-r-[1px] border-solid border-gray-200':
                            styleType === 'thead-divided' &&
                            headerIndex !== cols.length - 1,
                        })}
                      >
                        {headerItem.title === 'checkbox' ? (
                          <>{headerItem.titleRender()}</>
                        ) : (
                          <>{headerItem.title}</>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
          {list.map((item: any, index: number) => (
            <div
              key={index}
              className={cn(
                'border-b-[1px] border-solid',
                'w-full  table-row-group ex-table__row text-left',
                {
                  'border-gray-200':
                    styleType === 'basic' ||
                    styleType === 'highlighted' ||
                    styleType === 'bordered', // border bottom color
                  // '!border-b-[0px]':
                  //   styleType === 'striped-rows' ||
                  //   ((styleType === 'bordered' ||
                  //     styleType === 'thead-divided') &&
                  //     index === list.length - 1 &&
                  //     !botSlot), // border bottom none
                  // flex: onChangeAllCheckboxHandler,
                  'bg-gray-100':
                    styleType === 'striped-rows' && index % 2 !== 0, // bg color
                }
              )}
            >
              <>
                {/* new */}
                {cols.map(
                  (
                    col: {
                      title: string;
                      render: any;
                      width: string;
                      maxWidth: string;
                    },
                    i: number
                  ) => (
                    <div
                      key={i}
                      className={cn(
                        'table-cell align-middle px-1 first:pl-5 last:pr-5 relative',
                        {
                          // [`${col.maxWidth}`]: col.maxWidth,
                          // [`${col.width}`]: col.width,
                        }
                      )}
                    >
                      <div
                        className={cn('py-4 text-center whitespace-pre', {
                          // 'pl-5': i === 0 && onChangeAllCheckboxHandler,
                        })}
                      >
                        {col.render(item)}
                      </div>
                    </div>
                  )
                )}
              </>
            </div>
          ))}
        </div>
      </div>

      {/* bottom elements */}
      {botSlot && (
        <div
          className={cn(
            'ex-table__bot flex p-5 justify-between mt-[-9px] border-t-[1px] border-gray-200',
            {}
          )}
        >
          {botSlot}
        </div>
      )}
    </div>
  );
};
