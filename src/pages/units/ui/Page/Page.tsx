import cn from 'classnames';

import { TableData } from 'widgets/units';
import { AddUnit } from 'features/AddUnit';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Units',
    link: '#',
  },
];

export const UnitsPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Units' />
          </div>
          <AddUnit />
        </>
      }
    >
      <TableData />
    </LayoutInner>
  );
};
