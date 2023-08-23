import { useState, ChangeEvent } from 'react';

import { Table, Title, Pagination } from 'shared/ui';
import { data } from './config/data';
import { tableConstants } from './config/tableConstants';

export const TableData = () => {
  // table checkbox check
  const [list, setList] = useState(data || []);
  const tableHandler = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const isTrueAll: boolean[] = [];
    const tempList = list.map((item) => {
      if (id === item.id) {
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
  };

  //handle Page Change
  const handleTablePageChange = (event: { selected: number }) => {
    console.log('Current event: ', event);
  };

  /** Delete btn */
  const actionHandlerBtn = (item: any) => {
    alert(item.id);
    console.log('item: ', item);
  };

  return (
    <Table
      topSlot={
        <>
          <Title text='Tasks' />
        </>
      }
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
      cols={tableConstants(tableHandler, actionHandlerBtn)}
    />
  );
};
