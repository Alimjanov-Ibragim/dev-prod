import cn from 'classnames';

import { TableData } from 'widgets/developers';
import { AddDeveloper } from 'features/AddDeveloper';
import { Breadcrumb, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Developers',
    link: '#',
  },
];

export const DevelopersPage = () => {
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
          <Title text='Developers' />
        </div>
        <AddDeveloper />
      </div>
      <TableData />
    </div>
  );
};
