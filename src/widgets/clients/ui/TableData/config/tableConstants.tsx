import { useLocation } from 'react-router-dom';

import { Checkbox, Icon, Link } from 'shared/ui';
import { TListTableRow } from '../libs/types';

export const tableConstants = (
  onChangeAllCheckboxHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checkedAll: boolean,
  onChangeCheckboxHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void,
  handleRemove: (data: TListTableRow) => void
) => {
  const { pathname } = useLocation();
  return [
    {
      maxWidth: 'max-w-[3%]',
      width: 'flex-[0_0_3%]',
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
      maxWidth: 'max-w-[6%]',
      width: 'flex-[0_0_6%]',
      title: 'ID',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      maxWidth: 'max-w-[22.5%]',
      width: 'flex-[0_0_22.5%]',
      title: 'Name',
      render: (rowData: TListTableRow) => {
        return (
          <>
            <Link
              to={`${pathname}/${rowData.id}`}
              className='!inline-flex !text-slate-800 font-semibold absolute translate-y-[-50%] translate-x-[-50%] w-full h-full cursor-pointer justify-center'
            ></Link>
            <div>{rowData.displayName || '----'}</div>
          </>
        );
      },
    },
    {
      maxWidth: 'max-w-[20.5%]',
      width: 'flex-[0_0_20.5%]',
      title: 'Agent',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.user.displayName || 'unknown'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[20.5%]',
      width: 'flex-[0_0_20.5%]',
      title: 'Leads and Deals',
      render: (rowData: TListTableRow) => {
        return (
          <span>
            {rowData.entity._count.participants ||
              'No existing leads and deals'}
          </span>
        );
      },
    },
    {
      maxWidth: 'max-w-[21.5%]',
      width: 'flex-[0_0_21.5%]',
      title: 'Email',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.entity.contacts[0].emailContact.email}</span>;
      },
    },
    {
      maxWidth: 'max-w-[6%]',
      width: 'flex-[0_0_6%]',
      title: 'Action',
      render: (rowData: TListTableRow) => {
        return (
          <Icon
            className='hover:bg-gray-100  w-[30px] mx-auto'
            size='small'
            icon='trash-fill'
            styleType='white'
            role='button'
            onClick={() => handleRemove(rowData)}
          />
        );
      },
    },
  ];
};
