import cn from 'classnames';
import dayjs from 'dayjs';

import { Checkbox } from 'shared/ui';
import { TListTableRow } from '../libs/types';

const USER_ROLE_ID = 1;

export const tableConstants = (
  onChangeAllCheckboxHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checkedAll: boolean,
  onChangeCheckboxHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void,
  handleRemove: (data: TListTableRow) => void
) => {
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
      title: 'TYPE',
      render: (rowData: TListTableRow) => {
        return (
          <span className={cn('font-semibold')}>
            {rowData.deal?.title ? 'Deal' : 'Lead'}
          </span>
        );
      },
    },
    {
      maxWidth: 'max-w-[15.5%]',
      width: 'flex-[0_0_15.5%]',
      title: 'DEAL/LEAD TITLE',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.deal?.title || rowData.lead?.title}</span>;
      },
    },
    {
      maxWidth: 'max-w-[20.5%]',
      width: 'flex-[0_0_20.5%]',
      title: 'TITLE',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.title || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[24.5%]',
      width: 'flex-[0_0_24.5%]',
      title: 'ACCESS ROLES',
      render: (rowData: TListTableRow) => {
        return rowData.accessRoles?.map((x, i) => {
          return (
            <span
              key={x.id}
              className={cn('ml-2', {
                'text-green-600': x.id === USER_ROLE_ID,
              })}
            >
              {x.title}
              {rowData.accessRoles?.length !== i + 1 && ', '}
            </span>
          );
        });
      },
    },
    {
      maxWidth: 'max-w-[14%]',
      width: 'flex-[0_0_14%]',
      title: 'DEADLINE',
      render: (rowData: TListTableRow) => {
        return (
          <span>
            {rowData.deadline
              ? dayjs(rowData.deadline).format('DD-MM-YYYY')
              : '----'}
          </span>
        );
      },
    },
  ];
};
