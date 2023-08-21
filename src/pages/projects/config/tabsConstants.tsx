import { PaymentPlanTableData } from 'widgets/projects';
import { TableData as UnitsTableData } from 'widgets/units';
import { TTabsItem } from 'shared/lib';

export const tabsConstants = (): TTabsItem[] => {
  return [
    {
      badgeText: '2',
      icon: 'printer',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Payment Plan',
      renderContent: () => {
        return (
          <>
            <PaymentPlanTableData />
          </>
        );
      },
    },
    {
      icon: 'houses',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Units',
      renderContent: () => {
        return <UnitsTableData />;
      },
    },
    {
      icon: 'people',
      disabled: true,
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Overview',
      renderContent: () => {
        return <span>content 3</span>;
      },
    },
  ];
};
