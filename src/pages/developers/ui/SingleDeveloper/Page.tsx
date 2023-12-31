import cn from 'classnames';

import { tabsConstants } from 'pages/developers/config';
import { AddDeveloper } from 'features/developers';
import { EditGeneralInfo } from 'features/developers';
import { Breadcrumb, LayoutInner, Tabs, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Developers',
    link: '/developers',
  },
  {
    text: 'Developer name',
    link: '#',
  },
];

export const SingleDeveloper = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Developer name' />
          </div>
          <div className={cn('flex items-center gap-[12px]')}>
            <AddDeveloper />
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
