import cn from 'classnames';

import { TableData } from 'widgets/deals';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Deals',
    link: '#',
  },
];

export const DealsPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Deals' />
          </div>
        </>
      }
    >
      <TableData />
    </LayoutInner>
  );
};
