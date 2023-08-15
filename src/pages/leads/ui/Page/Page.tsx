import cn from 'classnames';

import { TableData } from 'widgets/leads';
import { AddLead } from 'features/AddLead';
import { Breadcrumb, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Application',
    link: '#',
  },
];

export const LeadsPage = () => {
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
          <Title text='Leads' />
        </div>
        <AddLead />
      </div>
      <TableData />
    </div>
  );
};
