import { useLocation } from 'react-router-dom';

import { priceFormatter } from 'shared/lib';
import { Checkbox } from 'shared/ui';
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
      title: 'Part',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.part}</span>;
      },
    },
    {
      maxWidth: 'max-w-[27.5%]',
      width: 'flex-[0_0_27.5%]',
      title: 'Type',
      render: (rowData: TListTableRow) => {
        return <span>{PaymentPartType[rowData.typeId]}</span>;
      },
    },
    {
      maxWidth: 'max-w-[20.5%]',
      width: 'flex-[0_0_20.5%]',
      title: 'Percent / Amount',
      render: (rowData: TListTableRow) => {
        return (
          <span>
            {rowData.percent
              ? `${rowData.percent}%`
              : priceFormatter.format(rowData.amount!) || '----'}
          </span>
        );
      },
    },
    {
      maxWidth: 'max-w-[15.5%]',
      width: 'flex-[0_0_15.5%]',
      title: 'Due Date',
      render: (rowData: TListTableRow) => {
        const dueDate =
          rowData.typeId === PaymentPartType.Handover ? (
            // project?.formatDate("completionAt")
            `test-29-06-2024`
          ) : (
            <>
              {rowData.months
                ? `${rowData.months} month${rowData.months > 1 ? 's ' : ' '}`
                : ''}
              {rowData.days
                ? `${rowData.days} day${rowData.days > 1 ? 's' : ''}`
                : ''}
              {!rowData.months && !rowData.days ? '----' : ''}
            </>
          );

        return <span>{dueDate || '----'}</span>;
      },
    },
    {
      maxWidth: 'max-w-[23.5%]',
      width: 'flex-[0_0_23.5%]',
      title: 'Due Type',
      render: (rowData: TListTableRow) => {
        return <span>{rowData.dueType}</span>;
      },
    },
  ];
};
