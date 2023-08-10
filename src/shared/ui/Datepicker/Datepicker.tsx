import moment, { Moment } from 'moment';
import { useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { GetIcon } from 'shared/lib';

export const Datepicker = () => {
  const [state, setState] = useState({
    start: moment().subtract(29, 'days'),
    end: moment(),
  });
  const { start, end } = state;
  const handleCallback = (start: Moment, end: Moment) => {
    setState({ start, end });
    console.log('date: ', {
      start: start.format('MM/DD/YYYY'),
      end: end.format('MM/DD/YYYY'),
    });
  };
  const label = start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY');

  return (
    <DateRangePicker
      onCallback={handleCallback}
      initialSettings={{
        startDate: start.toDate(),
        endDate: end.toDate(),
        timePicker: true,
        locale: {
          /** Show this date format in popover footer */
          format: 'MM/DD/YYYY h:mm A',
        },
        ranges: {
          Today: [moment().toDate(), moment().toDate()],
          Yesterday: [
            moment().subtract(1, 'days').toDate(),
            moment().subtract(1, 'days').toDate(),
          ],
          'Last 7 Days': [
            moment().subtract(6, 'days').toDate(),
            moment().toDate(),
          ],
          'Last 30 Days': [
            moment().subtract(29, 'days').toDate(),
            moment().toDate(),
          ],
          'This Month': [
            moment().startOf('month').toDate(),
            moment().endOf('month').toDate(),
          ],
          'Last Month': [
            moment().subtract(1, 'month').startOf('month').toDate(),
            moment().subtract(1, 'month').endOf('month').toDate(),
          ],
        },
      }}
    >
      {/* <button>Click Me To Open Picker!</button> */}
      <div className='relative'>
        <button className='absolute left-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed'>
          <GetIcon
            name='calendar4-range'
            width='14'
            height='14'
            className='fill-gray-800'
          />
        </button>
        {/* <input
          type='text'
          className='w-[362px] h-[38px] pl-[40px] text-[15px] font-medium text-gray-500 bg-white border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-md outline-none'
          // value={value}
          readOnly
        /> */}
        <div
          id='reportrange'
          className='flex items-center justify-start w-[362px] h-[38px] pl-[40px] text-[15px] font-medium text-gray-500 bg-white border border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-md outline-none'
          // style={{
          //   background: '#fff',
          //   cursor: 'pointer',
          //   padding: '5px 10px',
          //   border: '1px solid #ccc',
          //   width: '100%',
          // }}
        >
          <span>{label}</span>
        </div>
      </div>
    </DateRangePicker>
  );
};
