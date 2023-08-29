import cn from 'classnames';

import { Button, Input } from 'shared/ui';

export const SendComment = () => {
  return (
    <div className={cn('flex items-center gap-[8px] py-[8px]')}>
      <Input className='flex-1' placeholder='Your comment' />
      <Button size='default'>Send</Button>
    </div>
  );
};
