import cn from 'classnames';
import { useState, Fragment } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

// need to change data from store
import { ColourOption, colourOptions } from 'pages/leads/ui/Page/data';
import { AsyncSelect, Badge, Button, Modal } from 'shared/ui';
import { IFormInput } from './libs/types';
import { ParticipantsStep } from './ui';

const STEPS = [
  { step: 1, text: 'Lead details', active: true },
  { step: 2, text: 'Participants', active: false },
];

export const AddLead = () => {
  const [steps, setSteps] = useState(STEPS || []);
  const [isOpen, setIsOpen] = useState(false);
  // form fields
  const { control, register, handleSubmit, reset, watch } = useForm<IFormInput>(
    {
      defaultValues: {
        leadType: 'eoi',
        interactiveType: 'broker',
        unit: [
          {
            label: 'Ocean',
            value: 'ocean',
          },
        ],
        leadIDBitrix: [
          {
            label: 'Blue',
            value: 'blue',
          },
        ],
      },
    }
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // without participants list
    console.log(data);
    handleClose();
    const temp = steps.map((item) =>
      item.step === 1 ? { ...item, active: true } : { ...item, active: false }
    );
    setSteps(temp);
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => (setIsOpen(false), reset());

  // select example
  const filterColors = (inputValue: string) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<ColourOption[]>((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  // handle steps
  const handleSteps = (step: number) => {
    const temp = steps.map((item) =>
      item.step === step
        ? { ...item, active: true }
        : { ...item, active: false }
    );
    setSteps(temp);
  };

  return (
    <div>
      <Button leadingIcon='plus' leadingIconColor='light' onClick={handleOpen}>
        Add lead
      </Button>
      <Modal
        maxWidthContent='550px'
        contentLabel='Ex-dev: Add lead'
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleClose}
        closeHandler={handleClose}
        title={steps[0].active ? 'New lead' : 'Participants'}
        botSlot={
          <div className={cn('flex justify-between items-center w-full')}>
            {steps[1].active && (
              <Button
                className='!text-gray-500 w-auto hover:bg-gray-100'
                typeStyle='link'
                color='dark'
                size='default'
                onClick={() => handleSteps(1)}
                leadingIconClassName='!p-0 w-[14px] h-[14px]'
                leadingIcon='chevron-left'
                leadingIconColor='gray'
              >
                Previous step
              </Button>
            )}
            <div className={cn('flex items-center gap-[10px] ml-auto')}>
              <Button
                typeStyle='white'
                color='dark'
                size='default'
                onClick={handleClose}
              >
                Cancel
              </Button>
              {steps[0].active && (
                <Button
                  size='default'
                  trailingIcon='chevron-right'
                  trailingIconClassName='!p-0 w-[14px] h-[14px]'
                  trailingIconColor='light'
                  onClick={() => handleSteps(2)}
                >
                  Next
                </Button>
              )}
              {steps[1].active && (
                <Button onClick={handleSubmit(onSubmit)} size='default'>
                  Create lead
                </Button>
              )}
            </div>
          </div>
        }
      >
        <form>
          {/* steps text on top */}
          <div
            className={cn(
              'w-full inline-flex items-center justify-between gap-[20px]',
              {
                'mb-[40px]': steps[0].active,
                'mb-[24px]': steps[1].active,
              }
            )}
          >
            {steps.map((step, index) => (
              <Fragment key={index}>
                <Badge
                  type={step.active ? 'solid' : 'white'}
                  size='large'
                  shape='pilled'
                  className='w-[38px] h-[38px] flex items-center justify-center !text-sm !font-semibold'
                >
                  {step.step}
                </Badge>
                <span className={cn('text-base text-gray-800 font-semibold')}>
                  {step.text}
                </span>
                {steps.length - 1 !== index && (
                  <span className='bg-gray-200 flex-1 h-[1px]'></span>
                )}
              </Fragment>
            ))}
          </div>

          {/* first step fields */}
          {steps[0].active && (
            <div className={cn('flex flex-col gap-[32px]')}>
              {/* item */}
              <div
                className={cn(
                  'w-full flex justify-between items-center gap-[24px]'
                )}
              >
                <label
                  htmlFor='residential'
                  className='w-full relative cursor-pointer flex items-center py-[15px] px-[16px] border border-gray-200 rounded-md'
                >
                  <input
                    id='residential'
                    type='radio'
                    value='residential'
                    className='relative w-[16px] h-[16px] appearance-none border border-gray-200 rounded-full checked:bg-blue-500 checked:before:content-[""] checked:before:absolute checked:before:w-[7px] checked:before:h-[7px] checked:before:bg-white checked:before:rounded-full checked:before:top-[3.5px] checked:before:left-[3.5px] checked:border-transparent'
                    {...register('leadType')}
                  />
                  <span className='ml-2 text-sm font-medium text-gray-900'>
                    Residential
                  </span>
                </label>
                <label
                  htmlFor='eoi'
                  className='w-full relative cursor-pointer flex items-center py-[15px] px-[16px] border border-gray-200 rounded-md'
                >
                  <input
                    id='eoi'
                    type='radio'
                    value={'eoi'}
                    className='relative w-[16px] h-[16px] appearance-none border border-gray-200 rounded-full checked:bg-blue-500 checked:before:content-[""] checked:before:absolute checked:before:w-[7px] checked:before:h-[7px] checked:before:bg-white checked:before:rounded-full checked:before:top-[3.5px] checked:before:left-[3.5px] checked:border-transparent'
                    {...register('leadType')}
                  />
                  <span className='ml-2 text-sm font-medium text-gray-900'>
                    EOI
                  </span>
                </label>
              </div>
              {/* item */}
              <div
                className={cn(
                  'w-full flex justify-between items-center gap-[24px]'
                )}
              >
                <label
                  htmlFor='broker'
                  className='w-full relative cursor-pointer flex items-center py-[15px] px-[16px] border border-gray-200 rounded-md'
                >
                  <input
                    id='broker'
                    type='radio'
                    value='broker'
                    className='relative w-[16px] h-[16px] appearance-none border border-gray-200 rounded-full checked:bg-blue-500 checked:before:content-[""] checked:before:absolute checked:before:w-[7px] checked:before:h-[7px] checked:before:bg-white checked:before:rounded-full checked:before:top-[3.5px] checked:before:left-[3.5px] checked:border-transparent'
                    {...register('interactiveType')}
                  />
                  <span className='ml-2 text-sm font-medium text-gray-900'>
                    Broker
                  </span>
                </label>
                <label
                  htmlFor='direct'
                  className='w-full relative cursor-pointer flex items-center py-[15px] px-[16px] border border-gray-200 rounded-md'
                >
                  <input
                    id='direct'
                    type='radio'
                    value={'direct'}
                    className='relative w-[16px] h-[16px] appearance-none border border-gray-200 rounded-full checked:bg-blue-500 checked:before:content-[""] checked:before:absolute checked:before:w-[7px] checked:before:h-[7px] checked:before:bg-white checked:before:rounded-full checked:before:top-[3.5px] checked:before:left-[3.5px] checked:border-transparent'
                    {...register('interactiveType')}
                  />
                  <span className='ml-2 text-sm font-medium text-gray-900'>
                    Direct
                  </span>
                </label>
              </div>
              <Controller
                name='unit'
                control={control}
                render={({ field }) => (
                  <AsyncSelect
                    {...field}
                    options={promiseOptions}
                    label='Unit'
                  />
                )}
              />
              <Controller
                name='leadIDBitrix'
                control={control}
                render={({ field }) => (
                  <AsyncSelect
                    {...field}
                    options={promiseOptions}
                    label='Lead ID Bitrix'
                  />
                )}
              />
            </div>
          )}
          {steps[1].active && <ParticipantsStep />}
        </form>
      </Modal>
    </div>
  );
};
