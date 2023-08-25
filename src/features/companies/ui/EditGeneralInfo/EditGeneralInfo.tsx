import cn from 'classnames';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { CompaniesGeneralInfo } from 'entities/companies';
import { Button, Modal, Icon, Input } from 'shared/ui';

type IFormInput = {
  placeOfRegistration: string;
  registeredAddress: string;
  tradeLicenseNumber: string;
  dateOfRegistration: string;
};

export const EditGeneralInfo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      placeOfRegistration: '',
      registeredAddress: '',
      tradeLicenseNumber: '',
      dateOfRegistration: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <CompaniesGeneralInfo
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
                    label='Place of registration'
                    placeholder='Place of registration'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='placeOfRegistration'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Registered address'
                    placeholder='Registered address'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='registeredAddress'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Trade license number'
                    placeholder='Trade license number'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='tradeLicenseNumber'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Date of registration'
                    placeholder='Date of registration'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='dateOfRegistration'
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
