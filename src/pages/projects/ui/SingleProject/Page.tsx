import cn from 'classnames';

import { tabsConstants } from 'pages/projects/config';
import {
  EditGeneralInfo,
  AddProjectSingle,
  AddProject,
  Upload,
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
            <div className={cn('flex items-center gap-[12px]')}>
              <Title text='Project name' />
              <Upload />
            </div>
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
