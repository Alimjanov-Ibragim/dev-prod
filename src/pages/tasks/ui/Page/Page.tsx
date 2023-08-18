import cn from 'classnames';

import { TableData } from 'widgets/tasks';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Tasks',
    link: '#',
  },
];

export const TasksPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Tasks' />
          </div>
        </>
      }
    >
      <TableData />
    </LayoutInner>
  );
};
