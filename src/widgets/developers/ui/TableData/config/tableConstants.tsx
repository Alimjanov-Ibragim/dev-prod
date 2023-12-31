import { useLocation } from 'react-router-dom';

import { Avatar, Checkbox, Icon, Link } from 'shared/ui';
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
      maxWidth: 'max-w-[16.5%]',
      width: 'flex-[0_0_16.5%]',
      title: 'DEVELOPER NAME',
      render: (rowData: TListTableRow) => {
        return (
          <>
            <Link
              to={`${pathname}/${rowData.id}`}
              className='!inline-flex !text-slate-800 font-semibold absolute translate-y-[-50%] translate-x-[-50%] w-full h-full cursor-pointer justify-center'
            ></Link>
            <div>{rowData.title}</div>
          </>
        );
      },
    },
    {
      maxWidth: 'max-w-[23.5%]',
      width: 'flex-[0_0_23.5%]',
      title: 'ADDRESS',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.address || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[20.5%]',
      width: 'flex-[0_0_20.5%]',
      title: 'PAYMENT TYPES',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.paymentTypes.length || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[24.5%]',
      width: 'flex-[0_0_24.5%]',
      title: 'WEBSITE',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.website || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[6%]',
      width: 'flex-[0_0_6%]',
      title: 'Action',
      render: (rowData: TListTableRow) => {
        return (
          <Icon
            className='hover:bg-gray-100 w-[30px] mx-auto'
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
