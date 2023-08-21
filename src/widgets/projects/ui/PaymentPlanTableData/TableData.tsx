import React from 'react';
import { useState } from 'react';

import { Table, Pagination } from 'shared/ui';
import { data } from './config/data';
import { tableConstants } from './config/tableConstants';
import { TListTableRow } from './libs/types';

export const TableData = () => {
  // table checkbox check
  const listData = JSON.parse(data.paymentPlan.plan);
  const dataHandling = listData.map((item: TListTableRow) =>
    Object.assign(
      {},
      {
        ...item,
        checked: false,
      }
    )
  );

  const [list, setList] = useState(dataHandling || []);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const tableHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const isTrueAll: boolean[] = [];
    const tempList = list.map((item: TListTableRow) => {
      if (id === item.part) {
        isTrueAll.push(!item.checked);
        return Object.assign(
          {},
          {
            ...item,
            checked: !item.checked,
          }
        );
      } else {
        isTrueAll.push(item.checked);
        return item;
      }
    });
    setList(tempList);
    if (!isTrueAll.includes(false)) {
      setIsCheckedAll(true);
    }
    if (isTrueAll.includes(false)) {
      setIsCheckedAll(false);
    }
  };
  const tableAllHandler = () => {
    const temp = list.map((item: TListTableRow) =>
      Object.assign(
        {},
        {
          ...item,
          checked: isCheckedAll ? false : true,
        }
      )
    );
    setIsCheckedAll(!isCheckedAll);
    setList(temp);
  };
  /** Delete btn */
  const actionHandlerBtn = (item: any) => {
    alert(item.id);
    console.log('item: ', item);
  };

  //handle Page Change
  const handleTablePageChange = (event: { selected: number }) => {
    console.log('Current event: ', event);
  };

  return (
    <Table
      botSlot={
        <Pagination
          pageCount={150}
          onChange={handleTablePageChange}
          perPageAmount={true}
        />
      }
      theadBgClass='bg-gray-50'
      rounded
      withShadow
      styleType='bordered'
      wrapClassTable='w-full'
      list={list}
      cols={tableConstants(
        tableAllHandler,
        isCheckedAll,
        tableHandler,
        actionHandlerBtn
      )}
    />
  );
};
