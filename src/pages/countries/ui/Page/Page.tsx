import cn from 'classnames';

import { ContriesTableData } from 'widgets/countries';
import { AddCountry } from 'features/AddCountry';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Countries',
    link: '#',
  },
];

export const CountriesPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Countries' />
          </div>
          <AddCountry />
        </>
      }
    >
      <ContriesTableData />
    </LayoutInner>
  );
};
