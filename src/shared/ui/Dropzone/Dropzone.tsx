import cn from 'classnames';
import { Dispatch, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { GetIcon, TFile } from 'shared/lib';

type Props = {
  maxFiles?: number;
  // setFiles?: Dispatch<TFile[]>;
  // files?: TFile[];
  // preview?: boolean;
  // imageDelete?: (id: number) => Promise<any>;
  wrapperClassName?: string;
};

export const Dropzone = ({
  maxFiles,
  // setFiles,
  // files,
  // preview,
  // imageDelete,
  wrapperClassName,
}: Props) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'application/pdf': [],
    },
    maxFiles: maxFiles || 10,
    onDrop,
  });

  return (
    <div
      {...getRootProps({
        className: cn('ex-dropzone', {
          [wrapperClassName as string]: wrapperClassName,
        }),
      })}
    >
      <input {...getInputProps()} />
      {/* {isDragActive && ( */}
      <div className='flex flex-col items-center'>
        <GetIcon
          name='dropzone-img'
          width='68.821'
          height='44'
          className='mb-[26px]'
        />
        <div className='mb-[4px] text-sm font-semibold text-blue-500'>
          <span className='text-sm font-medium text-gray-800'>
            Drop your files here or
          </span>{' '}
          browse
        </div>
        <span className='text-xs font-medium text-gray-400'>
          Maximum size: 50MB
        </span>
      </div>
      {/* )} */}
    </div>
  );
};
