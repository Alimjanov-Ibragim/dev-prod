import { useState, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';

import { ChooseDate } from 'features/ChooseDate';
import { ExportOptions } from 'features/ExportOptions';
import { FilterDropdown } from 'features/FilterDropdown';
import { Search } from 'features/Search';
import { Table, Pagination, Title } from 'shared/ui';
import { data } from './config/data';
import { tableConstants } from './config/tableConstants';

export const TableData = () => {
  const { pathname } = useLocation();
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

  //handle Page Change
  const handleTablePageChange = (event: { selected: number }) => {
    console.log('Current event: ', event);
  };

  return (
    <Table
      topSlot={
        <>
          {pathname.split('/').length <= 2 ? (
            <>
              <Search />
              <div className='flex items-center gap-[12px]'>
                <ChooseDate />
                <ExportOptions />
                <FilterDropdown />
              </div>
            </>
          ) : (
            <Title text='Agents' />
          )}
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
      cols={tableConstants(
        tableAllHandler,
        isCheckedAll,
        tableHandler,
        actionHandlerBtn
      )}
    />
  );
};
