import cn from 'classnames';

import { Avatar } from './Avatar';
import { TAvatarProps } from './lib';

interface Props extends TAvatarProps {
  /** List of array avatars */
  list: TAvatarProps[];
  /** "morelength" functionality. Slice "n" of list.  */
  moreLength?: number;
  /** Classname for "morelength" link. Use !important. */
  moreLengthClassName?: string;
  /** "morelength" link */
  moreLengthLink?: string;
}

export const AvatarGroup = ({
  list,
  moreLength,
  moreLengthClassName,
  moreLengthLink,
  size = 'default',
  ...parentProps
}: Props) => {
  const remainingList = list.length - (moreLength || 0);

  return (
    <div className={cn('flex -space-x-4')}>
      {list.slice(moreLength).map(({ styleType, ...props }, index) => (
        <Avatar key={index} styleType={styleType} {...parentProps} {...props} />
      ))}
      {moreLength && (
        <a
          className={cn(
            'relative flex items-center justify-center text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600',
            {
              'w-[26px] h-[26px]': list[0].size === 'xs' || size === 'xs',
              'w-[38px] h-[38px]': list[0].size === 'small' || size === 'small',
              'w-[46px] h-[46px]':
                list[0].size === 'default' || size === 'default',
              'w-[62px] h-[62px]': list[0].size === 'large' || size === 'large',
              [moreLengthClassName as string]: moreLengthClassName,
            }
          )}
          href={moreLengthLink || '#'}
        >
          + {remainingList}
        </a>
      )}
    </div>
  );
};
