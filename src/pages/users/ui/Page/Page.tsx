import cn from 'classnames';

import { UsersTableData } from 'widgets/users';
import { AddUser } from 'features/AddUser';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Users',
    link: '#',
  },
];

export const UsersPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Users' />
          </div>
          <AddUser />
        </>
      }
    >
      <UsersTableData />
    </LayoutInner>
  );
};
