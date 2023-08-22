import cn from 'classnames';

import { LeadsTableData } from 'widgets/leads';
import { AddLead } from 'features/AddLead';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Leads',
    link: '#',
  },
];

export const LeadsPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Leads' />
          </div>
          <AddLead />
        </>
      }
    >
      <LeadsTableData />
    </LayoutInner>
  );
};
