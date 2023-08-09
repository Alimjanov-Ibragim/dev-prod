import { useState } from 'react';

import { GetIcon } from 'shared/lib';
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
  Table,
  Pagination,
  Datepicker,
} from 'shared/ui';
import { data } from './data';

export const LeadsPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked((prev: boolean) => !prev);

  // table checkbox check
  const [list, setList] = useState(data || []);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const tableHandler = (
    _: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const isTrueAll: boolean[] = [];
    const tempList = list.map((item, ind) => {
      if (ind === index) {
        isTrueAll.push(!item.checked);
        return Object.assign(
          {},
          {
            ...item,
            checked: !item.checked,
          }
        );
      } else {
        isTrueAll.push(item.checked);
        return item;
      }
    });
    setList(tempList);
    if (!isTrueAll.includes(false)) {
      setIsCheckedAll(true);
    }
    if (isTrueAll.includes(false)) {
      setIsCheckedAll(false);
    }
  };
  const tableAllHandler = () => {
    const temp = list.map((item) =>
      Object.assign(
        {},
        {
          ...item,
          checked: isCheckedAll ? false : true,
        }
      )
    );
    setIsCheckedAll(!isCheckedAll);
    setList(temp);
  };
  const actionHandlerBtn = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ind: number
  ) => {
    e.preventDefault();
    console.log('ind: ', ind);
  };

  //handle Page Change
  const handlePageChange = (event: { selected: number }) => {
    console.log('Current event: ', event);
  };
  const handleTablePageChange = (event: { selected: number }) => {
    console.log('Current event: ', event);
  };

  return (
    <div
      className='flex justify-center flex-col items-center gap-2 w-1/2  ml-auto mr-auto'
      style={{
        textAlign: 'center',
      }}
    >
      <h1>Leads page</h1>
      <Datepicker />
      <Pagination
        // previousLabel={<GetIcon name='chevron-left' width='16' height='16' />}
        // nextLabel={<GetIcon name='chevron-right' width='16' height='16' />}
        pageCount={150}
        onChange={handlePageChange}
        shape='circular'
        perPageAmount
      />
      <Table
        // onChangeAllCheckboxHandler={tableAllHandler}
        // onChangeCheckboxHandler={tableHandler}
        // checkedAll={isCheckedAll}
        topSlot={
          <div className='flex justify-between items-center'>
            <Input
              type='text'
              size='default'
              styleType='underline'
              // label='ibragim'
              iconName='search'
            />
          </div>
        }
        botSlot={
          <Pagination
            pageCount={150}
            onChange={handleTablePageChange}
            perPageAmount={true}
          />
        }
        actionHandlerBtn={actionHandlerBtn}
        theadBgClass='bg-gray-50'
        rounded
        withShadow
        styleType='bordered'
        wrapClassTable='w-[1000px]'
        listHead={[
          {
            text: 'NAME',
            width: 'flex-[0_0_25.7142%]',
            maxWidth: '25.7142%',
          },
          {
            text: 'AGE',
            width: 'flex-[0_0_13.2653%]',
            maxWidth: '13.2653%',
          },
          {
            text: 'ADDRESS',
            width: 'flex-[0_0_43.2653%]',
            maxWidth: '43.2653%',
          },
          {
            text: 'ACTION',
            width: 'flex-[0_0_17.7551%]',
            maxWidth: '17.7551%',
          },
        ]}
        list={list}
      />
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
        checked={isChecked}
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
