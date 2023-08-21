import cn from 'classnames';

import { TableData } from 'widgets/projects';
import { AddProject } from 'features/projects/ui/AddProject';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Projects',
    link: '#',
  },
];

export const ProjectsPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Projects' />
          </div>
          <AddProject />
        </>
      }
    >
      <TableData />
    </LayoutInner>
  );
};
