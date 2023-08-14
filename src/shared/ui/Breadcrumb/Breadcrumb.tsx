import cn from 'classnames';
import { Link } from 'react-router-dom';
import { GetIcon } from 'shared/lib';

type TBreadcrumbItem = {
  text: string;
  link: string;
};

type Props = {
  list: TBreadcrumbItem[];
  classnameWrap?: string;
};

export const Breadcrumb = ({ list, classnameWrap }: Props) => {
  return (
    <div
      className={cn(
        'ex-breadcrumb flex items-center gap-[16px] text-sm font-medium',
        {
          [classnameWrap as string]: classnameWrap,
        }
      )}
    >
      {list.map((item, index) =>
        index === list.length - 1 ? (
          <div key={index} className={cn('text-gray-800')}>
            {item.text}
          </div>
        ) : (
          <Link
            key={index}
            to={item.link}
            className={cn('flex items-center text-gray-600 gap-[16px]')}
          >
            {item.text} <GetIcon name='preline-slash' width='12' height='12' />
          </Link>
        )
      )}
    </div>
  );
};
