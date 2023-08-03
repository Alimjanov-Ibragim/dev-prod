import { useState } from 'react';

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Progress,
  Icon,
  Indicator,
  Input,
  AvatarGroup,
} from 'shared/ui';

export const LeadsPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked((prev: boolean) => !prev);

  return (
    <div
      className='flex justify-center flex-col items-center gap-2 w-1/2  ml-auto mr-auto'
      style={{
        textAlign: 'center',
      }}
    >
      <h1>Leads page</h1>
      <AvatarGroup
        moreLengthClassName='!bg-gray-100 !text-gray-800 hover:!bg-gray-500 hover:!text-white'
        moreLength={3}
        borderedClassName='border-2 border-solid border-gray-800'
        list={[
          {
            styleType: 'soft',
            color: 'green',
            shape: 'circular',
            imageSrc:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
          {
            status: 'icon',
            nameStatusIcon: 'building',
            classNameStatusIcon: 'bg-white fill-blue-500',
            styleType: 'solid',
            color: 'blue',
            shape: 'circular',
            imageSrc:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
          {
            styleType: 'image',
            color: 'green',
            shape: 'circular',
            imageSrc:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
          {
            styleType: 'solid',
            color: 'green',
            shape: 'circular',
            imageSrc:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
          {
            status: 'online',
            nameStatusIcon: 'building',
            classNameStatusIcon: 'bg-white fill-blue-500',
            styleType: 'image',
            color: 'blue',
            shape: 'circular',
            imageSrc:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
          {
            styleType: 'white',
            color: 'green',
            shape: 'circular',
            imageSrc:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
        ]}
      />
      <Avatar
        nameStatusIcon='brightness-high'
        classNameStatusIcon='bg-white fill-yellow-500'
        styleType='image'
        color='gray'
        shape='circular'
        status='icon'
        imageSrc='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
      />
      <Avatar
        textTitle='Mark Villiams'
        textBody='mark@site.com'
        nameStatusIcon='brightness-high'
        classNameStatusIcon='bg-white fill-yellow-500'
        styleType='solid'
        color='yellow'
        shape='circular'
        size='large'
        status='icon'
        imageSrc='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
      />
      <Checkbox
        onChange={handler}
        value={isChecked}
        // styleType='soft'
        // indeterminate
      >
        hello
      </Checkbox>
      <Input
        type='text'
        size='default'
        styleType='underline'
        // label='ibragim'
        iconName='search'
      />
      <Progress
        color='green'
        width={100}
        type='trailing-label-left'
        titleLabel='hellow'
        // successColor='bg-teal-500'
      />
      <Badge size='default' type='soft' indicator color='yellow'>
        badge
      </Badge>
      <Indicator />
      <Button
        size='default'
        // disabled
        typeStyle='solid'
        // color='light'
        leadingIcon={'check'}
        leadingIconColor='light'
        // badgeText={'2'}
        // badgeColor='bg-red-700'
      >
        btn
      </Button>

      <Icon
        size='default'
        icon='check'
        styleType='default'
        shape='circular'
        color='green'
      />
      <Icon
        // size='xs'
        icon='plus'
        styleType='soft'
        shape='circular'
        color='green'
      />
      <Icon
        size='xs'
        icon='download'
        styleType='soft'
        shape='circular'
        color='green'
      />
      <Icon
        size='small'
        icon='arrow-bar-left'
        styleType='soft'
        shape='circular'
        color='green'
      />
    </div>
  );
};
