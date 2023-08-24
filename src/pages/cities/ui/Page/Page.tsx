import cn from 'classnames';

import { CitiesTableData } from 'widgets/cities';
import { AddCity } from 'features/cities';
import { Breadcrumb, LayoutInner, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Cities',
    link: '#',
  },
];

export const CitiesPage = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Cities' />
          </div>
          <AddCity />
        </>
      }
    >
      <CitiesTableData />
    </LayoutInner>
  );
};
