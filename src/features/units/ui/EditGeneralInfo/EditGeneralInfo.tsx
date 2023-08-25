import cn from 'classnames';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { UnitsGeneralInfo } from 'entities/units';
import { Button, Modal, Icon, Input } from 'shared/ui';

type IFormInput = {
  bedrooms: string;
  type: string;
  floor: string;
  model: string;
  view: string;
  totalArea: string;
  livingArea: string;
  balconyArea: string;
  plotArea: string;
  project: string;
  price: string;
};

export const EditGeneralInfo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      bedrooms: '',
      type: '',
      floor: '',
      model: '',
      view: '',
      totalArea: '',
      livingArea: '',
      balconyArea: '',
      plotArea: '',
      project: '',
      price: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <UnitsGeneralInfo
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
                    label='Bedrooms'
                    placeholder='Bedrooms'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='bedrooms'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Type'
                    placeholder='Type'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='type'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Floor'
                    placeholder='Floor'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='floor'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Model'
                    placeholder='Model'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='model'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='View'
                    placeholder='View'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='view'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Total area'
                    placeholder='Total area'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='totalArea'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Living area'
                    placeholder='Living area'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='livingArea'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Balcony area'
                    placeholder='Balcony area'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='balconyArea'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Plot area'
                    placeholder='Plot area'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='plotArea'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Project'
                    placeholder='Project'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='project'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Price'
                    placeholder='Price'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='price'
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
