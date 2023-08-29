import cn from 'classnames';

export const CommentCard = () => {
  return (
    <div
      className={cn(
        'flex flex-col gap-[8px] p-[16px] rounded border border-slate-100 bg-slate-50'
      )}
    >
      {/* top */}
      <div className={cn('flex items-center')}>
        <div className={cn('text-sm font-semibold text-slate-700 mr-[8px]')}>
          Robert Fox
        </div>
        <div
          className={cn('flex items-center gap-[8px] text-xs text-slate-500')}
        >
          <span>•</span>
          6m ago
        </div>
      </div>
      {/* bottom text */}
      <div className={cn('text-sm text-slate-700')}>
        Hi, please provide a passport and booking. Cheers!
      </div>
    </div>
  );
};
