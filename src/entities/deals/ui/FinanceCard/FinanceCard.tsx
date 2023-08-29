import cn from 'classnames';
import { Button, Icon } from 'shared/ui';

type Props = {
  typeHeadTitle: string;
  sourcePerson: string;
  sourceRole: string;
  destinationPerson: string;
  destinationRole: string;
};

export const FinanceCard = ({
  typeHeadTitle,
  sourcePerson,
  sourceRole,
  destinationPerson,
  destinationRole,
}: Props) => {
  return (
    <div className={cn('')}>
      {/* type title */}
      <div
        className={cn(
          'py-[16px] px-[20px] border border-slate-200 rounded-t-md'
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
          <div className={cn('flex items-center')}>
            <Icon
              icon='line-circle-left'
              classNameIcon='w-full !w-[236px]'
              className='!p-[0px]'
            />
          </div>
          {/* centered price */}
          <div className={cn('text-lg font-semibold text-slate-600 uppercase')}>
            AED 100,000
          </div>
          {/* right line */}
          <div className={cn('flex items-center')}>
            <Icon
              icon='line-arrow-right'
              classNameIcon='w-full !w-[232px]'
              className='!p-[0px]'
            />
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
              width: '10%',
            }}
          ></div>
          {/* yellow line */}
          <div
            className={cn(
              'absolute z-[1] rounded-[10px] border-[6px] border-amber-400 left-[-6px]'
            )}
            style={{
              width: '50%',
            }}
          ></div>
        </div>
        {/* price info */}
        <div
          className={cn(
            'flex justify-between items-center py-[24px] px-[48px] bg-slate-50 rounded'
          )}
        >
          {/* left side price */}
          <div className={cn('flex flex-col items-center')}>
            <div
              className={cn(
                'mb-[4px] p-[8px] text-sm font-semibold text-slate-600 uppercase'
              )}
            >
              AED 185,000
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
            <Button
              leadingIcon='plus'
              leadingIconColor='light'
              typeStyle='link'
            >
              Create
            </Button>
          </div>
          {/* left side price */}
          <div className={cn('flex flex-col items-center')}>
            <div
              className={cn(
                'mb-[4px] p-[8px] text-sm font-semibold text-slate-600 uppercase'
              )}
            >
              AED 500,000
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
              Paid
            </div>
            <Button
              leadingIcon='plus'
              leadingIconColor='light'
              typeStyle='link'
            >
              Create
            </Button>
          </div>
          {/* right side price */}
          <div className={cn('flex flex-col items-center')}>
            <div
              className={cn(
                'mb-[4px] p-[8px] text-sm font-semibold text-slate-600 uppercase'
              )}
            >
              AED 200,000
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
