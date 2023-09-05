import cn from 'classnames';

import { tabsConstants } from 'pages/units/config';
import { AddUnit, EditGeneralInfo, Generate, StatusUnit } from 'features/units';
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
            <div className={cn('flex items-center gap-[12px]')}>
              <Title text='Unit name' />
              <StatusUnit />
            </div>
          </div>
          <div className={cn('flex items-center gap-[12px]')}>
            <Generate />
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
