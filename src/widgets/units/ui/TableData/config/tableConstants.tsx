import { useLocation } from 'react-router-dom';

import { priceFormatter } from 'shared/lib';
import { Badge, Checkbox, Icon, Link } from 'shared/ui';
import { TListTableRow } from '../libs/types';
import { unitsStatusesColorSwitch } from './const';

export const tableConstants = (
  onChangeAllCheckboxHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checkedAll: boolean,
  onChangeCheckboxHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void,
  handleDownload: (data: TListTableRow) => void,
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
      title: 'Project',
      render: (rowData: TListTableRow) => {
        return (
          <Link
            to={`${pathname}/${rowData.id}`}
            className='!inline-flex !text-slate-800 font-semibold absolute translate-y-[-50%] translate-x-[-50%] w-full h-full cursor-pointer justify-center'
          >
            {rowData.project.title || '----'}
          </Link>
        );
      },
    },
    {
      maxWidth: 'max-w-[10%]',
      width: 'flex-[0_0_10%]',
      title: 'Unit number',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.unitNumber || 'unknown'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[10%]',
      width: 'flex-[0_0_10%]',
      title: 'Status',
      render: (rowData: TListTableRow) => {
        return (
          <div className='inline-flex flex-col items-start'>
            <Badge
              size='default'
              type='soft'
              indicator
              color={unitsStatusesColorSwitch(rowData.status.id)}
            >
              {rowData.status.title}
            </Badge>
          </div>
        );
      },
    },
    {
      maxWidth: 'max-w-[10%]',
      width: 'flex-[0_0_10%]',
      title: 'Type',
      render: (rowData: TListTableRow) => {
        return (
          <div className='inline-flex flex-col items-start'>
            <Badge size='default' type='outlined' color='gray'>
              {rowData.type.title}
            </Badge>
          </div>
        );
      },
    },
    {
      maxWidth: 'max-w-[12%]',
      width: 'flex-[0_0_12%]',
      title: 'View',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.view || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[6%]',
      width: 'flex-[0_0_6%]',
      title: 'Floor',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.floor}</span>;
      },
    },
    {
      maxWidth: 'max-w-[6%]',
      width: 'flex-[0_0_6%]',
      title: 'Bedrooms',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.bedrooms}</span>;
      },
    },
    {
      maxWidth: 'max-w-[8%]',
      width: 'flex-[0_0_8%]',
      title: 'TOTAL AREA',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.totalArea || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[12%]',
      width: 'flex-[0_0_12%]',
      title: 'Price',
      render: (rowData: TListTableRow) => {
        return <span>{priceFormatter.format(rowData.price)}</span>;
      },
    },

    {
      maxWidth: 'max-w-[8%]',
      width: 'flex-[0_0_8%]',
      title: 'Action',
      render: (rowData: TListTableRow) => {
        return (
          <span className='flex justify-center gap-[5px]'>
            <Icon
              className='hover:bg-gray-100'
              size='small'
              icon='download'
              role='button'
              color='light'
              onClick={() => handleDownload(rowData)}
            />
            <Icon
              className='hover:bg-gray-100'
              size='small'
              icon='trash-fill'
              styleType='white'
              role='button'
              onClick={() => handleRemove(rowData)}
            />
          </span>
        );
      },
    },
  ];
};
