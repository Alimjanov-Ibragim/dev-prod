import { SoldUnits, ExporUnits } from 'features/reports';
import { LayoutInner, Title } from 'shared/ui';

export const ReportsPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <Title text='Reports' />
        </>
      }
    >
      <div className='flex items-center gap-[10px]'>
        <SoldUnits />
        <ExporUnits />
      </div>
    </LayoutInner>
  );
};
