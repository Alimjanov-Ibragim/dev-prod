import dayjs from 'dayjs';
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
      maxWidth: 'max-w-[2%]',
      width: 'flex-[0_0_2%]',
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
      maxWidth: 'max-w-[4%]',
      width: 'flex-[0_0_4%]',
      title: 'ID',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      maxWidth: 'max-w-[12%]',
      width: 'flex-[0_0_12%]',
      title: 'Agency Name',
      render: (rowData: TListTableRow) => {
        return (
          <Link
            to={`${pathname}/${rowData.id}`}
            className='!inline-flex !text-slate-800 font-semibold absolute translate-y-[-50%] translate-x-[-50%] w-full h-full cursor-pointer justify-center'
          >
            {rowData.title || '----'}
          </Link>
        );
      },
    },
    {
      maxWidth: 'max-w-[10%]',
      width: 'flex-[0_0_10%]',
      title: 'LICENSE',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.licenseNumber || 'unknown'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[10%]',
      width: 'flex-[0_0_10%]',
      title: 'BANK ACCOUNT',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.bankAccount || 'unknown'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[10%]',
      width: 'flex-[0_0_10%]',
      title: 'Orn',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.orn}</span>;
      },
    },
    {
      maxWidth: 'max-w-[8%]',
      width: 'flex-[0_0_8%]',
      title: 'CONTACT PERSON',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.contactPerson || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[10%]',
      width: 'flex-[0_0_10%]',
      title: 'LICENSE DATE OF EXPIRY',
      render: (rowData: TListTableRow) => {
        return (
          <span>{dayjs(rowData.licenseExpireAt).format('DD/MM/YYYY')}</span>
        );
      },
    },
    {
      maxWidth: 'max-w-[10%]',
      width: 'flex-[0_0_10%]',
      title: 'BROKER REGISTRATION DATE',
      render: (rowData: TListTableRow) => {
        return (
          <span>{dayjs(rowData.registrationDate).format('DD/MM/YYYY')}</span>
        );
      },
    },
    {
      maxWidth: 'max-w-[8%]',
      width: 'flex-[0_0_8%]',
      title: 'OFFICE ADDRESS',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.city || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[12%]',
      width: 'flex-[0_0_12%]',
      title: 'EMAIL',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.entity.contacts[0].emailContact.email}</span>;
      },
    },
    {
      maxWidth: 'max-w-[4%]',
      width: 'flex-[0_0_4%]',
      title: 'Action',
      render: (rowData: TListTableRow) => {
        return (
          <Icon
            className='hover:bg-gray-100'
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
