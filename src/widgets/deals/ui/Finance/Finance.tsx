import cn from 'classnames';
import { CreateFinanceBtns } from 'features/deals/ui';
import { Button } from 'shared/ui';

export const Finance = () => {
  return (
    <div className={cn('flex flex-col gap-[24px]')}>
      <div className={cn('flex items-center justify-between gap-[8px]')}>
        <div className={cn('text-lg font-semibold text-slate-800')}>Debit</div>
        <Button
          typeStyle='soft'
          leadingIcon='plus'
          leadingIconColor='blue'
          className='hover:!bg-blue-50 hover:!text-blue-500'
        >
          Add
        </Button>
      </div>
      <CreateFinanceBtns />
      <div className={cn('flex items-center justify-between gap-[8px]')}>
        <div className={cn('text-lg font-semibold text-slate-800')}>Credit</div>
        <Button
          typeStyle='soft'
          leadingIcon='plus'
          leadingIconColor='blue'
          className='hover:!bg-blue-50 hover:!text-blue-500'
        >
          Add
        </Button>
      </div>
      <CreateFinanceBtns />
    </div>
  );
};
