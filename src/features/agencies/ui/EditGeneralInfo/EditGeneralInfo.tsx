import cn from 'classnames';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { AgenciesGeneralInfo } from 'entities/agencies';
import { Button, Modal, Icon, Input } from 'shared/ui';

type IFormInput = {
  licence: string;
  bankAccount: string;
  ORNnumber: string;
  brokerRegistrationDate: string;
  licenseDateOfExpiry: string;
  officeAddress: string;
  contactPerson: string;
};

export const EditGeneralInfo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      licence: '',
      bankAccount: '',
      ORNnumber: '',
      brokerRegistrationDate: '',
      licenseDateOfExpiry: '',
      officeAddress: '',
      contactPerson: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <AgenciesGeneralInfo
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
                    label='License'
                    placeholder='License'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='licence'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Bank account'
                    placeholder='Bank account'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='bankAccount'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='ORN number'
                    placeholder='ORN number'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='ORNnumber'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Broker Registration Date'
                    placeholder='Broker Registration Date'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='brokerRegistrationDate'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='License Date of expiry'
                    placeholder='License Date of expiry'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='licenseDateOfExpiry'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Office address'
                    placeholder='Office address'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='officeAddress'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Contact Person'
                    placeholder='Contact Person'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='contactPerson'
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
