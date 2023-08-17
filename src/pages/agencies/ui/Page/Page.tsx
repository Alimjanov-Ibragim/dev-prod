import cn from 'classnames';

import { TableData } from 'widgets/agencies';
import { AddAgency } from 'features/AddAgency';
import { Breadcrumb, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Agencies',
    link: '#',
  },
];

export const AgenciesPage = () => {
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
          <Title text='Agencies' />
        </div>
        <AddAgency />
      </div>
      <TableData />
    </div>
  );
};
