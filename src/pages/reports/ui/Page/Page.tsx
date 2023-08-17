import cn from 'classnames';
import { SoldUnits, ExporUnits } from 'features/reports';
import { Title } from 'shared/ui';

export const ReportsPage = () => {
  return (
    <div
      className='flex flex-col gap-[10px]'
      style={{
        textAlign: 'center',
      }}
    >
      <Title text='Reports' />
      <div className='flex items-center gap-[10px]'>
        <SoldUnits />
        <ExporUnits />
      </div>
    </div>
  );
};
