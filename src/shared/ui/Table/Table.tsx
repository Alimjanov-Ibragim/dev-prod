import cn from 'classnames';

import { Checkbox } from '../Checkbox';

type TStyleTypeTable =
  | 'basic'
  | 'striped-rows'
  | 'highlighted'
  | 'bordered'
  | 'thead-divided';

const CHECKBOX_WIDTH = '56';

type TListHeadTableItem = {
  text: string;
  width?: string;
  maxWidth?: string;
};
type TListHeadTable = TListHeadTableItem[];

type TListTableItem = {
  text: string;
  link?: string;
  /** Worked with style type "highlighted", it's for set a bg color. */
  className?: string;
};
type TListTableRow = {
  items: TListTableItem[];
  checked: boolean;
};
type TListTable = TListTableRow[];

type Props = {
  /**  */
  rounded?: boolean;
  withShadow?: boolean;
  theadBgClass?: string;
  headless?: boolean;
  onChangeAllCheckboxHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckboxHandler?: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  checkedAll?: boolean;
  actionHandlerBtn?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ind: number
  ) => void;
  /** Above right place of the table as ReactNode */
  topSlot?: React.ReactNode;
  /** Below left place of the table as ReactNode */
  botSlot?: React.ReactNode;
  /** Style type of the table: "basic" | "striped-rows" | "highlighted" | "bordered" | "thead-divided" */
  styleType?: TStyleTypeTable;
  /** Array of list of content. Example: list["row"]["item"].text */
  list: TListTable;
  /** Array of list head items. listHead["item"].text */
  listHead?: TListHeadTable;
  /** Classname for wrapper of table */
  wrapClassTable?: string;
};

export const Table = ({
  rounded = false,
  withShadow = false,
  headless = false,
  topSlot,
  botSlot,
  styleType = 'basic',
  list,
  listHead,
  wrapClassTable,
  theadBgClass,
  onChangeCheckboxHandler,
  onChangeAllCheckboxHandler,
  checkedAll,
  actionHandlerBtn,
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
              flex: onChangeAllCheckboxHandler,
              [theadBgClass as string]: theadBgClass,
            })}
          >
            {onChangeAllCheckboxHandler && (
              <div
                className={cn('py-4 h-[auto] pr-5', {
                  'border-r-[1px] border-solid border-gray-200':
                    styleType === 'thead-divided',
                })}
              >
                <Checkbox
                  onChange={onChangeAllCheckboxHandler}
                  checked={checkedAll || false}
                  indeterminate
                />
              </div>
            )}
            <div
              className={cn(
                'flex-1 flex flex-wrap ml-[-20px] text-xs text-left font-medium text-gray-500 uppercase'
              )}
            >
              {listHead &&
                listHead.map((item, index) => (
                  <div
                    key={index}
                    className={cn('pl-5', {
                      [`${
                        item.width === 'auto' ? 'flex-[0_0_auto]' : item.width
                      }`]: item.width,
                    })}
                    style={{ maxWidth: item.maxWidth }}
                  >
                    <div
                      className={cn('py-4 pr-5', {
                        'pl-5': index === 0 && onChangeAllCheckboxHandler,
                        'border-r-[1px] border-solid border-gray-200':
                          styleType === 'thead-divided' &&
                          index !== listHead.length - 1,
                      })}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        <div
          className={cn('ex-table__content text-sm font-medium text-gray-800')}
        >
          {list.map((item, index) => (
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
                flex: onChangeAllCheckboxHandler,
                'bg-gray-100': styleType === 'striped-rows' && index % 2 !== 0, // bg color
              })}
            >
              {onChangeAllCheckboxHandler && (
                <div className={cn('py-4 h-[auto] pr-5', {})}>
                  {onChangeCheckboxHandler && (
                    <Checkbox
                      onChange={(e) => onChangeCheckboxHandler(e, index)}
                      checked={item.checked}
                      forUniqueItem={index + 1}
                    />
                  )}
                </div>
              )}
              <div
                className={cn(
                  'ex-table__row flex-1 flex flex-wrap ml-[-20px] text-left'
                )}
              >
                {item.items.length > 0 &&
                  item.items.map((innerItem, innerIndex) =>
                    innerItem.link ? (
                      <a
                        onClick={(e) =>
                          actionHandlerBtn ? actionHandlerBtn(e, index) : null
                        }
                        href={innerItem.link}
                        className={cn('pl-5 font-semibold text-blue-500', {
                          [`${innerItem.className}`]:
                            innerItem.className && styleType === 'highlighted',
                          [listHead
                            ? `${
                                listHead[innerIndex].width === 'auto'
                                  ? 'flex-[0_0_auto]'
                                  : listHead[innerIndex].width
                              }`
                            : 'flex-[0_0_auto]']:
                            listHead && listHead[innerIndex].width,
                        })}
                        style={{
                          maxWidth: listHead && listHead[innerIndex].maxWidth,
                        }}
                        key={innerIndex}
                      >
                        <div
                          className={cn('py-4 pr-5', {
                            'pl-5':
                              innerIndex === 0 && onChangeAllCheckboxHandler,
                          })}
                        >
                          {innerItem.text}
                        </div>
                      </a>
                    ) : (
                      <div
                        className={cn('pl-5', {
                          [`${innerItem.className}`]:
                            innerItem.className && styleType === 'highlighted',
                          [listHead
                            ? `${
                                listHead[innerIndex].width === 'auto'
                                  ? 'flex-[0_0_auto]'
                                  : listHead[innerIndex].width
                              }`
                            : 'flex-[0_0_auto]']:
                            listHead && listHead[innerIndex].width,
                        })}
                        style={{
                          maxWidth: listHead && listHead[innerIndex].maxWidth,
                        }}
                        key={innerIndex}
                      >
                        <div
                          className={cn('py-4 pr-5', {
                            'pl-5':
                              innerIndex === 0 && onChangeAllCheckboxHandler,
                          })}
                        >
                          {innerItem.text}
                        </div>
                      </div>
                    )
                  )}
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
