import cn from 'classnames';

import { Avatar, Badge, Button, Checkbox, Progress } from 'shared/ui';
import { TListTableRow } from '../libs/types';

export const tableConstants = (
  onChangeAllCheckboxHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checkedAll: boolean,
  onChangeCheckboxHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void,
  handleEdit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: TListTableRow
  ) => void
) => {
  return [
    {
      width: 'flex-[0_0_5%]',
      title: 'checkbox',
      titleRender: () => (
        <Checkbox
          className='mx-auto'
          onChange={(e) => onChangeAllCheckboxHandler(e)}
          checked={checkedAll || false}
          indeterminate
          forUniqueItem={-1}
        />
      ),
      render: (rowData: TListTableRow) => {
        return (
          <Checkbox
            className='mx-auto'
            onChange={(e) => onChangeCheckboxHandler(e, rowData.id)}
            checked={rowData.checked}
            forUniqueItem={rowData.id}
          />
        );
      },
    },
    {
      width: 'flex-[0_0_5%]',
      title: 'ID',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      width: 'flex-[0_0_20%]',
      title: 'Name',
      render: (rowData: TListTableRow) => {
        return (
          <Avatar
            wrapClassName='pl-6'
            imageSrc='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
            textTitle={
              rowData.participants[1].entity.user?.displayName || 'unknown'
            }
          />
        );
      },
    },
    {
      width: 'flex-[0_0_20%]',
      title: 'Status',
      render: (rowData: TListTableRow) => {
        const statusText = rowData.unit.status.title;
        const color =
          statusText === 'Available'
            ? 'green'
            : statusText === 'Blocked'
            ? 'red'
            : 'gray';
        return (
          <div className='inline-flex'>
            <Badge size='default' type='soft' indicator color={color}>
              {rowData.unit.status.title}
            </Badge>
          </div>
        );
      },
    },
    {
      width: 'flex-[0_0_20%]',
      title: 'Title',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.title}</span>;
      },
    },
    {
      width: 'flex-[0_0_20%]',
      title: 'Progress',
      render: (rowData: TListTableRow) => {
        return (
          <Progress
            successColor='bg-teal-500'
            width={rowData.status.id * 10}
            type='trailing-label-left'
            titleLabel='hellow'
            // successColor='bg-teal-500'
          />
        );
      },
    },
    {
      width: 'flex-[0_0_10%]',
      title: 'Action',
      render: (rowData: TListTableRow) => {
        return (
          <Button
            className='mx-auto'
            typeStyle='white'
            leadingIcon='pencil-fill'
            color='gray'
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEdit(e, rowData)
            }
          >
            Edit
          </Button>
        );
      },
    },
  ];
};
