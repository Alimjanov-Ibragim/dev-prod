import cn from 'classnames';

import { AgenciesTableData } from 'widgets/agencies';
import { AddAgency } from 'features/agencies/ui/AddAgency';
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
      <AgenciesTableData />
    </LayoutInner>
  );
};
