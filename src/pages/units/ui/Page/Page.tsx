import cn from 'classnames';

import { TableData } from 'widgets/units';
import { AddUnit } from 'features/AddUnit';
import { Breadcrumb, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Units',
    link: '#',
  },
];

export const UnitsPage = () => {
  return (
    <div
      className='grid gap-[24px]'
      style={{
        textAlign: 'center',
      }}
    >
      <div className='flex justify-between gap-[12px]'>
        <div className={cn('grid gap-[8px]')}>
          <Breadcrumb list={LIST_BREADCRUMB} />
          <Title text='Units' />
        </div>
        <AddUnit />
      </div>
      <TableData />
    </div>
  );
};