import cn from 'classnames';

import { TableData } from 'widgets/cities';
import { AddCity } from 'features/AddCity';
import { Breadcrumb, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Cities',
    link: '#',
  },
];

export const CitiesPage = () => {
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
          <Title text='Cities' />
        </div>
        <AddCity />
      </div>
      <TableData />
    </div>
  );
};
