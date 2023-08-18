import cn from 'classnames';

import { TableData } from 'widgets/companies';
import { AddCompany } from 'features/AddCompany';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Companies',
    link: '#',
  },
];

export const CompaniesPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Companies' />
          </div>
          <AddCompany />
        </>
      }
    >
      <TableData />
    </LayoutInner>
  );
};
