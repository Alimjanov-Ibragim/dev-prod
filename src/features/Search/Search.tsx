import cn from 'classnames';

import { Input } from 'shared/ui';

export const Search = () => {
  return (
    <div className={cn('w-[290px]')}>
      <Input
        type='text'
        size='default'
        styleType='underline'
        iconName='search'
      />
    </div>
  );
};
