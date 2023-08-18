import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';

// need to change data from store
import { participants, userRoles } from 'pages/leads/ui/Page/data';
import { Input, Button, Avatar } from 'shared/ui';
import { IFormInput, TParticipantItem, TSelectItem } from '../../libs/types';

export const ParticipantsStep = () => {
  const [dropdownPart, setDropdownPart] = useState(participants);
  const [selectedPart, setSelectedPart] = useState<TParticipantItem[]>([
    {
      id: 1,
      avatarUrl: '',
      textTitle: 'Edward King',
      textBody: 'edward@gmail.com',
      rolesType: [
        {
          label: 'Client',
          value: 'client',
        },
      ],
    },
  ]);
  const [choosedPart, setChoosedPart] = useState<TParticipantItem>();
  const [isOpen, setIsOpen] = useState(false);
  const [isExistingInList, setIsExistingInList] = useState(false);
  const { control, handleSubmit, setValue, watch } = useForm<IFormInput>({
    defaultValues: {
      searchText: '',
      userRolesType: {
        label: 'Client',
        value: 'client',
      },
    },
  });
  const searchText = watch('searchText');
  const userRolesType = watch('userRolesType');
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsExistingInList(false);
    if (choosedPart === undefined) return;
    const checkIsExisting = selectedPart.filter((p) => p.id === choosedPart.id);

    if (checkIsExisting.length > 0) {
      setIsExistingInList(true);
    } else {
      setSelectedPart([...selectedPart, choosedPart]);
    }
    setChoosedPart(undefined);
    setValue('searchText', '');
  };

  useEffect(() => {
    handleSearchText(searchText);
  }, [searchText]);

  // handling search input
  const handleSearchText = (search: string) => {
    if (search.length < 1) {
      setChoosedPart(undefined);
      setIsOpen(false);
    } else {
      if (!choosedPart) setIsOpen(true);
    }

    const temp = participants.filter((p) => {
      const checkText = p.textTitle
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
      const checkRole = p.rolesType.value === userRolesType?.value;
      return checkRole && checkText;
    });
    setDropdownPart(temp);
  };

  // dropdown select participant
  const chooseSearchParticipant = (p: any) => {
    setIsOpen(false);
    setValue('searchText', p.textTitle);
    setChoosedPart(p);
  };

  return (
    <>
      {/* form search */}
      <div className={cn('relative mb-[24px]')}>
        <div className={cn('flex items-center')}>
          <Controller
            name='searchText'
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                iconName='search'
                className={cn('flex-1')}
                inputClassName={cn('h-[46px] rounded-r-[0px] shadow-[0px]')}
              />
            )}
          />
          <Controller
            name='userRolesType'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                classNamePrefix='select'
                defaultValue={userRoles[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                name='color'
                options={userRoles}
                components={{
                  IndicatorSeparator: () => null,
                }}
                classNames={{
                  singleValue: (state) =>
                    state.isDisabled ? '!text-gray-300' : '!text-gray-800',
                  control: (state) =>
                    (state.isFocused
                      ? '!border !border-solid !border-blue-500 !shadow-[0px_0px_0px_4px_rgba(59,130,246,0.25)]'
                      : state.isDisabled
                      ? '!border !border-solid !border-gray-200 !bg-gray-50 !shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                      : '!h-[46px] !text-gray-500 !border !border-solid !border-gray-200') +
                    cn(' !rounded-[0px] !border-x-[0px]'),
                  multiValue: (_) =>
                    '!flex !items-center !bg-transparent !border !border-solid !border-gray-200 !text-gray-800 !text-sm !rounded-full',
                  multiValueLabel: (_) => '!text-gray-800 !text-sm',
                  multiValueRemove: (_) =>
                    '!bg-gray-200 w-[15px] h-[15px] mr-[6px] !pl-[0] !pr-[0] !rounded-full',
                }}
              />
            )}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            type='submit'
            size='default'
            className={cn('rounded-l-[0px] border-l-[0px]')}
          >
            Invite
          </Button>
        </div>
        {/* dropdown */}
        <div
          className={cn(
            'z-10 p-[8px] bg-white w-[350px] rounded-lg text-left border border-solid border-gray-200 shadow-[0px_10px_8px_0px_rgba(0,_0,_0,_0.04),0px_4px_3px_0px_rgba(0,_0,_0,_0.10)]',
            {
              'block absolute inset-[56px_auto_auto_0px] m-[0px]': isOpen,
              hidden: !isOpen,
            }
          )}
        >
          <div className={cn('flex flex-col gap-[16px]')}>
            {dropdownPart.length > 0 ? (
              dropdownPart.map((participant, index) => (
                <div
                  className={cn(
                    'flex items-center justify-between rounded-lg p-[8px] gap-[16px] cursor-pointer hover:bg-gray-100'
                  )}
                  key={index}
                  onClick={() => chooseSearchParticipant(participant)}
                >
                  <Avatar
                    styleType={participant.avatarUrl ? 'image' : 'placeholder'}
                    textTitle={participant.textTitle}
                    textBody={participant.textBody}
                  />
                  <div className={cn('text-sm text-right')}>
                    {participant.rolesType.label}
                  </div>
                </div>
              ))
            ) : (
              <div className='gap-[0px]'>
                {isOpen && (
                  <>
                    In <strong>{userRolesType?.label}</strong> you do not have
                    users.
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* isExistingInList */}
      {isExistingInList && (
        <div className={cn('text-sm text-red-500 mb-[24px]')}>
          Your selected user is exist in list. Please choose other options.
        </div>
      )}
      {/* lists participants */}
      <div className={cn('flex flex-col gap-[16px]')}>
        {selectedPart.length > 0 ? (
          selectedPart.map((participant, index) => (
            <div
              className={cn('flex items-center justify-between')}
              key={index}
            >
              <Avatar
                styleType={participant.avatarUrl ? 'image' : 'placeholder'}
                textTitle={participant.textTitle}
                textBody={participant.textBody}
              />
              <Select
                classNamePrefix='select'
                defaultValue={userRoles[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                name='color'
                options={userRoles}
                components={{
                  IndicatorSeparator: () => null,
                }}
                classNames={{
                  singleValue: (state) =>
                    state.isDisabled ? '!text-gray-300' : '!text-gray-800',
                  control: (state) =>
                    (state.isFocused
                      ? '!border !border-solid !border-blue-500 !shadow-[0px_0px_0px_4px_rgba(59,130,246,0.25)]'
                      : state.isDisabled
                      ? '!border !border-solid !border-gray-200 !bg-gray-50 !shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                      : '!h-[46px] !text-gray-500 !border !border-solid !border-gray-200') +
                    cn(' !rounded-[0px] !border-[0px]'),
                  multiValue: (_) =>
                    '!flex !items-center !bg-transparent !border !border-solid !border-gray-200 !text-gray-800 !text-sm !rounded-full',
                  multiValueLabel: (_) => '!text-gray-800 !text-sm',
                  multiValueRemove: (_) =>
                    '!bg-gray-200 w-[15px] h-[15px] mr-[6px] !pl-[0] !pr-[0] !rounded-full',
                }}
              />
            </div>
          ))
        ) : (
          <div className={cn('font-semibold')}>List is empty</div>
        )}
      </div>
    </>
  );
};
