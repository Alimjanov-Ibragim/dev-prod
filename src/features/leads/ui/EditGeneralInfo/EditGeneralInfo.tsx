import cn from 'classnames';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { LeadsGeneralInfo } from 'entities/leads';
import { Button, Modal, Icon, Input } from 'shared/ui';

type IFormInput = {
  dealId: string;
  unit: string;
  initialPrice: string;
  discountedPrice: string;
  discount: string;
  source: string;
  leadType: string;
};

export const EditGeneralInfo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      dealId: '',
      unit: '',
      initialPrice: '',
      discountedPrice: '',
      discount: '',
      source: '',
      leadType: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <LeadsGeneralInfo
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
                    label='Deal ID'
                    placeholder='Deal ID'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='dealId'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Unit'
                    placeholder='Unit'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='unit'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Initial price'
                    placeholder='Initial price'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='initialPrice'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Discounted price'
                    placeholder='Discounted price'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='discountedPrice'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Discount'
                    placeholder='Discount'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='discount'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Source'
                    placeholder='Source'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='source'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Lead Type'
                    placeholder='Lead Type'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='leadType'
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
