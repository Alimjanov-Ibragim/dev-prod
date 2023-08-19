import dayjs from 'dayjs';

import { Checkbox } from 'shared/ui';
import { TListTableRow } from '../libs/types';

export const tableConstants = (
  onChangeAllCheckboxHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checkedAll: boolean,
  onChangeCheckboxHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void
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
      maxWidth: 'max-w-[21.5%]',
      width: 'flex-[0_0_21.5%]',
      title: 'COMPANY NAME',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.title}</span>;
      },
    },
    {
      maxWidth: 'max-w-[23.5%]',
      width: 'flex-[0_0_23.5%]',
      title: 'AUTHORISED SIGNATURY NAME',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.signatoryName || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[19.5%]',
      width: 'flex-[0_0_19.5%]',
      title: 'TRADE LICENSE NUMBER',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.tradeLicense}</span>;
      },
    },
    {
      maxWidth: 'max-w-[11%]',
      width: 'flex-[0_0_11%]',
      title: 'DATE OF REGISTRATION',
      render: (rowData: TListTableRow) => {
        return (
          <span>{dayjs(rowData.registrationAt).format('DD-MM-YYYY')}</span>
        );
      },
    },
    {
      maxWidth: 'max-w-[15.5%]',
      width: 'flex-[0_0_15.5%]',
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
  ];
};
