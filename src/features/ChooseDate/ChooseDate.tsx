import cn from 'classnames';
import { Datepicker } from 'shared/ui';

export const ChooseDate = () => {
  return (
    <div className={cn('ex-choose-date')}>
      <Datepicker />
    </div>
  );
};
