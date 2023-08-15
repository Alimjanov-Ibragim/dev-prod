import cn from 'classnames';
import ReactModal, { Props } from 'react-modal';

import { Icon } from '../Icon';
import { Title } from '../Title';

interface TProps extends Props {
  isOpen: boolean;
  maxWidthContent?: string;
  classNameTop?: string;
  classNameBot?: string;
  children?: React.ReactNode;
  botSlot?: React.ReactNode;
  closeHandler?: () => void;
  title?: string;
  titleClassName?: string;
}

export const Modal = ({
  isOpen,
  maxWidthContent = '35%',
  classNameTop,
  classNameBot,
  children,
  botSlot,
  closeHandler,
  title,
  titleClassName,
  ...props
}: TProps) => {
  console.log(props.onRequestClose);

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      overlayClassName={'fixed inset-0 z-20'}
      style={{
        overlay: {
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
        },
      }}
      {...props}
    >
      <div
        className={cn('p-[32px] relative', {
          [classNameTop as string]: classNameTop,
        })}
      >
        <div
          className={cn(
            'flex justify-between items-center gap-[10px] mb-[24px]'
          )}
        >
          {title && <Title text={title} className={titleClassName} />}
          <Icon
            role='button'
            icon='x'
            styleType='soft'
            color='light'
            size='default'
            onClick={closeHandler}
            className='inline-flex hover:bg-gray-100 ml-auto'
            classNameIcon='fill-gray-700'
          />
        </div>
        {children}
      </div>
      {botSlot && (
        <div
          className={cn('p-[20px] mt-auto', {
            [classNameBot as string]: classNameBot,
          })}
        >
          {botSlot}
        </div>
      )}
    </ReactModal>
  );
};
