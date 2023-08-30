import cn from 'classnames';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';

import { priceFormatter } from 'shared/lib';
import { Avatar, Badge, Checkbox, Link } from 'shared/ui';
import { TListTableRow } from '../libs/types';
import { DealStatusType, dealStatusesColorSwitch } from './const';

export const tableConstants = (
  onChangeAllCheckboxHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checkedAll: boolean,
  onChangeCheckboxHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void
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
      maxWidth: 'max-w-[3.3333%]',
      width: 'flex-[0_0_3.3333%]',
      title: 'ID',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      maxWidth: 'max-w-[10.625%]',
      width: 'flex-[0_0_10.625%]',
      title: 'Title',
      render: (rowData: TListTableRow) => {
        const lengthPath = pathname.split('/').length;
        return (
          <Link
            to={`${lengthPath < 2 ? pathname : '/deals'}/${rowData.id}`}
            className='!inline-flex !text-slate-800 font-semibold absolute translate-y-[-50%] translate-x-[-50%] w-full h-full cursor-pointer justify-center'
          >
            {rowData.title || '----'}
          </Link>
        );
      },
    },
    {
      maxWidth: 'max-w-[10.625%]',
      width: 'flex-[0_0_10.625%]',
      title: 'Agent',
      render: (rowData: TListTableRow) => {
        return (
          <Avatar
            wrapClassName='justify-center'
            classNameTextWrap='ml-0'
            imageWrapClassName='hidden'
            textTitle={
              rowData.participants[1].entity.user?.displayName || 'unknown'
            }
          />
        );
      },
    },
    {
      maxWidth: 'max-w-[13.625%]',
      width: 'flex-[0_0_13.625%]',
      title: 'Client/Company',
      render: (rowData: TListTableRow) => {
        return (
          <span>
            {rowData.participants.filter((item) => item.role === 'Client')[0]
              ?.entity.client.displayName || 'unknown'}
          </span>
        );
      },
    },
    {
      maxWidth: 'max-w-[12.625%]',
      width: 'flex-[0_0_12.625%]',
      title: 'Status',
      render: (rowData: TListTableRow) => {
        const statusColor = dealStatusesColorSwitch(rowData.status.id);
        return (
          <Badge
            size='default'
            type='soft'
            indicator
            color={statusColor}
            className={cn('inline-flex capitalize', {})}
          >
            {DealStatusType[rowData.status.id]}
          </Badge>
        );
      },
    },
    {
      maxWidth: 'max-w-[4%]',
      width: 'flex-[0_0_4%]',
      title: 'Unit',
      render: (rowData: TListTableRow) => {
        return (
          <div className='inline-flex flex-col items-start'>
            <span className='mb-[3px]'>{rowData.unit.title}</span>
          </div>
        );
      },
    },
    {
      maxWidth: 'max-w-[7.5%]',
      width: 'flex-[0_0_7.5%]',
      title: 'Unit Status',
      render: (rowData: TListTableRow) => {
        const statusText = rowData.unit.status.title;
        const color =
          statusText === 'Available'
            ? 'green'
            : statusText === 'Blocked'
            ? 'red'
            : 'gray';
        return (
          <div className='inline-flex flex-col items-start'>
            <Badge size='default' type='soft' indicator color={color}>
              {rowData.unit.status.title}
            </Badge>
          </div>
        );
      },
    },
    {
      maxWidth: 'max-w-[13.5%]',
      width: 'flex-[0_0_13.5%]',
      title: 'Next Job',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.jobs[0]?.title || 'unknown'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[4.6666%]',
      width: 'flex-[0_0_4.6666%]',
      title: 'Payment',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.deal || '-----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[7.5%]',
      width: 'flex-[0_0_7.5%]',
      title: 'Created Date',
      render: (rowData: TListTableRow) => {
        return <span>{dayjs(rowData.createdAt).format('DD/MM/YYYY')}</span>;
      },
    },
    {
      maxWidth: 'max-w-[9.5%]',
      width: 'flex-[0_0_9.5%]',
      title: 'Price',
      render: (rowData: TListTableRow) => {
        return <span>{priceFormatter.format(rowData.amount)}</span>;
      },
    },
  ];
};
