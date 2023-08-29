import cn from 'classnames';

import { tabsConstants } from 'pages/deals/config';
import { DealsEditParticipants, DealsEditGeneralInfo } from 'features/deals';
import { DealsStatuses } from 'entities/deals';
import { Breadcrumb, LayoutInner, Tabs, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Deals',
    link: '/deals',
  },
  {
    text: 'Deal name',
    link: '#',
  },
];

export const SingleDeals = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px] w-full')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Deal name' />
            <div className={cn('mt-[10px] w-full')}>
              <DealsStatuses />
            </div>
          </div>
        </>
      }
      sidebarSlot={
        <>
          <DealsEditGeneralInfo />
          <DealsEditParticipants />
        </>
      }
    >
      <Tabs list={tabsConstants()} typeStyle='bordered' />
    </LayoutInner>
  );
};
