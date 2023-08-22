import { DealsTableData } from 'widgets/deals';
import { LeadsTableData } from 'widgets/leads';
import { FilesGallery } from 'widgets/units';
import { TTabsItem } from 'shared/lib';

export const tabsConstants = (): TTabsItem[] => {
  return [
    {
      // badgeText: '2',
      // icon: 'printer',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Files',
      renderContent: () => {
        return (
          <>
            <FilesGallery />
          </>
        );
      },
    },
    {
      // icon: 'houses',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Leads',
      renderContent: () => {
        return <LeadsTableData />;
      },
    },
    {
      // icon: 'houses',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Deals',
      renderContent: () => {
        return <DealsTableData />;
      },
    },
  ];
};
