import cn from 'classnames';

import { tabsConstants } from 'pages/users/config';
import { EditContacts } from 'features/users';
import { AddUser } from 'features/users';
import { Breadcrumb, LayoutInner, Tabs, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Users',
    link: '/users',
  },
  {
    text: 'User name',
    link: '#',
  },
];

export const SingleUser = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='User name' />
          </div>
          <div className={cn('flex items-center gap-[12px]')}>
            <AddUser />
          </div>
        </>
      }
      sidebarSlot={
        <>
          <EditContacts />
        </>
      }
    >
      <Tabs list={tabsConstants()} typeStyle='bordered' />
    </LayoutInner>
  );
};
