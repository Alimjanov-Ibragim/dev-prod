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
      maxWidth: 'max-w-[3%]',
      width: 'flex-[0_0_3%]',
      title: 'ID',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      maxWidth: 'max-w-[16.5%]',
      width: 'flex-[0_0_16.5%]',
      title: 'PROJECT NAME',
      render: (rowData: TListTableRow) => {
        const lengthPath = pathname.split('/').length;
        return (
          <>
            <Link
              to={`${lengthPath < 2 ? pathname : '/projects'}/${rowData.id}`}
              className='!inline-flex !text-slate-800 font-semibold absolute translate-y-[-50%] translate-x-[-50%] w-full h-full cursor-pointer justify-center'
            ></Link>
            <div>{rowData.title}</div>
          </>
        );
      },
    },
    {
      maxWidth: 'max-w-[20.5%]',
      width: 'flex-[0_0_20.5%]',
      title: 'DEVELOPER',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.developer.title || 'unknown'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[15.5%]',
      width: 'flex-[0_0_15.5%]',
      title: 'COMMUNITY',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.community || 'unknown'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[14.5%]',
      width: 'flex-[0_0_14.5%]',
      title: 'COMPLETION DATE',
      render: (rowData: TListTableRow) => {
        return <span>{dayjs(rowData.completionAt).format('YYYY-MM')}</span>;
      },
    },
    {
      maxWidth: 'max-w-[21%]',
      width: 'flex-[0_0_21%]',
      title: 'UNITS',
      render: (rowData: TListTableRow) => {
        return (
          <>
            <div className='mb-[3px] text-gray-500'>
              Count:{' '}
              <span className='text-sm text-black'>
                {rowData._count?.total}
              </span>{' '}
            </div>
            <div className='text-gray-500'>
              <span>
                Blocked:{' '}
                <span className='text-sm font-semibold text-black'>
                  {rowData._count?.blocked}
                </span>{' '}
              </span>
              <span>
                Available:{' '}
                <span className='text-sm font-semibold text-black'>
                  {rowData._count?.available}
                </span>{' '}
              </span>
              <span>
                Booked:{' '}
                <span className='text-sm font-semibold text-black'>
                  {rowData._count?.booked}
                </span>{' '}
              </span>
              <span>
                Sold:{' '}
                <span className='text-sm font-semibold text-black'>
                  {rowData._count?.sold}
                </span>{' '}
              </span>
            </div>
          </>
        );
      },
    },
    {
      maxWidth: 'max-w-[6%]',
      width: 'flex-[0_0_6%]',
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
