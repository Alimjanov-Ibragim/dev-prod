import cn from 'classnames';

import { DealsTableData } from 'widgets/deals';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '/',
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
      <DealsTableData />
    </LayoutInner>
  );
};
