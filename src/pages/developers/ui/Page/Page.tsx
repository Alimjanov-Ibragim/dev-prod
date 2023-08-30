import cn from 'classnames';

import { DevelopersTableData } from 'widgets/developers';
import { AddDeveloper } from 'features/developers';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '/',
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
      <DevelopersTableData />
    </LayoutInner>
  );
};
