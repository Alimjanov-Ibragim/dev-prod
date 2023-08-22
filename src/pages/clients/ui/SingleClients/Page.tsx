import cn from 'classnames';

import { tabsConstants } from 'pages/clients/config';
import {
  AddClient,
  ClientsEditContacts,
  ClientsEditGeneralInfo,
} from 'features/clients';
import { Breadcrumb, LayoutInner, Tabs, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Clients',
    link: '/clients',
  },
  {
    text: 'Client name',
    link: '#',
  },
];

export const SingleClients = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Client name' />
          </div>
          <div className={cn('flex items-center gap-[12px]')}>
            <AddClient />
          </div>
        </>
      }
      sidebarSlot={
        <>
          <ClientsEditGeneralInfo />
          <ClientsEditContacts />
        </>
      }
    >
      <Tabs list={tabsConstants()} typeStyle='bordered' />
    </LayoutInner>
  );
};
