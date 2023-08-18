import cn from 'classnames';

import { TableData } from 'widgets/developers';
import { AddDeveloper } from 'features/AddDeveloper';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Developers',
    link: '#',
  },
];

export const DevelopersPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Developers' />
          </div>
          <AddDeveloper />
        </>
      }
    >
      <TableData />
    </LayoutInner>
  );
};
