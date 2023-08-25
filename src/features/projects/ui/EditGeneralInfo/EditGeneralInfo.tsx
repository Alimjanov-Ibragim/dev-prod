import cn from 'classnames';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { ProjectsGeneralInfo } from 'entities/projects';
import { Button, Modal, Icon, Input } from 'shared/ui';

type IFormInput = {
  developer: string;
  community: string;
  address: string;
  estimatedCompletionDate: string;
  blockable: string;
  brokerAgencyShare: string;
  agentShareForCompanyLead: string;
  agentShareForPersonalLead: string;
  bankName: string;
  swiftCode: string;
  corporateAccount: string;
  escrowAccount: string;
  ibanAccount: string;
};

export const EditGeneralInfo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      developer: '',
      community: '',
      address: '',
      estimatedCompletionDate: '',
      blockable: '',
      brokerAgencyShare: '',
      agentShareForCompanyLead: '',
      agentShareForPersonalLead: '',
      bankName: '',
      swiftCode: '',
      corporateAccount: '',
      escrowAccount: '',
      ibanAccount: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <ProjectsGeneralInfo
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
                    label='Developer'
                    placeholder='Developer'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='developer'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Community'
                    placeholder='Community'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='community'
                control={control}
                rules={{ required: true }}
              />
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
                    label='Estimated Completion Date'
                    placeholder='Estimated Completion Date'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='estimatedCompletionDate'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Blockable'
                    placeholder='Blockable'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='blockable'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Broker Agency share'
                    placeholder='Broker Agency share'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='brokerAgencyShare'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Agent Share For Company Lead'
                    placeholder='Agent Share For Company Lead'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='agentShareForCompanyLead'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Agent Share For Personal Lead'
                    placeholder='Agent Share For Personal Lead'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='agentShareForPersonalLead'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Bank name'
                    placeholder='Bank name'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='bankName'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Swift code'
                    placeholder='Swift code'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='swiftCode'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Corporate account'
                    placeholder='Corporate account'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='corporateAccount'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Escrow Account'
                    placeholder='Escrow Account'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='escrowAccount'
                control={control}
                rules={{ required: true }}
              />
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    label='Iban Account'
                    placeholder='Iban Account'
                    value={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
                name='ibanAccount'
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
