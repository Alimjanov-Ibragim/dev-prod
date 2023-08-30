import cn from 'classnames';

import { loginBGImage } from 'pages/login';
import { LoginFormField } from 'widgets/global';
import { Icon, Title } from 'shared/ui';

export const LoginPage = () => {
  return (
    <div className={cn('flex h-[100vh]')}>
      {/* left side */}
      <div
        className={cn(
          'flex-[0_0_50%]',
          'flex items-center justify-end mr-[48px]'
        )}
      >
        {/* logo */}
        <div
          className={cn(
            'fixed top-[32px] left-[32px]',
            'flex items-center gap-[7px]'
          )}
        >
          <Icon icon='logo-blue-without-text' color='light' />
          <span className={cn('text-[26px] font-bold text-[#2563EB]')}>
            Exdev
          </span>
        </div>
        {/* form fields */}
        <div className={cn('flex flex-col gap-[48px] mt-[-100px] p-[48px]')}>
          <div>
            <Title
              text='Log in to your account'
              className='mb-[12px] text-3xl text-gray-800'
            />
            <span className={cn('text-base text-gray-600')}>
              Your Daily Workspace
            </span>
          </div>
          <LoginFormField />
        </div>
      </div>
      {/* bg - right side */}
      <div
        className={cn('flex-1')}
        style={{
          background: `url(${loginBGImage}) #F3F4F6 50% / cover no-repeat`,
        }}
      ></div>
    </div>
  );
};
