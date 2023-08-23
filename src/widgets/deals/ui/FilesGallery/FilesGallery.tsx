import cn from 'classnames';

// need to change data from store
import { ColourOption, colourOptions } from 'pages/leads/ui/Page/data';
import { AsyncSelect, Dropzone } from 'shared/ui';
import { data } from './config';

export const FilesGallery = () => {
  // select example
  const filterColors = (inputValue: string) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<ColourOption[]>((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  return (
    <div className={cn('grid grid-cols-3 gap-[24px]')}>
      {data.map((item, index) => (
        <div key={index} className={cn('flex flex-col gap-[12px]')}>
          <AsyncSelect options={promiseOptions} />
          <div
            className={cn(
              'flex flex-col gap-[20px] p-[20px] rounded-md	border border-slate-200 bg-white'
            )}
          >
            <img src={item.img} alt='' />
            <div className={cn('text-xs font-medium text-gray-400')}>
              <div
                className={cn('mb-[4px] text-sm font-medium text-slate-800')}
              >
                {item.title}
              </div>
              {item.text}
            </div>
          </div>
        </div>
      ))}
      <div className={cn('flex flex-col gap-[12px]')}>
        <div className='min-h-[46px]'></div>
        <div
          className={cn(
            'relative h-full rounded-md	border border-dashed hover:border-solid hover:border-blue-500 border-gray-200 bg-white cursor-pointer transition'
          )}
        >
          <Dropzone
            wrapperClassName={cn(
              'flex flex-col justify-center absolute w-full h-full'
            )}
          />
        </div>
      </div>
    </div>
  );
};
