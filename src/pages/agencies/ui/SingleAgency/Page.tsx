import cn from 'classnames';

import { tabsConstants } from 'pages/agencies/config';
import { AddAgency, EditContacts } from 'features/agencies';
import { EditGeneralInfo } from 'features/agencies';
import { Breadcrumb, LayoutInner, Tabs, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Agency',
    link: '/agencies',
  },
  {
    text: 'Agency name',
    link: '#',
  },
];

export const SingleAgency = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Agency name' />
          </div>
          <div className={cn('flex items-center gap-[12px]')}>
            <AddAgency />
          </div>
        </>
      }
      sidebarSlot={
        <>
          <EditGeneralInfo />
          <EditContacts />
        </>
      }
    >
      <Tabs list={tabsConstants()} typeStyle='bordered' />
    </LayoutInner>
  );
};
