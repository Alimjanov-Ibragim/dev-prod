import { useState, ChangeEvent } from 'react';

import { Table, Title } from 'shared/ui';
import { data } from './config/data';
import { tableConstants } from './config/tableConstants';

export const TableData = () => {
  // table checkbox check
  const dataHandling = data.map((item) =>
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
  const tableHandler = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const isTrueAll: boolean[] = [];
    const tempList = list.map((item) => {
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
    const temp = list.map((item) =>
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

  return (
    <Table
      topSlot={
        <>
          <Title text='Payment plan' />
        </>
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
