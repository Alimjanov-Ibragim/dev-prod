import cn from 'classnames';

import { TableData } from 'widgets/deals';
import { Breadcrumb, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Deals',
    link: '#',
  },
];

export const DealsPage = () => {
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
          <Title text='Deals' />
        </div>
      </div>
      <TableData />
    </div>
  );
};
