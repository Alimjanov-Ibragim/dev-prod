import cn from 'classnames';

type TStyleTypeTable =
  | 'basic'
  | 'striped-rows'
  | 'highlighted'
  | 'bordered'
  | 'thead-divided';

type Props = {
  /**  */
  rounded?: boolean;
  withShadow?: boolean;
  theadBgClass?: string;
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
        className={cn('ex-table__table overflow-hidden', {
          'rounded-tl-md rounded-tr-md': rounded && !topSlot,
        })}
      >
        {headless === false && (
          <div
            className={cn('ex-table__head border-b-[1px] border-solid px-5', {
              'border-gray-200':
                styleType === 'basic' ||
                styleType === 'striped-rows' ||
                styleType === 'bordered', // border bottom color
              'border-t-[1px] border-solid border-gray-200': topSlot,
              // flex: onChangeAllCheckboxHandler,
              [theadBgClass as string]: theadBgClass,
            })}
          >
            <div
              className={cn(
                'flex-1 flex flex-wrap ml-[-20px] text-xs text-left font-medium text-gray-500 uppercase'
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
                    className={cn('pl-[20px] flex items-center', {
                      [`${headerItem.width}`]: headerItem.width,
                      [`${headerItem.maxWidth}`]: headerItem.maxWidth,
                    })}
                  >
                    <div
                      className={cn('py-4 pr-5 text-center w-full', {
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
        <div
          className={cn('ex-table__content text-sm font-medium text-gray-800')}
        >
          {list.map((item: any, index: number) => (
            <div
              key={index}
              className={cn('border-b-[1px] border-solid px-5', {
                'border-gray-200':
                  styleType === 'basic' ||
                  styleType === 'highlighted' ||
                  styleType === 'bordered', // border bottom color
                '!border-b-[0px]':
                  styleType === 'striped-rows' ||
                  ((styleType === 'bordered' ||
                    styleType === 'thead-divided') &&
                    index === list.length - 1 &&
                    !botSlot), // border bottom none
                // flex: onChangeAllCheckboxHandler,
                'bg-gray-100': styleType === 'striped-rows' && index % 2 !== 0, // bg color
              })}
            >
              <div
                className={cn(
                  'ex-table__row flex-1 flex flex-wrap ml-[-20px] text-left'
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
                        className={cn('pl-[20px] flex items-center', {
                          [`${col.maxWidth}`]: col.maxWidth,
                          [`${col.width}`]: col.width,
                        })}
                      >
                        <div
                          className={cn('py-4 pr-5 text-center w-full', {
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
            </div>
          ))}
        </div>
      </div>

      {/* bottom elements */}
      {botSlot && (
        <div className={cn('ex-table__bot flex p-5 justify-between', {})}>
          {botSlot}
        </div>
      )}
    </div>
  );
};
