import { ProjectsPaymentPlanTableData } from 'widgets/projects';
import { UnitsTableData } from 'widgets/units';
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
            <ProjectsPaymentPlanTableData />
          </>
        );
      },
    },
    {
      // icon: 'houses',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Units',
      renderContent: () => {
        return <UnitsTableData />;
      },
    },
  ];
};
