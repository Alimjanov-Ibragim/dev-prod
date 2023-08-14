import cn from 'classnames';

type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return (
    <h1 className={cn('text-xl font-semibold text-slate-800 text-left')}>
      {text}
    </h1>
  );
};
