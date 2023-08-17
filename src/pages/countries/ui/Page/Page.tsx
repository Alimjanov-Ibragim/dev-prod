import cn from 'classnames';

import { TableData } from 'widgets/countries';
import { AddCountry } from 'features/AddCountry';
import { Breadcrumb, Title } from 'shared/ui';

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
    <div
      className='grid gap-[24px]'
      style={{
        textAlign: 'center',
      }}
    >
      <div className='flex justify-between gap-[12px]'>
        <div className={cn('grid gap-[8px]')}>
          <Breadcrumb list={LIST_BREADCRUMB} />
          <Title text='Countries' />
        </div>
        <AddCountry />
      </div>
      <TableData />
    </div>
  );
};
