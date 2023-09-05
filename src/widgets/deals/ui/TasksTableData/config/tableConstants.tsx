import cn from 'classnames';
import { Fragment } from 'react';

import { Badge, Checkbox, Icon } from 'shared/ui';
import { TListTableRow } from '../libs/types';

export const tableConstants = (
  onChangeCheckboxHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void,
  handleRemove: (data: TListTableRow) => void
) => {
  return [
    {
      maxWidth: 'max-w-[23.5%]',
      width: 'flex-[0_0_23.5%]',
      title: 'TITLE',
      render: (rowData: TListTableRow) => {
        return (
          <div
            className={cn('text-left truncate text-ellipsis overflow-hidden', {
              'text-gray-300': !rowData.checked,
            })}
          >
            {rowData.title}
          </div>
        );
      },
    },
    {
      maxWidth: 'max-w-[8%]',
      width: 'flex-[0_0_8%]',
      title: 'Completed',
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
      maxWidth: 'max-w-[38.5%]',
      width: 'flex-[0_0_38.5%]',
      title: 'ACCESS ROLES',
      render: (rowData: TListTableRow) => {
        const userIndex = 1;
        return (
          <div
            className={cn({
              'text-gray-300': !rowData.checked,
            })}
          >
            {rowData.accessRoles.map((role, index) => (
              <Fragment key={index}>
                <span
                  className={cn({
                    'text-green-500': userIndex === index && rowData.checked,
                  })}
                >
                  {role.title}
                </span>
                {index !== rowData.accessRoles.length - 1 && ', '}
              </Fragment>
            ))}
          </div>
        );
      },
    },
    {
      maxWidth: 'max-w-[14.5%]',
      width: 'flex-[0_0_14.5%]',
      title: 'DEADLINE',
      render: (rowData: TListTableRow) => {
        return (
          <span
            className={cn({
              'text-gray-300': !rowData.checked,
            })}
          >
            ----
          </span>
        );
      },
    },
    {
      maxWidth: 'max-w-[9.5%]',
      width: 'flex-[0_0_9.5%]',
      title: 'Type',
      render: (rowData: TListTableRow) => {
        return (
          <span>
            <Badge
              type='soft'
              color={!rowData.checked ? 'gray' : 'blue'}
              className='!justify-center'
            >
              System
            </Badge>
          </span>
        );
      },
    },
    {
      maxWidth: 'max-w-[6%]',
      width: 'flex-[0_0_6%]',
      title: 'Edit',
      render: (rowData: TListTableRow) => {
        return (
          <Icon
            className='hover:bg-gray-100 w-[30px] mx-auto'
            size='small'
            icon='pencil-square'
            styleType={!rowData.checked ? 'soft' : 'white'}
            color='gray'
            role={!rowData.checked ? 'div' : 'button'}
            onClick={
              !rowData.checked ? () => false : () => handleRemove(rowData)
            }
          />
        );
      },
    },
  ];
};
