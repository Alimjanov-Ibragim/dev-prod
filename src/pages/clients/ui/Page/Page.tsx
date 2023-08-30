import cn from 'classnames';

import { ClientsTableData } from 'widgets/clients';
import { AddClient } from 'features/clients';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Clients',
    link: '#',
  },
];

export const ClientsPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Clients' />
          </div>
          <AddClient />
        </>
      }
    >
      <ClientsTableData />
    </LayoutInner>
  );
};
