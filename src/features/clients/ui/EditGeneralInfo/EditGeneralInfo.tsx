import cn from 'classnames';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { ClientsGeneralInfo } from 'entities/clients';
import { Button, Modal, Icon, Input } from 'shared/ui';

type IFormInput = {
  address: string;
  docNumber: string;
  nationality: string;
  countryOfIssue: string;
  placeOfBirth: string;
  dateOfBirth: string;
  dateOfPassportCreation: string;
  dateOfPassportExpiry: string;
  passport: string;
};

export const EditGeneralInfo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      address: '',
      docNumber: '',
      nationality: '',
      countryOfIssue: '',
      placeOfBirth: '',
      dateOfBirth: '',
      dateOfPassportCreation: '',
      dateOfPassportExpiry: '',
      passport: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <ClientsGeneralInfo
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
                    label='Document Number'
                    placeholder='Document Number'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='docNumber'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Nationality'
                    placeholder='Nationality'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='nationality'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Country Of Issue'
                    placeholder='Country Of Issue'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='countryOfIssue'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Place of Birth'
                    placeholder='Place of Birth'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='placeOfBirth'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Date of Birth'
                    placeholder='Date of Birth'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='dateOfBirth'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Date of Passport Creation'
                    placeholder='Date of Passport Creation'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='dateOfPassportCreation'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Date Of Passport Expiry'
                    placeholder='Date Of Passport Expiry'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='dateOfPassportExpiry'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Passport'
                    placeholder='Passport'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='passport'
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
