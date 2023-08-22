import cn from 'classnames';

import { tabsConstants } from 'pages/companies/config';
import {
  AddCompany,
  CompaniesEditContacts,
  CompaniesEditGeneralInfo,
} from 'features/companies';
import { Breadcrumb, LayoutInner, Tabs, Title } from 'shared/ui';

const LIST_BREADCRUMB = [
  {
    text: 'Companies',
    link: '/companies',
  },
  {
    text: 'Company name',
    link: '#',
  },
];

export const SingleCompanies = () => {
  return (
    <LayoutInner
      topSlot={
        <>
          <div className={cn('grid gap-[8px]')}>
            <Breadcrumb list={LIST_BREADCRUMB} />
            <Title text='Company name' />
          </div>
          <div className={cn('flex items-center gap-[12px]')}>
            <AddCompany />
          </div>
        </>
      }
      sidebarSlot={
        <>
          <CompaniesEditGeneralInfo />
          <CompaniesEditContacts />
        </>
      }
    >
      <Tabs list={tabsConstants()} typeStyle='bordered' />
    </LayoutInner>
  );
};
