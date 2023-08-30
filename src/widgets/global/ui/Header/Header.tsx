import cn from 'classnames';
import { Search } from 'features/global';
import { Avatar } from 'shared/ui';

export const Header = () => {
  return (
    <div className={cn('flex items-center justify-between py-2 px-8 gap-1')}>
      <Search />
      <Avatar
        classNameStatusIcon='bg-white fill-yellow-500'
        styleType='image'
        color='gray'
        shape='circular'
        status='online'
        imageSrc='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
      />
    </div>
  );
};
