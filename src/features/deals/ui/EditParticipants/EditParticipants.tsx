import cn from 'classnames';
import { useState } from 'react';
import {
  useForm,
  SubmitHandler,
  Controller,
  useFieldArray,
} from 'react-hook-form';

// need to change data from store
import { ColourOption, colourOptions } from 'pages/leads/ui/Page/data';
import { DealsParticipants } from 'entities/deals';
import { Button, Modal, Icon, AsyncSelect } from 'shared/ui';

type IFormInput = {
  participants: {
    role: {
      label: string;
      value: string;
    };
    participant: {
      label: string;
      value: string;
    };
  }[];
};

export const EditParticipants = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      participants: [
        {
          role: {
            label: 'Ocean',
            value: 'ocean',
          },
          participant: {
            label: 'Blue',
            value: 'blue',
          },
        },
      ],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'participants', // unique name for your Field Array
    }
  );
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // options
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

  return (
    <DealsParticipants
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
            contentLabel='Ex-dev: Edit participants info'
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={handleClose}
            closeHandler={handleClose}
            title='Edit participants info'
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
                  <Button className='w-full' size='default'>
                    Apply
                  </Button>
                </div>
              </div>
            }
          >
            <form
              className={cn('grid gap-[15px]')}
              onSubmit={handleSubmit(onSubmit)}
            >
              {fields.map((field, index) => (
                <div
                  className={cn('flex justify-between items-end')}
                  key={field.id}
                >
                  <div className={cn('grid grid-cols-2 gap-x-[15px] flex-1')}>
                    <Controller
                      render={({
                        fieldState: { invalid, isTouched, isDirty, error },
                        field: { onChange, onBlur, value, name, ref },
                      }) => (
                        <AsyncSelect
                          options={promiseOptions}
                          label='Role'
                          onChange={onChange}
                          defaultValue={value}
                        />
                      )}
                      name={`participants.${index}.role`}
                      control={control}
                      rules={{ required: true }}
                    />
                    <Controller
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <AsyncSelect
                          options={promiseOptions}
                          label='Participant'
                          onChange={onChange}
                          defaultValue={value}
                        />
                      )}
                      name={`participants.${index}.participant`}
                      control={control}
                      rules={{ required: true }}
                    />
                  </div>
                  <Icon
                    color='red'
                    icon='trash-fill'
                    role='button'
                    onClick={() => remove(index)}
                  />
                </div>
              ))}
              <Icon
                color='blue'
                styleType='soft'
                icon='plus'
                role='button'
                onClick={() =>
                  append({
                    role: {
                      label: '',
                      value: '',
                    },
                    participant: {
                      label: '',
                      value: '',
                    },
                  })
                }
              />
            </form>
          </Modal>
        </>
      }
    />
  );
};
