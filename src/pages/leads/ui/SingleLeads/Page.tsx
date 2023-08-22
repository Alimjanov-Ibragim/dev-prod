import cn from 'classnames';

import { tabsConstants } from 'pages/leads/config';
import { AddLead, EditParticipants, EditGeneralInfo } from 'features/leads';
import { Breadcrumb, LayoutInner, Tabs, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Leads',
    link: '/leads',
  },
  {
    text: 'Lead name',
    link: '#',
  },
];

export const SingleLeads = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Lead name' />
          </div>
          <div className={cn('flex items-center gap-[12px]')}>
            <AddLead />
          </div>
        </>
      }
      sidebarSlot={
        <>
          <EditGeneralInfo />
          <EditParticipants />
        </>
      }
    >
      <Tabs list={tabsConstants()} typeStyle='bordered' />
    </LayoutInner>
  );
};
