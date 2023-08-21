import cn from 'classnames';

import { tabsConstants } from 'pages/projects/config/tabsConstants';
import {
  EditGeneralInfo,
  AddProjectSingle,
  AddProject,
} from 'features/projects';
import { Breadcrumb, LayoutInner, Tabs, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Projects',
    link: '/projects',
  },
  {
    text: 'Project name',
    link: '#',
  },
];

export const SingleProject = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Project name' />
          </div>
          <div className={cn('flex items-center gap-[12px]')}>
            <AddProjectSingle />
            <AddProject />
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
