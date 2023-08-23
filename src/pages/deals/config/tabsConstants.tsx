import {
  DealsFilesGallery,
  DealsPaymentPlanTableData,
  DealsTasksTableData,
} from 'widgets/deals';
import { TTabsItem } from 'shared/lib';

export const tabsConstants = (): TTabsItem[] => {
  return [
    {
      // badgeText: '2',
      // icon: 'printer',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Payment Plan',
      renderContent: () => {
        return (
          <>
            <DealsPaymentPlanTableData />
          </>
        );
      },
    },
    {
      // icon: 'houses',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Tasks',
      renderContent: () => {
        return <DealsTasksTableData />;
      },
    },
    {
      // icon: 'houses',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Files',
      renderContent: () => {
        return <DealsFilesGallery />;
      },
    },
  ];
};
