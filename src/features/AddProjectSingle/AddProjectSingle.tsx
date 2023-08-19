import cn from 'classnames';
import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { Button, Modal } from 'shared/ui';

type IFormInput = {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
};

export const AddProjectSingle = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      iceCreamType: {
        label: '',
        value: '',
      },
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button
        leadingIcon='pencil-square'
        leadingIconColor='light'
        typeStyle='white'
        color='gray'
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        contentLabel='Ex-dev: Edit Project name'
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleClose}
        closeHandler={handleClose}
        title='Edit Project name'
        botSlot={
          <div className={cn('flex justify-between items-center w-full')}>
            {false && (
              <Button
                className='w-full !text-gray-500 w-auto hover:bg-gray-100'
                typeStyle='link'
                color='dark'
                size='default'
                onClick={handleClose}
                leadingIconClassName='!p-0 w-[14px] h-[14px]'
                leadingIcon='chevron-left'
                leadingIconColor='gray'
              >
                Previous step
              </Button>
            )}
            <div className={cn('flex items-center gap-[10px] ml-auto')}>
              <Button
                className='w-full'
                typeStyle='white'
                color='dark'
                size='default'
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                className='w-full'
                size='default'
                trailingIcon='chevron-right'
                trailingIconClassName='!p-0 w-[14px] h-[14px]'
                trailingIconColor='light'
              >
                Next
              </Button>
            </div>
          </div>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)}></form>
      </Modal>
    </div>
  );
};
