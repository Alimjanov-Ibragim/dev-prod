import cn from 'classnames';

import { TableData } from 'widgets/agencies';
import { AddAgency } from 'features/AddAgency';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Agencies',
    link: '#',
  },
];

export const AgenciesPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Agencies' />
          </div>
          <AddAgency />
        </>
      }
    >
      <TableData />
    </LayoutInner>
  );
};
