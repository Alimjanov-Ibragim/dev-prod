import cn from 'classnames';
import { ReactNode } from 'react';

type Props = {
  /** Type head title: Ex: 'Broker Share', 'Agent Share', 'Payment for Property' */
  typeHeadTitle: string;
  /** Source person text. Person name of the left side. */
  sourcePerson: string;
  /** Source role text. Person role of the left side. */
  sourceRole: string;
  /** Destination person text. Destination name of the right side. */
  destinationPerson: string;
  /** Destination role text. Destination role of the right side. */
  destinationRole: string;
  /** Main price on the center of block. */
  mainPriceOnTheCenter: string;
  /** Paid line percent, that green line. */
  paidLinePercent: string;
  /** Invoiced line percent, that yellow line. */
  invoicedLinePercent: string;
  /** Left price (paid) */
  leftPrice: string;
  /** Center price (invoiced) */
  centerPrice: string;
  /** Right price (outstanding) */
  rightPrice: string;
  /** Paid btn */
  leftBtn: ReactNode;
  /** Invoiced btn */
  rightBtn: ReactNode;
};

export const FinanceCard = ({
  typeHeadTitle,
  sourcePerson,
  sourceRole,
  destinationPerson,
  destinationRole,
  mainPriceOnTheCenter,
  paidLinePercent,
  invoicedLinePercent,
  leftPrice,
  centerPrice,
  rightPrice,
  leftBtn,
  rightBtn,
}: Props) => {
  return (
    <div className={cn('')}>
      {/* type title */}
      <div
        className={cn(
          'py-[16px] px-[20px] border border-slate-200 rounded-t-md text-base font-semibold text-slate-800'
        )}
      >
        {typeHeadTitle}
      </div>

      <div
        className={cn(
          'flex flex-col gap-[20px] w-full p-[20px] border-b border-l border-r border-slate-200 rounded-b-md'
        )}
      >
        {/* source destination section */}
        <div
          className={cn(
            'flex justify-between items-center py-[16px] gap-[12px]'
          )}
        >
          {/* sourse */}
          <div className={cn('text-xs text-slate-600')}>
            <div className={cn('text-base font-semibold text-slate-800')}>
              {sourcePerson}
            </div>
            {sourceRole}
          </div>
          {/* left line */}
          <div className={cn('relative flex items-center flex-1')}>
            <div
              className={cn(
                'h-[1.5px] bg-slate-300 w-full rounded-[3px]',
                'before:absolute before:content-[""] before:w-[8px] before:h-[8px] before:rounded-full before:bg-slate-300 before:top-[-3.5px]'
              )}
            ></div>
          </div>
          {/* centered price */}
          <div
            className={cn(
              'bg-slate-50 rounded p-[12px] text-lg font-semibold text-slate-600 uppercase'
            )}
          >
            {mainPriceOnTheCenter}
          </div>
          {/* right line */}
          <div className={cn('relative flex items-center flex-1')}>
            <div
              className={cn(
                'h-[1.5px] bg-slate-300 w-full rounded-[3px]',
                'before:absolute before:content-[""] before:right-[0] before:h-[1.5px] before:w-[6px] before:rotate-45 before:top-[-2px] before:bg-slate-300 before:rounded-l-[3px]',
                'after:absolute after:content-[""] after:right-[0] after:h-[1.5px] after:w-[6px] after:rotate-[-45deg] after:top-[2px] after:bg-slate-300 after:rounded-l-[3px]'
              )}
            ></div>
          </div>
          {/* destination */}
          <div className={cn('text-xs text-slate-600')}>
            <div className={cn('text-base font-semibold text-slate-800')}>
              {destinationPerson}
            </div>
            {destinationRole}
          </div>
        </div>
        {/* overall progress */}
        <div
          className={cn(
            'relative flex items-center rounded-[10px] border-[6px] border-slate-300'
          )}
        >
          {/* green line */}
          <div
            className={cn(
              'absolute z-[2] rounded-[10px] border-[6px] border-green-400 left-[-6px]'
            )}
            style={{
              width: paidLinePercent,
            }}
          ></div>
          {/* yellow line */}
          <div
            className={cn(
              'absolute z-[1] rounded-[10px] border-[6px] border-amber-400 left-[-6px]'
            )}
            style={{
              width: invoicedLinePercent,
            }}
          ></div>
        </div>
        {/* price info */}
        <div
          className={cn(
            'flex justify-between py-[24px] px-[48px] bg-slate-50 rounded'
          )}
        >
          {/* left side price */}
          <div className={cn('flex flex-col items-center')}>
            <div
              className={cn(
                'mb-[4px] p-[8px] text-sm font-semibold text-slate-600 uppercase'
              )}
            >
              {leftPrice}
            </div>
            <div
              className={cn(
                'flex items-center text-xs font-medium text-slate-600'
              )}
            >
              <div
                className={cn(
                  'w-[14px] h-[8px] mr-[8px] rounded-md bg-green-400'
                )}
              ></div>
              Paid
            </div>
            {leftBtn}
          </div>
          {/* center side price */}
          <div className={cn('flex flex-col items-center')}>
            <div
              className={cn(
                'mb-[4px] p-[8px] text-sm font-semibold text-slate-600 uppercase'
              )}
            >
              {centerPrice}
            </div>
            <div
              className={cn(
                'flex items-center text-xs font-medium text-slate-600'
              )}
            >
              <div
                className={cn(
                  'w-[14px] h-[8px] mr-[8px] rounded-md bg-amber-400'
                )}
              ></div>
              Invoiced
            </div>
            {rightBtn}
          </div>
          {/* right side price */}
          <div className={cn('flex flex-col items-center')}>
            <div
              className={cn(
                'mb-[4px] p-[8px] text-sm font-semibold text-slate-600 uppercase'
              )}
            >
              {rightPrice}
            </div>
            <div
              className={cn(
                'flex items-center text-xs font-medium text-slate-600'
              )}
            >
              <div
                className={cn(
                  'w-[14px] h-[8px] mr-[8px] rounded-md bg-slate-300'
                )}
              ></div>
              Outstanding
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
