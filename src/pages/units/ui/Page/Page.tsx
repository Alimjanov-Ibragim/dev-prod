import cn from 'classnames';

import { UnitsTableData } from 'widgets/units';
import { AddUnit } from 'features/units';
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
      <UnitsTableData />
    </LayoutInner>
  );
};
