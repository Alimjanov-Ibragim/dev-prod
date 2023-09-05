import Big from 'big.js';
import dayjs from 'dayjs';

import { priceFormatter } from 'shared/lib';
import { Checkbox, Icon, Progress } from 'shared/ui';
import { PaymentPartType, TListTableRow } from '../libs/types';

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
            onChange={(e) => onChangeCheckboxHandler(e, rowData.part)}
            checked={rowData.checked}
            forUniqueItem={rowData.part}
          />
        );
      },
    },
    {
      maxWidth: 'max-w-[10%]',
      width: 'flex-[0_0_10%]',
      title: 'Type',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.type.title}</span>;
      },
    },
    {
      maxWidth: 'max-w-[27.5%]',
      width: 'flex-[0_0_27.5%]',
      title: 'Completeness',
      render: (rowData: TListTableRow) => {
        return (
          <span>
            <Progress width={rowData.completeness} type='top-floating-label' />
          </span>
        );
      },
    },
    {
      maxWidth: 'max-w-[23.5%]',
      width: 'flex-[0_0_23.5%]',
      title: 'Amount',
      render: (rowData: TListTableRow) => {
        return <span>{priceFormatter.format(rowData.amount!) || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[10.5%]',
      width: 'flex-[0_0_10.5%]',
      title: 'Percent',
      render: (rowData: TListTableRow) => {
        const amount = rowData.amount * Math.random();
        const percent = rowData.amount
          ? Big(rowData.amount)
              .div(amount ? Big(amount).div(100) : amount)
              .toFixed(2)
          : rowData.amount;

        return <span>{percent}%</span>;
      },
    },
    {
      maxWidth: 'max-w-[19.5%]',
      width: 'flex-[0_0_19.5%]',
      title: 'Due Date',
      render: (rowData: TListTableRow) => {
        const dueDate = rowData.dueDate
          ? dayjs(rowData.dueDate).format('DD-MM-YYYY')
          : rowData.type?.id === PaymentPartType.Handover
          ? `test-title Completion Date`
          : rowData.months === 0 && rowData.days === 0
          ? 'Reservation Agreement Signed Day'
          : `${
              !!rowData.months
                ? `${rowData.months} month${rowData.months > 1 ? 's' : ''} `
                : ''
            }${
              !!rowData.days
                ? `${rowData.days} day${rowData.days > 1 ? 's' : ''}`
                : ''
            } ${rowData?.dueType}`;

        return <span>{dueDate || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[6%]',
      width: 'flex-[0_0_6%]',
      title: 'Edit',
      render: (rowData: TListTableRow) => {
        return (
          <Icon
            className='hover:bg-gray-100  w-[30px] mx-auto'
            size='small'
            icon='pencil-square'
            styleType='white'
            role='button'
            onClick={() => handleRemove(rowData)}
          />
        );
      },
    },
  ];
};
