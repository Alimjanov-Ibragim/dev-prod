import { DevelopersFilesGallery } from 'widgets/developers';
import { ProjectsTableData } from 'widgets/projects';
import { TTabsItem } from 'shared/lib';

export const tabsConstants = (): TTabsItem[] => {
  return [
    {
      // badgeText: '2',
      // icon: 'printer',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Projects',
      renderContent: () => {
        return (
          <>
            <ProjectsTableData />
          </>
        );
      },
    },
    {
      // icon: 'houses',
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
      title: 'Files',
      renderContent: () => {
        return <DevelopersFilesGallery />;
      },
    },
  ];
};
