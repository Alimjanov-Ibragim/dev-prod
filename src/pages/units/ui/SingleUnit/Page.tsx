import cn from 'classnames';

import { tabsConstants } from 'pages/units/config';
import { AddUnit, EditGeneralInfo } from 'features/units';
import { Breadcrumb, LayoutInner, Tabs, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Units',
    link: '/units',
  },
  {
    text: 'Unit name',
    link: '#',
  },
];

export const SingleUnit = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Unit name' />
          </div>
          <div className={cn('flex items-center gap-[12px]')}>
            <AddUnit />
          </div>
        </>
      }
      sidebarSlot={
        <>
          <EditGeneralInfo />
        </>
      }
    >
      <Tabs list={tabsConstants()} typeStyle='bordered' />
    </LayoutInner>
  );
};
