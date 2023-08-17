import cn from 'classnames';

import { TableData } from 'widgets/projects';
import { AddProject } from 'features/AddProject';
import { Breadcrumb, Title } from 'shared/ui';

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
    <div
      className='grid gap-[24px]'
      style={{
        textAlign: 'center',
      }}
    >
      <div className='flex justify-between gap-[12px]'>
        <div className={cn('grid gap-[8px]')}>
          <Breadcrumb list={LIST_BREADCRUMB} />
          <Title text='Projects' />
        </div>
        <AddProject />
      </div>
      <TableData />
    </div>
  );
};
