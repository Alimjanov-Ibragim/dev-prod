import cn from 'classnames';
import { useCallback } from 'react';
import ReactModal, { Props } from 'react-modal';

import { TButtonColors } from 'shared/lib';
import { Button, Title } from 'shared/ui';

interface TProps extends Props {
  maxWidthContent?: string;
  classNameTop?: string;
  children?: React.ReactNode;
  applyHandler: () => void;
  closeHandler?: () => void;
  title?: string;
  titleClassName?: string;
  closeBtnText?: string;
  applyBtnText?: string;
  closeBtnColor?: TButtonColors;
  applyBtnColor?: TButtonColors;
}

export const ConfirmationModal = ({
  maxWidthContent = '35%',
  classNameTop,
  children,
  title = 'Are you sure ?',
  titleClassName,
  applyHandler,
  closeHandler,
  applyBtnColor = 'red',
  closeBtnColor = 'dark',
  isOpen,
  closeBtnText = 'Cancel',
  applyBtnText = 'Apply',
  ...props
}: TProps) => {
  const applyBtn = useCallback(() => {
    if (!applyHandler || !closeHandler) return;
    closeHandler();
    return applyHandler();
  }, [isOpen]);

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      overlayClassName={'fixed inset-0 z-20'}
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgb(31 41 55 / 35%)',
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          maxWidth: maxWidthContent,
          margin: '0 auto',
          padding: '0',
          border: 'none',
          borderRadius: '16px',
          boxShadow:
            '0px 20px 13px 0px rgba(0, 0, 0, 0.03), 0px 8px 5px 0px rgba(0, 0, 0, 0.08)',
          bottom: 'auto',
          inset: 'auto',
        },
      }}
      {...props}
    >
      <div
        className={cn('px-[10px] pt-[20px] pb-[10px] relative', {
          [classNameTop as string]: classNameTop,
        })}
      >
        {title && (
          <div className={cn('flex justify-between items-center gap-[10px]')}>
            <Title text={title} className={titleClassName} />
          </div>
        )}
        {children}
      </div>
      <div className={cn('flex items-center w-full px-[10px] pb-[10px]')}>
        <div className={cn('flex items-center gap-[10px] ml-auto mr-auto')}>
          <Button
            className='w-full'
            typeStyle='white'
            color={closeBtnColor}
            size='small'
            onClick={closeHandler}
          >
            {closeBtnText}
          </Button>
          <Button
            className='w-full'
            size='small'
            onClick={applyBtn}
            color={applyBtnColor}
          >
            {applyBtnText}
          </Button>
        </div>
      </div>
    </ReactModal>
  );
};
