import cn from 'classnames';
import { Fragment } from 'react';

import { Badge, Button, Checkbox } from 'shared/ui';
import { TListTableRow } from '../libs/types';

export const tableConstants = (
  onChangeCheckboxHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void
) => {
  return [
    {
      maxWidth: 'max-w-[23.5%]',
      width: 'flex-[0_0_23.5%]',
      title: 'TITLE',
      render: (rowData: TListTableRow) => {
        return (
          <div className='text-left'>
            <div>{rowData.title}</div>
            <div className='flex items-center gap-[12px] mt-[5px]'>
              <Button
                typeStyle='link'
                className='relative h-auto px-[1px] py-[3px] before:absolute before:content-[""] before:border-b before:border-blue-600 before:left-[0] before:right-[0] before:bottom-[0] !text-blue-600'
              >
                Apply
              </Button>
              <Button
                typeStyle='link'
                className='relative h-auto px-[1px] py-[3px]'
              >
                Generate
              </Button>
              <Button
                typeStyle='link'
                className='relative h-auto px-[5px] py-[3px] rounded-md border border-gray-500'
              >
                Accept
              </Button>
              <Button
                disabled
                typeStyle='link'
                className='relative h-auto px-[5px] py-[3px]'
              >
                Link
              </Button>
            </div>
          </div>
        );
      },
    },
    {
      maxWidth: 'max-w-[8%]',
      width: 'flex-[0_0_8%]',
      title: 'Status',
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
          <div>
            {rowData.accessRoles.map((role, index) => (
              <Fragment key={index}>
                <span
                  className={cn({
                    'text-green-500': userIndex === index,
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
      maxWidth: 'max-w-[20.5%]',
      width: 'flex-[0_0_20.5%]',
      title: 'DEADLINE',
      render: (rowData: TListTableRow) => {
        return <span>----</span>;
      },
    },
    {
      maxWidth: 'max-w-[9.5%]',
      width: 'flex-[0_0_9.5%]',
      title: 'Due Date',
      render: (rowData: TListTableRow) => {
        return (
          <span>
            <Badge type='soft' className='!justify-center'>
              System
            </Badge>
          </span>
        );
      },
    },
  ];
};
