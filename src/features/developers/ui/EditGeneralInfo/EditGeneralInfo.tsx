import cn from 'classnames';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { DevelopersGeneralInfo } from 'entities/developers';
import { Button, Modal, Icon, Input } from 'shared/ui';

type IFormInput = {
  address: string;
  paymentTypes: string;
  website: string;
};

export const EditGeneralInfo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      address: '',
      paymentTypes: '',
      website: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <DevelopersGeneralInfo
      rightSlot={
        <>
          <Icon
            icon='pencil-square'
            size='small'
            color='gray'
            role='button'
            onClick={handleOpen}
          />
          <Modal
            contentLabel='Ex-dev: Edit general information'
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={handleClose}
            closeHandler={handleClose}
            title='Edit general information'
            botSlot={
              <div className={cn('flex justify-between items-center w-full')}>
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
                    // trailingIcon='chevron-right'
                    // trailingIconClassName='!p-0 w-[14px] h-[14px]'
                    // trailingIconColor='light'
                  >
                    Apply
                  </Button>
                </div>
              </div>
            }
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cn('grid grid-cols-2 gap-x-[15px] gap-y-[20px]')}
            >
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Address'
                    placeholder='Address'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='address'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Payment types'
                    placeholder='Payment types'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='paymentTypes'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Website'
                    placeholder='Website'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='website'
                control={control}
                rules={{ required: true }}
              />
            </form>
          </Modal>
        </>
      }
    />
  );
};
