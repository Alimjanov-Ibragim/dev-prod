import cn from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { Button, Input } from 'shared/ui';

type IFormInput = {
  email: string;
  password: string;
};

export const LoginFormField = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className={cn('flex flex-col gap-[24px]')}>
        <Controller
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <Input
              className='w-[400px]'
              label='Email address'
              value={value}
              onChange={onChange}
              ref={ref}
            />
          )}
          name='email'
          control={control}
          rules={{ required: true }}
        />
        <Controller
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <Input
              className='w-[400px]'
              label='Password'
              type='password'
              value={value}
              onChange={onChange}
              ref={ref}
            />
          )}
          name='password'
          control={control}
          rules={{ required: true }}
        />
      </form>
      <Button
        onClick={handleSubmit(onSubmit)}
        size='default'
        className={cn('mt-[32px] w-full')}
        type='submit'
      >
        Log in
      </Button>
    </div>
  );
};
