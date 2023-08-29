import cn from 'classnames';

import { DealsSendComment } from 'features/deals';
import { DealsCommentCard } from 'entities/deals';

const arr = [1, 2, 3, 4, 5];

export const Comment = () => {
  return (
    <>
      <div className={cn('text-lg font-semibold text-slate-800')}>
        Comments (5)
      </div>
      <div
        className={cn(
          'flex flex-col gap-[24px] p-[24px] rounded-md border border-slate-200'
        )}
      >
        {arr.map((item) => (
          <DealsCommentCard key={item} />
        ))}
        <DealsSendComment />
      </div>
    </>
  );
};
