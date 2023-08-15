import cn from 'classnames';
import { Link as ULink, LinkProps } from 'react-router-dom';
import { GetIcon, TIcon } from 'shared/lib';
import { Badge } from 'shared/ui';

interface Props extends LinkProps {
  className?: string;
  icon?: TIcon;
  badgeText?: string;
  badgeClassName?: string;
  chevron?: boolean;
}

export const Link = ({
  to,
  icon,
  badgeText,
  badgeClassName,
  children,
  chevron,
}: Props) => {
  return (
    <ULink
      className={cn(
        'flex py-[8px] px-[14px] items-center text-sm font-medium text-white gap-2 hover:bg-white/10 hover:rounded-md'
      )}
      to={to}
    >
      {icon && <GetIcon name={icon} width='14' height='14' />}
      {chevron ? (
        <>
          {badgeText && (
            <Badge shape='pilled' type='white' className={badgeClassName}>
              {badgeText}
            </Badge>
          )}
          {children}
        </>
      ) : (
        <>
          {children}
          {badgeText && (
            <Badge shape='pilled' type='white' className={badgeClassName}>
              {badgeText}
            </Badge>
          )}
        </>
      )}
    </ULink>
  );
};
